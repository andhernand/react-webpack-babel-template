import React from 'react';
import { StyleReset, Heading } from 'es-components';
import { ThemeProvider } from 'styled-components';
import viaTheme from 'es-components-via-theme';

function App() {
  return (
    <ThemeProvider theme={viaTheme}>
      <React.Fragment>
        <StyleReset />
        <Heading isKnockoutStyle level={1}>
          React Webpack Babel Template
        </Heading>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
