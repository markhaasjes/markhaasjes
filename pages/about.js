import { Component } from 'react';
import Link from 'next/link';

import withLBaseLayout from '../components/layouts/BaseLayout';

class AboutPage extends Component {
  render() {
    return (
      <section>
        <Link href="/">
          <a>Go to Home</a>
        </Link>
      </section>
    );
  }
}

export default withLBaseLayout(AboutPage);
