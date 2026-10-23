import { useState, useEffect } from 'react';

function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondes((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="section-content">
      <p>Temps écoulé : <strong>{secondes}</strong> secondes</p>
    </div>
  );
}

export default Timer;
