import NewsCard from './NewsCard';
import './NewsList.css';

function SkeletonCard() {
    return (
        <div className="skeleton-card">
            <div className="skeleton-thumb"></div>
            <div className="skeleton-lines">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
            </div>
        </div>
    );
}

export default function NewsList({ articles, readArticles, onMarkAsRead, loading, error, onRetry }) {
    if (loading) {
        return (
            <div className="loading-container" id="loading-state">
                <div className="spinner"></div>
                <p>Fetching the latest headlines…</p>
                <div className="skeleton-grid" style={{ marginTop: '32px' }}>
                    {[1, 2, 3, 4, 5].map(i => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container" id="error-state">
                <span className="error-icon">⚠️</span>
                <h3>Something went wrong</h3>
                <p>{error}</p>
                <button className="retry-btn" onClick={onRetry}>Try Again</button>
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div className="empty-container" id="empty-state">
                <span className="empty-icon">📭</span>
                <h3>No articles found</h3>
                <p>Try selecting a different category.</p>
            </div>
        );
    }

    return (
        <section className="news-list" id="news-list" aria-label="News articles">
            <p className="news-list-count">
                Showing <strong>{articles.length}</strong> article{articles.length !== 1 ? 's' : ''}
            </p>
            <div className="news-list-grid">
                {articles.map((article) => (
                    <NewsCard
                        key={article.id}
                        article={article}
                        isRead={readArticles.has(article.id)}
                        onMarkAsRead={onMarkAsRead}
                    />
                ))}
            </div>
        </section>
    );
}
