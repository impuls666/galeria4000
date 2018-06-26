import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Route } from 'react-router';
import { rem } from 'polished';
import Gallery from '../Gallery';
import Categories from '../Categories';

import theme from '../../theme';

const Body = styled.div`
  font-size: ${rem(14)};
`;
const Wrapper = styled.div``;

class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Body>
            <Wrapper>
              <Route exact path="/" component={Categories} />
              <Route path="/category/:categoryName" component={Gallery} />
            </Wrapper>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
