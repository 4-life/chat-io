import React from 'react';
import ReactDOM from 'react-dom/client';
import env from 'environment';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const { PRODUCTION } = env();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (!PRODUCTION) {
  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}

serviceWorkerRegistration.register();
