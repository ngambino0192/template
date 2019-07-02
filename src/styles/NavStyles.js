import styled from 'styled-components';

const NavLink = styled.a`
  color: #ffffff;
  padding: 5px 10px;
  font-family: 'martel';
`;

const NavBar = styled.div`
  background: blue;
  position: fixed;
  width: 100vw;
  z-index: 99;
`;

export { NavLink, NavBar };
