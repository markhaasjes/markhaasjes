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
    color: ${colors.brand.light};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p a {
    color: ${colors.brand.secondary};
    text-decoration: underline;

    &:hover {
      color: ${colors.brand.primary};
      text-decoration: none;
    }
  }
`;

export default base;
