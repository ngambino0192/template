import styled from 'styled-components';

const NavLink = styled.a`
  color: #ffffff;
  padding: 5px 10px;
  text-decoration: none;
  text-transform: uppercase;
`;

const NavBar = styled.div`
  position: fixed;
  background-color: #333333;
  width: 100%;
  z-index: 99;
`;

export { NavLink, NavBar };
