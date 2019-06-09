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
          <meta
            name="description"
            content="I am a Front-end Developer at NOS, the Dutch Broadcast Foundation based in Hilversum. I love to build web applications with JavaScript. I build these with frameworks, libraries and tools like; React, Redux, D3.js, GraphQL, Apollo, Docker, Jest, Codeship and more."
          />
          <meta
            property="og:title"
            content="Mark Haasjes - Front-end Developer"
          />
          <meta
            property="og:description"
            content="I am a Front-end Developer at NOS, the Dutch Broadcast Foundation based in Hilversum. I love to build web applications with JavaScript. I build these with frameworks, libraries and tools like; React, Redux, D3.js, GraphQL, Apollo, Docker, Jest, Codeship and more."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.markhaasjes.nl/" />
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
