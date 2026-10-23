import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';
import StockageLocal from './StockageLocal';
import Horloge from './Horloge';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>TP Hooks Avancés – Niveau Débutant</h1>
        <p className="subtitle">Pratique de useReducer, useRef, useEffect avec nettoyage et Custom Hooks</p>
      </header>

      <main className="cards-grid">
        <section className="card">
          <h2>1. Compteur avec useReducer</h2>
          <Compteur />
        </section>

        <section className="card">
          <h2>2. Mettre le focus avec useRef</h2>
          <FocusInput />
        </section>

        <section className="card">
          <h2>3. Compteur de rendus</h2>
          <CompteurRendu />
        </section>

        <section className="card">
          <h2>4. Timer avec nettoyage d’effet</h2>
          <Timer />
        </section>

        <section className="card full-width">
          <h2>5. Liste d’articles avec useFetch (Hook personnalisé)</h2>
          <ListeArticles />
        </section>

        <section className="card full-width bonus-section">
          <h2>⭐ Exercices facultatifs</h2>
          <div className="bonus-grid">
            <div className="bonus-item">
              <h3>Hook personnalisé : useLocalStorage</h3>
              <StockageLocal />
            </div>
            <div className="bonus-item">
              <h3>Horloge en temps réel (useEffect avec nettoyage)</h3>
              <Horloge />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
