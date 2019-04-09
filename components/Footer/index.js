import { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
`;

export default class Footer extends Component {
  static getInitialProps() {
    const isServer = typeof window === 'undefined';
    return { isServer };
  }

  render() {
    return (
      <StyledFooter>
        <p>
          This page is rendered on the{' '}
          <strong>{this.props.isServer ? 'server' : 'client'} side</strong>.
        </p>
      </StyledFooter>
    );
  }
}
