import React from 'react';
import { StyleReset, Heading, HorizontalNav } from 'es-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import viaTheme from 'es-components-via-theme';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
        <Router>
    <ThemeProvider theme={viaTheme}>
      <React.Fragment>
        <StyleReset />
        <Heading isKnockoutStyle level={1}>
          React Webpack Babel Template
        </Heading>
          <HorizontalNav>
            <HorizontalNav.Item id="home">
              <Link to="/">Home</Link>
            </HorizontalNav.Item>
            <HorizontalNav.Item id="about">
              <Link to="/about">About</Link>
            </HorizontalNav.Item>
          </HorizontalNav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
      </React.Fragment>
    </ThemeProvider>
        </Router>
  );
}

export default App;
