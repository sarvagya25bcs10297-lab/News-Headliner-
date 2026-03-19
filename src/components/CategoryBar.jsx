import './CategoryBar.css';

const CATEGORIES = ['All', 'General', 'Business', 'Technology', 'Entertainment', 'Sports', 'Health', 'Science'];

const CATEGORY_ICONS = {
    All: '🌐',
    General: '📋',
    Business: '💼',
    Technology: '💻',
    Entertainment: '🎬',
    Sports: '⚽',
    Health: '❤️',
    Science: '🔬',
};

export default function CategoryBar({ selectedCategory, onSelectCategory }) {
    return (
        <nav className="category-bar" id="category-bar" aria-label="News categories">
            <div className="category-scroll">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        id={`category-${cat.toLowerCase()}`}
                        className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                        onClick={() => onSelectCategory(cat)}
                    >
                        <span className="category-icon">{CATEGORY_ICONS[cat]}</span>
                        {cat}
                    </button>
                ))}
            </div>
        </nav>
    );
}
