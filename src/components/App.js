import React from 'react';
import { StyleReset } from 'es-components';
import { ThemeProvider } from 'styled-components';
import viaTheme from 'es-components-via-theme';

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
