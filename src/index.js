import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthenticationProvider } from './contexts/authentication.context';
import { WindowDimensionsProvider } from './contexts/window-dimensions.context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <WindowDimensionsProvider>
        <App />
      </WindowDimensionsProvider>
    </AuthenticationProvider>
  </React.StrictMode>
);
