import { Component } from 'react';
import styled from 'styled-components';

import withLBaseLayout from '../components/layouts/BaseLayout';

const Label = styled.label`
  font-size: 1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.brand.secondary};
`;

const Title = styled.h1`
  font-size: 4em;
`;

const Paragraph = styled.p`
  font-size: 1.4em;
  font-weight: 300;
`;

class IndexPage extends Component {
  render() {
    return (
      <main>
        <Label>My name is</Label>
        <Title>Mark Haasjes</Title>
        <Paragraph>
          I'm a Front-end Developer at{' '}
          <a href="https://www.cleverfranke.com">CLEVERºFRANKE</a>, a data
          visualisation design agency based in Utrecht. I love to build web
          applications with frameworks, libraries and tools like React, Redux,
          D3.js, GraphQL, Apollo, Docker, Jest, Codeship and more.
        </Paragraph>
      </main>
    );
  }
}

export default withLBaseLayout(IndexPage);
