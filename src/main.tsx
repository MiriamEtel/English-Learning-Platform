import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 הוספת BrowserRouter
import App from './App.tsx';
import './index.css';

const basename = import.meta.env.MODE === "development" ? "/" : "/English-Learning-Games/"; // 👈 בדיקה דינמית

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}> {/* 👈 שימוש ב-basenamed דינמי */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
