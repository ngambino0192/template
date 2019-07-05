import React from 'react';
import Logo from './NavLogo';
import { NavLink, NavBar } from '../styles/component-styles/NavStyles';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

// TODO:
// Replace hardcoded links with data from querying top-level paths with GraphQL
const links = [
  { title: 'Vacations', slug: '/vacations' },
  { title: 'Blog', slug: '/blog' },
  { title: 'Planning', slug: '/planning' },
  { title: 'Travel Tips', slug: '/traveltips' },
  { title: 'Shaka TV', slug: '/shakatv' }
];

const NavbarComponent = class extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollY: ''
    };
  }
  componentDidMount() {
    if (window !== 'undefined') {
      this.setState({ scrollY: window.pageYOffset });
      window.addEventListener('scroll', resizeNav);
      return () => {
        window.removeEventListener('scroll', resizeNav);
      };
      function resizeNav(e) {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 200) {
          nav.classList.add('visible');
        } else {
          nav.classList.remove('visible');
          nav.style.display = 'block';
        }
      }
    }
  }

  render() {
    return (
      <NavBar className="navbar">
        <Grid>
          <Row>
            <Col xs={4}>
              <Logo className="nav-logo" />
            </Col>
            <Col xs={8}>
              <Row end="xs" around="xs">
                {links.map((link, i) => {
                  return (
                    <Col key={i}>
                      <NavLink className="nav-link" href={link.slug}>
                        {link.title}
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
