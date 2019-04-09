import { Component } from 'react';
import Link from 'next/link';

import withLBaseLayout from '../components/layouts/BaseLayout';

class IndexPage extends Component {
  render() {
    return (
      <main>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </main>
    );
  }
}

export default withLBaseLayout(IndexPage);
