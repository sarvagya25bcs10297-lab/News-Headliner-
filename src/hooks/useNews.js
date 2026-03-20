import { useState, useEffect, useMemo, useCallback } from 'react';

const API_KEY = '6972e3ea40f9417891a5d7626a94a682';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

const CATEGORIES = ['general', 'business', 'technology', 'entertainment', 'sports', 'health', 'science'];

// Helpers for localStorage persistence
function loadReadArticles() {
    try {
        const stored = localStorage.getItem('newsreader_read');
        return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
        return new Set();
    }
}

function saveReadArticles(readSet) {
    try {
        localStorage.setItem('newsreader_read', JSON.stringify([...readSet]));
    } catch {
        // Silently fail if localStorage is unavailable
    }
}

// Fetch with fallback through a CORS proxy
// NewsAPI free tier blocks browser requests, so we try direct first,
// then fall back to a CORS proxy if it fails.
async function fetchWithProxy(url) {
    try {
        const res = await fetch(url, {
            headers: { 'X-Api-Key': API_KEY },
        });
        if (res.ok) return res;
    } catch {
        // Direct request failed (likely CORS), try proxy
    }

    // Fallback: use a public CORS proxy
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    const proxyRes = await fetch(proxyUrl);
    if (!proxyRes.ok) {
        throw new Error(`API request failed (status ${proxyRes.status})`);
    }
    return proxyRes;
}

export default function useNews() {
    const [articles, setArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [readArticles, setReadArticles] = useState(loadReadArticles);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch headlines for all categories and tag each article
    const fetchAllNews = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const promises = CATEGORIES.map(async (category) => {
                const url = `${BASE_URL}?country=us&category=${category}&pageSize=10&apiKey=${API_KEY}`;
                const res = await fetchWithProxy(url);
                const data = await res.json();

                if (data.status === 'error') {
                    console.warn(`NewsAPI error for ${category}:`, data.message);
                    return [];
                }

                // Tag each article with its category
                return (data.articles || [])
                    .filter(a => a.title && a.title !== '[Removed]')
                    .map(a => ({
                        ...a,
                        category: category.charAt(0).toUpperCase() + category.slice(1),
                        id: a.url, // use URL as unique identifier
                    }));
            });

            const results = await Promise.all(promises);
            const allArticles = results.flat();

            // Remove duplicates by URL
            const seen = new Set();
            const unique = allArticles.filter(a => {
                if (seen.has(a.id)) return false;
                seen.add(a.id);
                return true;
            });

            if (unique.length === 0) {
                setError('No articles returned. The API key may be invalid or rate-limited.');
            }

            setArticles(unique);
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err.message || 'Failed to fetch news. Please try again.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllNews();
    }, [fetchAllNews]);

    // Filter articles by selected category
    const filteredArticles = useMemo(() => {
        if (selectedCategory === 'All') return articles;
        return articles.filter(a => a.category === selectedCategory);
    }, [articles, selectedCategory]);

    // Mark an article as read and persist
    const markAsRead = useCallback((articleId) => {
        setReadArticles(prev => {
            const next = new Set(prev);
            next.add(articleId);
            saveReadArticles(next);
            return next;
        });
    }, []);

    return {
        articles,
        filteredArticles,
        selectedCategory,
        setSelectedCategory,
        readArticles,
        markAsRead,
        loading,
        error,
        retry: fetchAllNews,
    };
}
