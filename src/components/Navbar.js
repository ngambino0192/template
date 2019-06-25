import React from 'react';
import { Link } from 'gatsby';
import NavBar from 'react-bootstrap/NavBar';
import styled from 'styled-components';

import github from '../img/github-icon.svg';
// import logo from '../img/logo.svg';
// import Logo from './Logo';
import Logo from './NavLogo';
import { LinkContainer } from '../styles/NavStyles.js';

// const LinkContainer = styled.div`
//   font-size: 25px;
//   text-align: center;
// `;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            });
      }
    );
  };

  render() {
    return (
      <NavBar
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Logo />
            {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="HappyShaka Logo" style={{ width: '88px' }} />
            </Link> */}
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <LinkContainer className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                Vacations
              </Link>
              <Link className="navbar-item" to="/products">
                Planning
              </Link>
              <Link className="navbar-item" to="/portfolio">
                Travel Tips
              </Link>
              <Link className="navbar-item" to="/blog">
                Shaka TV
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </LinkContainer>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/ngambino0192/template"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <span className="icon">
                  <img src={github} alt="Github" />
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </NavBar>
    );
  }
};

export default Navbar;
