import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, lightTheme } from '@jupiterone/starbase';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

