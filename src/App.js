import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// import components
import { MainLayout } from './components/layout/MainLayout/MainLayout';

// import routes
import { Homepage } from './components/views/HomePage/Homepage';
import { OurWorld } from './components/views/OurWorld/OurWorld';
import { Europe } from './components/views/Europe/Europe';

// store
import { store } from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#8aaf24' },
  },
});

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MainLayout>
                <Switch>
                  <Route exact path="/" component={ Homepage } />
                  <Route exact path="/nasz-swiat" component={ OurWorld } />
                  <Route exact path="/europa" component={ Europe } />
                </Switch>
              </MainLayout>
            </ThemeProvider>
          </StylesProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
