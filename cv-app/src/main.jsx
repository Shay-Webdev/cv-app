import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './components/App.jsx';
import PageContainer from './components/container.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageContainer />
  </StrictMode>
);
