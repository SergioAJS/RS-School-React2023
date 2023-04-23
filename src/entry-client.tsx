import './index.scss';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { setupStoreThunks } from './redux';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <Provider store={setupStoreThunks(preloadedState)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
