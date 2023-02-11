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
        <li>
          <NavLinkComp to="/add">Add</NavLinkComp>
        </li>
      </ul>
    </Nav>
  );
};

export default MainNavigation;
