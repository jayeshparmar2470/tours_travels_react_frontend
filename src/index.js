import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter , HashRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Intercept link clicks using event delegation
document.addEventListener('click', (event) => {
  let target = event.target;

  // Traverse up the DOM tree to find the nearest <a> tag
  while (target && target.tagName !== 'A') {
    target = target.parentElement;
  }

  // If the target is an <a> tag and the href starts with '/'
  if (target && target.tagName === 'A' && target.getAttribute('href').startsWith('/')) {
    event.preventDefault(); // Prevent default navigation
    const href = target.getAttribute('href'); // Get the href value (e.g., "/about")
    window.location.hash = href; // Update the hash
  }
});


root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

