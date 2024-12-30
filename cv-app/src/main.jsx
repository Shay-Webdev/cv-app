import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './components/App.jsx';
import { UserInput, Resume } from './components/container.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='page-container'>
      <UserInput></UserInput>
      <Resume></Resume>
    </div>
  </StrictMode>
);
