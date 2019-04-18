import styled from 'styled-components';
import { darken } from 'polished';

const StyledHyperlink = styled.a`
  position: relative;
  text-decoration: none;
  transition: color 150ms ease-in-out;

  &:after {
    content: '';
    display: block;
    height: 0.1em;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.1em;
    z-index: -1;
    background-color: ${({ theme }) => theme.brand.primary};
    transition: transform 150ms ease-in-out, background-color 150ms ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => darken(0.2, theme.brand.primary)};

    &:after {
      transform: translateY(-0.05em);
      background-color: ${({ theme }) => darken(0.2, theme.brand.primary)};
    }
  }
`;

const Hyperlink = ({ href, children }) => (
  <StyledHyperlink href={href}>{children}</StyledHyperlink>
);

export default Hyperlink;
