import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { LingoProviderWrapper, loadDictionary } from "lingo.dev/react/client";

createRoot(document.getElementById('root')).render(
  <LingoProviderWrapper loadDictionary={(locale) => loadDictionary(locale)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LingoProviderWrapper>
);
