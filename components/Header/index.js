import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.div`
  margin: 0;
`;

const Nav = styled.nav`
  ul {
    li {
      display: inline-block;
      margin-left: 1em;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div>
      <Title>MH</Title>
    </div>
    <div>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </Nav>
    </div>
  </StyledHeader>
);

export default Header;
