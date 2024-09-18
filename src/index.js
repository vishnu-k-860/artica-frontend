import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
      <GoogleOAuthProvider clientId='782670799762-rmesuf7k0rj7qs2ejbmt3kmgescecmdq.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
      </BrowserRouter>
    
   
  </React.StrictMode>
);

