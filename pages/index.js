import { Component } from 'react';
import styled from 'styled-components';

import withLBaseLayout from '../components/layouts/BaseLayout';
import Hyperlink from '../components/Hyperlink';

const StyledMain = styled.main`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.brand.primary};
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
      <StyledMain>
        <div>
          <Label className="content">Hello, my name is</Label>
          <Title>Mark Haasjes</Title>
          <Paragraph>
            I am a Front-end Developer at{' '}
            <Hyperlink href="https://www.cleverfranke.com">
              CLEVERºFRANKE
            </Hyperlink>
            , a data visualisation design agency based in Utrecht. I love to
            build web applications with JavaScript. I build these with
            frameworks, libraries and tools like; React, Redux, D3.js, GraphQL,
            Apollo, Docker, Jest, Codeship and more.
          </Paragraph>
        </div>
      </StyledMain>
    );
  }
}

export default withLBaseLayout(IndexPage);
