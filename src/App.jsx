import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import NewsList from './components/NewsList';
import useNews from './hooks/useNews';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const {
    filteredArticles,
    articles,
    selectedCategory,
    setSelectedCategory,
    readArticles,
    markAsRead,
    loading,
    error,
    retry,
  } = useNews();

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="app-container">
        <Header
          readCount={readArticles.size}
          totalCount={articles.length}
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
        />

        <CategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <NewsList
          articles={filteredArticles}
          readArticles={readArticles}
          onMarkAsRead={markAsRead}
          loading={loading}
          error={error}
          onRetry={retry}
        />
      </div>
    </div>
  );
}

export default App;
