import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';

import { ThemeProvider } from './Theme/ThemeContext';
import ThemeBackground from './Theme/ThemeBackground';

ReactDOM.render(
  <ThemeProvider>
    <ThemeBackground>
      <App />
    </ThemeBackground>
  </ThemeProvider>,
  document.getElementById('react-root')
);
