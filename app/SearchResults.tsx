import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SearchResults = ({ articles }) => {
  const router = useRouter();
  const { term } = router.query;
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    if (term) {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(term.toString().toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [term, articles]);

  if (!term) return null;

  return (
    <div>
      <h2>Search Results for "{term}"</h2>
      {filteredArticles.length > 0 ? (
        <ul>
          {filteredArticles.map((article) => (
            <li key={article.url}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url}>Read more</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
};

export default SearchResults;
