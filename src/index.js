import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function renderApp() {
  const content = document.getElementById('root');
  ReactDOM.render(<App />, content);
}

window.onload = renderApp;

if (module.hot) {
  module.hot.accept('./components/App.js', renderApp);
}
