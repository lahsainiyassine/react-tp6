import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // current pointe vers l'élément <input>
    inputRef.current.focus();
  };

  return (
    <div className="section-content">
      <div className="input-group">
        <input ref={inputRef} placeholder="Tapez ici..." />
        <button onClick={handleClick}>Mettre le focus</button>
      </div>
    </div>
  );
}

export default FocusInput;
