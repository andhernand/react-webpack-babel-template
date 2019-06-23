import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StyleReset } from 'es-components';

function ResetApp() {
  return (
    <React.Fragment>
      <StyleReset />
      <App />
    </React.Fragment>
  );
}

ReactDOM.render(<ResetApp />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
