import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './components/App/App';

import { ThemeProvider } from './components/Theme/ThemeContext';
import ThemeBackground from './components/Theme/ThemeBackground';

ReactDOM.render(
  <ThemeProvider>
    <ThemeBackground>
      <App />
    </ThemeBackground>
  </ThemeProvider>,
  document.getElementById('react-root')
);
