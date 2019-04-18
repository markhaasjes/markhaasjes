import { Component } from 'react';
import styled from 'styled-components';

import Hyperlink from '../Hyperlink';

const StyledFooter = styled.footer`
  padding: 2rem 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <ul>
          <li>
            <Hyperlink href="https://github.com/markhaasjes">
              Github.com
            </Hyperlink>
          </li>
        </ul>
      </StyledFooter>
    );
  }
}
