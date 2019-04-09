import { css } from 'styled-components';
import variables from '../theme/variables';

const typography = css`
  html {
    font-size: 16px;
  }
  @media screen and (min-width: 20rem) {
    html {
      font-size: calc(16px + 6 * ((100vw - 20rem) / 680));
    }
  }
  @media screen and (min-width: 75rem) {
    html {
      font-size: 22px;
    }
  }

  body {
    font-family: ${variables.font.fontFamily};
    font-size: 16px;
    font-weight: 400;
    font-variant: common-ligatures tabular-nums contextual;
    line-height: 1.2;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${variables.font.fontFamilyHead};
    font-weight: 700;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.75em;
  }

  h1 {
    font-size: 4em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.2em;
  }

  a {
    text-decoration-skip: ink;
  }
`;

export default typography;
