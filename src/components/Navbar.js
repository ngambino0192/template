import React from 'react';
import Logo from './NavLogo';
import { NavBar, NavLink } from '../styles/NavStyles';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

// TODO:
// Replace hardcoded links with data from querying top-level paths with GraphQL
const links = ['Vacations', 'Planning', 'Travel Tips', 'Shaka TV'];

const NavbarComponent = class extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     scrollY: document.documentElement.scrollTop,
  //   };
  // }
  // componentDidMount() {
  //   this.setState({ scrollY: window.pageYOffset });
  //   window.addEventListener('scroll', resizeNav);
  //   return () => {
  //     window.removeEventListener('scroll', resizeNav);
  //   };

  //   function resizeNav(e) {
  //     let nav = document.querySelector('.navbar');

  //     if (window.scrollY > 100) {
  //       nav.classList.add('navbar-shrink');
  //     } else {
  //       nav.classList.remove('navbar-shrink');
  //     }
  //   }
  // }

  render() {
    return (
      <NavBar>
        <Grid>
          <Row middle="xs">
            <Col xs={4}>
              <Logo className="nav-logo" />
            </Col>
            <Col xs={8}>
              <Row end="xs" around="xs">
                {links.map((link, i) => {
                  return (
                    <Col key={i}>
                      <NavLink className="nav-link" href="#">
                        {link}
                      </NavLink>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Grid>
      </NavBar>
    );
  }
};

export default NavbarComponent;
