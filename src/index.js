// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Wrap your app with BrowserRouter
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Raleway", sans-serif',
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  {/* Wrap App with BrowserRouter here */}
    <ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
    
  </BrowserRouter>
);
