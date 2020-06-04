import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';
import { mpTheme } from '../constants/theme';

const StyledPageWrap = styled.div`
  background: ${(props) => props.theme.bgPage};
  color: ${(props) => props.theme.bodyTextColor};
`;

const InnerWrap = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.defaultSpacing};
`;

const MPGlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
        line-height: 1.5;
        font-family: ${(props) =>
          props.modMode ? mpTheme.sansFontFamily : mpTheme.serifFontFamily};
        color: ${(props) => props.theme.bodyTextColor};
    }

    a {
        text-decoration: none;
        color: ${mpTheme.green};
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 1rem;
        padding: 0;
        line-height: 1.2;
    }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={mpTheme}>
        <MPGlobalStyles modMode />
        <StyledPageWrap>
          <Meta />
          <div className="page-bound">
            <Header />
            <InnerWrap>{this.props.children}</InnerWrap>
          </div>
        </StyledPageWrap>
      </ThemeProvider>
    );
  }
}

export default Page;
