import React from 'react';
import Logo from './NavLogo';
import { NavLink } from '../styles/NavStyles';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const links = ['Vacations', 'Planning', 'Travel Tips', 'Shaka TV'];

const NavbarComponent = class extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollY: document.documentElement.scrollTop,
    };
  }
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
      <Grid>
        <Row>
          <Col xs={6}>Hello World!</Col>
        </Row>
      </Grid>
    );
  }
};

export default NavbarComponent;

// <Container className="navbar">
//   <Row>
//     <Col>
//       <Logo className="nav-logo" />
//     </Col>
//     <Col>
//       <Row>
//         {links.map(link => {
//           return (
//             <Col>
//               <NavLink className="nav-link">{link}</NavLink>
//             </Col>
//           );
//         })}
//       </Row>
//     </Col>
//   </Row>
// </Container>
