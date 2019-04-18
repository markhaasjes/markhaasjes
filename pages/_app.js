import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import App, { Container } from 'next/app';
import Head from 'next/head';

import normalize from '../styles/global/normalize';
import base from '../styles/global/base';
import typography from '../styles/global/typography';
import colors from '../styles/theme/colors';
import variables from '../styles/theme/variables';

const GlobalStyle = createGlobalStyle`
  ${normalize}
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
        <Head>
          <title>Mark Haasjes - Front-end Developer</title>
        </Head>
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
