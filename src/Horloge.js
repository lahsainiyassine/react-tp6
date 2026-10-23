import { useState, useEffect } from 'react';

function Horloge() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Met à jour la date chaque seconde
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Nettoyage de l'intervalle lors du démontage
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="section-content">
      <p>
        Date et heure actuelles :{' '}
        <span className="badge-time">
          {date.toLocaleDateString()} — {date.toLocaleTimeString()}
        </span>
      </p>
    </div>
  );
}

export default Horloge;
