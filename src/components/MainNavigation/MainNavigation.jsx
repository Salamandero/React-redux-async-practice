import { Nav, NavLinkComp } from './MainNavigation.styled';

const MainNavigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLinkComp to="/"> Home</NavLinkComp>
        </li>
        <li>
          <NavLinkComp to="/users"> Users</NavLinkComp>
        </li>
      </ul>
    </Nav>
  );
};

export default MainNavigation;
