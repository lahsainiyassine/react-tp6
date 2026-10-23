import { useRef, useEffect, useState } from 'react';

function CompteurRendu() {
  const compteur = useRef(0);
  const [, setDummy] = useState(0);

  useEffect(() => {
    compteur.current += 1;
    console.log(`Le composant a été affiché ${compteur.current} fois.`);
  });

  return (
    <div className="section-content">
      <p>Regarde la console pour voir le nombre de rendus (F12 -&gt; Console).</p>
      <p>Nombre de rendus enregistrés par useRef : <strong>{compteur.current}</strong></p>
      <button onClick={() => setDummy((prev) => prev + 1)}>
        Déclencher un nouveau rendu
      </button>
    </div>
  );
}

export default CompteurRendu;
