import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <WrappedApp />
  </StrictMode>
);
