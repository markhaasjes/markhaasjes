import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 2em 0;
`;

const withLBaseLayout = (Children) => {
  return () => (
    <Container>
      <Header />
      <Children />
      <Footer />
    </Container>
  );
};

export default withLBaseLayout;
