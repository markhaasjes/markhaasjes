import { Component } from 'react';

import withLBaseLayout from '../components/layouts/BaseLayout';

class IndexPage extends Component {
  render() {
    return <main>Home</main>;
  }
}

export default withLBaseLayout(IndexPage);
