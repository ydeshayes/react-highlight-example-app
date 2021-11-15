/*eslint-disable import/default*/

import './styles/styles.scss';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import HighlightApp from './containers/HighlightApp';

const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <HighlightApp />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root')
);
