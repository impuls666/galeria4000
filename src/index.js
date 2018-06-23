import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './containers/App';

// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&subset=latin-ext');
  html, body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  #root {
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration:none;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
