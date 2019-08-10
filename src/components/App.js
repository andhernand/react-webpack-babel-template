import React from 'react';
import { StyleReset } from 'es-components';
import { ThemeProvider } from 'styled-components';
import viaTheme from 'es-components-via-theme';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const App = () => {
  return (
    <ThemeProvider theme={viaTheme}>
      <React.Fragment>
        <StyleReset />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
