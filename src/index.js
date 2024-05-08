import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/css/AnimsitionMin.css';
import '../src/css/BootstrapGridMin.css';
import '../src/css/OwlCarouselMin.css';
import '../src/css/Style.css';
import App from './App';
import "./Js/Function";

import "jquery-ui-dist/jquery-ui"
import reportWebVitals from './reportWebVitals';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
