import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

const white = '#fff';
const black = '#000';

const boxStyles = theme('mode', {
  light: css`
    background: ${white};
    color: ${black};
  `,
  dark: css`
    background: ${black};
    color: ${white};
  `
});

const StyledDiv = styled.div`
  ${boxStyles}
`;

const App = () => {
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <StyledDiv>React Webpack Babel Template</StyledDiv>
    </ThemeProvider>
  );
};

export default App;
