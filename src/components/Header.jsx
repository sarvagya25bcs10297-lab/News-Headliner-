import './Header.css';

export default function Header({ readCount, totalCount, darkMode, onToggleTheme }) {
    const progress = totalCount > 0 ? (readCount / totalCount) * 100 : 0;

    return (
        <header className="header" id="app-header">
            <div className="header-left">
                <h1 className="header-title">
                    <span className="header-icon">📰</span>
                    <span className="header-title-text">NewsReader</span>
                </h1>
                <p className="header-subtitle">Stay updated with the latest headlines</p>
            </div>

            <div className="header-right">
                <div
                    className="read-badge"
                    id="read-count-badge"
                    style={{ '--progress': `${progress}%` }}
                >
                    <span className="read-badge-icon">✓</span>
                    <span className="read-badge-text">
                        {readCount} <span className="read-badge-label">/ {totalCount} read</span>
                    </span>
                </div>

                <button
                    className="theme-toggle"
                    id="theme-toggle-btn"
                    onClick={onToggleTheme}
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={darkMode ? 'Light mode' : 'Dark mode'}
                >
                    <span className={`theme-icon ${darkMode ? 'moon' : 'sun'}`}>
                        {darkMode ? '☀️' : '🌙'}
                    </span>
                </button>
            </div>
        </header>
    );
}
