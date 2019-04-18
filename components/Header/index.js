import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0;
`;

const Nav = styled.nav`
  ul {
    li {
      display: inline-block;
      margin-right: 1em;
    }
  }
`;

const Header = () => (
  <StyledHeader>
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
