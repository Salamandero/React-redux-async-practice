import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkComp = styled(NavLink)`
  color: grey;
  &.active {
    color: yellowgreen;
  }
`;
export const Nav = styled.nav`
  list-style: none;
  text-decoration-style: none;
`;
