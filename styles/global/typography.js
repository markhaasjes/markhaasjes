import { css } from 'styled-components';
import variables from '../theme/variables';

const typography = css`
  html {
    font-size: 100%;

    font-family: sans serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${variables.font.family.default};
    letter-spacing: 0;
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga' on;
    font-size: 18px;
    line-height: 1.4;
  }

  p,
  .content {
    --x-height-multiplier: 0.35;
    --base-multiplier: 0.179;
    font-family: ${variables.font.family.reading};
    letter-spacing: 0.01rem;
    font-weight: 400;
    font-style: normal;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;
    max-width: 38em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${variables.font.family.heading};
    font-weight: 700;
    line-height: 1.15;
    margin: 2.75rem 0 1rem;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052em;
  }

  h2 {
    font-size: 2.441em;
  }

  h3 {
    font-size: 1.953em;
  }

  h4 {
    font-size: 1.563em;
  }

  h5 {
    font-size: 1.25em;
  }

  h6 {
    font-size: 1em;
  }

  small {
    font-size: 0.8em;
  }

  blockquote {
    font-size: 1.25em;
    line-height: 1.25;
  }

  a {
    text-decoration-skip: ink;
  }
`;

export default typography;
