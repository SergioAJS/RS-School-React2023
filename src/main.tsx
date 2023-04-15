import './index.scss';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </StrictMode>
);
