import { Component } from 'react';

export default class Footer extends Component {
  static getInitialProps() {
    const isServer = typeof window === 'undefined';
    return { isServer };
  }

  render() {
    return (
      <footer>
        <p>
          This page is rendered on the{' '}
          <strong>{this.props.isServer ? 'server' : 'client'} side</strong>.
        </p>
      </footer>
    );
  }
}
