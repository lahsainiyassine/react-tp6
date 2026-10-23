import useLocalStorage from './useLocalStorage';

function StockageLocal() {
  const [pseudo, setPseudo] = useLocalStorage('tp_user_pseudo', 'Alice');

  return (
    <div className="section-content">
      <p>Valeur persistée dans localStorage : <strong>{pseudo || '(vide)'}</strong></p>
      <div className="input-group">
        <input
          type="text"
          value={pseudo}
          placeholder="Modifie le pseudo..."
          onChange={(e) => setPseudo(e.target.value)}
        />
        <button onClick={() => setPseudo('')}>Effacer</button>
      </div>
      <small style={{ color: '#666', display: 'block', marginTop: '6px' }}>
        * Recharge la page (F5) : la valeur reste conservée !
      </small>
    </div>
  );
}

export default StockageLocal;
