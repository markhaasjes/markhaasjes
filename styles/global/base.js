import { css } from 'styled-components';
import colors from '../theme/colors';

const base = css`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: ${colors.brand.dark};
    color: ${colors.brand.light};
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  /**
 * Add the correct display in browsers that don't support HTML5 elements by default.
 */

  article,
  aside,
  footer,
  header,
  nav,
  figcaption,
  figure,
  main,
  section {
    display: block;
  }

  ul,
  dl {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  dt,
  dd {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${colors.brand.light};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  a:focus,
  button:focus,
  summary:focus,
  input[type='radio']:focus + label {
    outline: none;
    box-shadow: none;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background: none;
    border: 0;
  }

  pre {
    font-family: Menlo, Consolas, monospace;
    white-space: normal;
  }

  details {
    white-space: pre-wrap;
  }

  /** IE11 by default shifts button children when focussing, See: https://stackoverflow.com/questions/10305658/prevent-button-from-shifting-during-click-in-ie  */
  button > * {
    position: relative;
  }
`;

export default base;
