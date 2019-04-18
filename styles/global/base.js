import { css } from 'styled-components';
import colors from '../theme/colors';

const base = css`
  html {
    height: 100%;
  }

  body {
    background-color: ${colors.brand.dark};
    color: ${colors.brand.light};
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  a {
    color: ${colors.brand.primary};
    text-decoration: underline;

    &:hover {
      color: ${colors.brand.secondary};
      text-decoration: none;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0;
      padding: 0;
    }
  }
`;

export default base;
