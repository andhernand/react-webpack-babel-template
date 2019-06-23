import React from 'react';
import { ThemeProvider } from 'styled-components';
import viaTheme from 'es-components-via-theme';
import { Heading } from 'es-components';

function App() {
  return (
    <ThemeProvider theme={viaTheme}>
      <Heading level={1} isKnockoutStyle>
        React Webpack Babel Template
      </Heading>
    </ThemeProvider>
  );
}

export default App;
