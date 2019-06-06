import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StyleReset } from 'es-components';

const ResetApp = () => {
  return (
    <>
      <StyleReset />
      <App />
    </>
  );
};

ReactDOM.render(<ResetApp />, document.getElementById('root'));

module.hot.accept();
