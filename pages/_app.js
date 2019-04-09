import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import base from '../styles/global/base';
import typography from '../styles/global/typography';
import colors from '../styles/theme/colors';
import variables from '../styles/theme/variables';

const GlobalStyle = createGlobalStyle`
  ${base}
  ${typography}
`;

class StyledApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={{ ...colors, ...variables }}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default StyledApp;
