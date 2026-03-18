import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './variables.css';
import SaudePage from './pages/SaudePage/SaudePage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SaudePage />
  </StrictMode>
);
