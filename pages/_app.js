import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import App, { Container } from 'next/app';
import Head from 'next/head';

import Debug from '../components/Debug';

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

    const isServer = typeof window === 'undefined';

    return { pageProps, isServer };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Mark Haasjes Front-end Developer</title>
        </Head>
        <ThemeProvider theme={{ ...colors, ...variables }}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
            {/* TODO: Remove debug code when in production */}
            <>
              <p>
                This page is rendered on the{' '}
                <strong>
                  {this.props.isServer ? 'server' : 'client'} side
                </strong>
                .
              </p>
              <style jsx>{`
                p {
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  font-size: 0.9em;
                  text-align: center;
                }
              `}</style>
            </>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default StyledApp;
