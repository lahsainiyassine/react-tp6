import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TP title and main sections', () => {
  render(<App />);
  const titleElement = screen.getByText(/TP Hooks Avancés – Niveau Débutant/i);
  expect(titleElement).toBeInTheDocument();

  const reducerHeader = screen.getByText(/1\. Compteur avec useReducer/i);
  expect(reducerHeader).toBeInTheDocument();

  const refHeader = screen.getByText(/2\. Mettre le focus avec useRef/i);
  expect(refHeader).toBeInTheDocument();
});
