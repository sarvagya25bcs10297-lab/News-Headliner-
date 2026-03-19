import { useState } from 'react';
import './NewsCard.css';

function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&q=60';

export default function NewsCard({ article, isRead, onMarkAsRead }) {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(prev => !prev);
    };

    const handleMarkRead = (e) => {
        e.stopPropagation();
        onMarkAsRead(article.id);
    };

    return (
        <article
            className={`news-card ${isRead ? 'read' : ''} ${expanded ? 'expanded' : ''}`}
            id={`news-card-${encodeURIComponent(article.id).slice(0, 30)}`}
        >
            {/* Clickable header area */}
            <div className="news-card-header" onClick={handleToggle} role="button" tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(); }}
            >
                <div className="news-card-thumbnail">
                    <img
                        src={article.urlToImage || FALLBACK_IMAGE}
                        alt=""
                        loading="lazy"
                        onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                    />
                </div>

                <div className="news-card-content">
                    <div className="news-card-meta">
                        <span className="news-card-category">{article.category}</span>
                        <span className="news-card-dot">·</span>
                        <span className="news-card-source">{article.source?.name || 'Unknown'}</span>
                        <span className="news-card-dot">·</span>
                        <span className="news-card-date">{formatDate(article.publishedAt)}</span>
                    </div>

                    <h2 className="news-card-title">{article.title}</h2>

                    <div className="news-card-chevron">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Expandable description area */}
            <div className="news-card-body">
                <div className="news-card-body-inner">
                    <p className="news-card-description">
                        {article.description || 'No description available for this article.'}
                    </p>

                    <div className="news-card-actions">
                        {!isRead ? (
                            <button className="mark-read-btn" onClick={handleMarkRead} id="mark-read-btn">
                                <span className="mark-read-icon">✓</span>
                                Mark as Read
                            </button>
                        ) : (
                            <span className="read-label">
                                <span className="read-label-icon">✓</span>
                                Read
                            </span>
                        )}

                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="read-full-link"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Read full article →
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
