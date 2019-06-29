import React from 'react';
import { Nav, Row, Col, Container } from 'react-bootstrap';
import Logo from './NavLogo';

const links = ['Vacations', 'Planning', 'Travel Tips', 'Shaka TV'];

const NavbarComponent = class extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollY: document.documentElement.scrollTop
    };
  }
  componentDidMount() {
    this.setState({ scrollY: window.pageYOffset });
    window.addEventListener('scroll', resizeNav);
    return () => {
      window.removeEventListener('scroll', resizeNav);
    };

    function resizeNav(e) {
      let nav = document.querySelector('.navbar');

      if (window.scrollY > 100) {
        nav.classList.add('navbar-shrink');
      } else {
        nav.classList.remove('navbar-shrink');
      }
    }
  }

  render() {
    return (
      <Container className="navbar">
        <Row>
          <Col>
            <Logo className="nav-logo" />
          </Col>
          <Col>
            <Row>
              {links.map(link => {
                return (
                  <Col>
                    <Nav.Link>{link}</Nav.Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default NavbarComponent;
