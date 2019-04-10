import { css } from 'styled-components';
import variables from '../theme/variables';

const typography = css`
  html {
    font-size: 100%;
  }

  body {
    font-family: ${variables.font.family.default};
    font-weight: 400;
    line-height: 1.45;
    font-variant: common-ligatures tabular-nums contextual;
  }

  p {
    margin-bottom: 1.25em;
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
