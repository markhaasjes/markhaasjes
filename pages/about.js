import { Component } from 'react';

import withLBaseLayout from '../components/layouts/BaseLayout';

class AboutPage extends Component {
  render() {
    return (
      <main>
        <p>About</p>
      </main>
    );
  }
}

export default withLBaseLayout(AboutPage);
