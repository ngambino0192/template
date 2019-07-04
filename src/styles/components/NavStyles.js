import styled from 'styled-components';

const NavLink = styled.a`
  color: #ffffff;
  padding: 5px 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
`;

const NavBar = styled.div`
  background: none;
  position: fixed;
  width: 100vw;
  z-index: 99;
`;

export { NavLink, NavBar };
