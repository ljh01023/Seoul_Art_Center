import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, ScrollRestoration } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ScrollInit from './components/ScrollInit';
import App from './App';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './css/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollInit />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
