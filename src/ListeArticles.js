import { useState } from 'react';
import useFetch from './useFetch';

function ListeArticles() {
  const { data, chargement, erreur } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [limite, setLimite] = useState(5);

  if (chargement) return <p className="loading-state">Chargement en cours...</p>;
  if (erreur) return <p className="error-state">Erreur : {erreur.message}</p>;

  return (
    <div className="section-content">
      <div className="list-controls">
        <span>Affichage des {Math.min(limite, data ? data.length : 0)} premiers articles sur {data ? data.length : 0} :</span>
        <button 
          onClick={() => setLimite((prev) => (prev === 5 ? 20 : 5))}
          className="btn-secondary"
        >
          {limite === 5 ? 'Afficher plus (20)' : 'Afficher moins (5)'}
        </button>
      </div>

      <ul className="articles-list">
        {Array.isArray(data) &&
          data.slice(0, limite).map((article) => (
            <li key={article.id} className="article-item">
              <span className="article-id">#{article.id}</span>
              <span className="article-title">{article.title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListeArticles;
