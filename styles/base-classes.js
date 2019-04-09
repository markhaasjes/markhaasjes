import { css } from 'styled-components';

export const defaultButton = ({ theme }) => css`
  margin: 0.25em;
  padding: 0.5em 0.75em;
  font-family: ${theme.fontFamilyButton};
  font-weight: 400;
  color: ${theme.brand.Dark};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  white-space: nowrap;
  background: none;
  border: 2px solid ${theme.brand.Dark};
  cursor: pointer;
  transition: color 150ms ease-in-out, background-color 150ms ease-in-out;

  &:hover {
    color: ${theme.brand.Light};
    background: ${theme.brand.Dark};
  }

  &:focus,
  &:active {
    color: ${theme.brand.Light};
    background: ${theme.brand.Dark};
  }
`;
