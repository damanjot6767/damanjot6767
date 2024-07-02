// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import "./global.css"
import App from './App';
import store from './stateStore';
import { ScrollToTop } from './components/scrollToTop/scrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop/>
      <App/>
    </BrowserRouter>
  </Provider>
);