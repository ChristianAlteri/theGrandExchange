import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; 

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import client from './client'; 

// Use createRoot from react-dom/client
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
