import React from 'react';
import { Link } from 'gatsby';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

import {
  FooterStyles,
  FooterUl,
  FooterLi
} from '../styles/component-styles/FooterStyles';

const Footer = class extends React.Component {
  render() {
    return (
      <FooterStyles>
        <Grid>
          <Row>
            <Col lg={12}>
              <Row center="lg">
                <Col lg={3}>
                  <div>
                    <img
                      src={logo}
                      alt="Shaka"
                      style={{ width: '14em', height: '10em' }}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div>
                    <FooterUl style={{ display: 'inline-flex' }}>
                      <FooterLi style={{ padding: '2rem' }}>
                        <Link to="/vacations">Our Vacations</Link>
                      </FooterLi>
                      <FooterLi style={{ padding: '2rem' }}>
                        <Link to="/about">Planning Calendar</Link>
                      </FooterLi>
                      <FooterLi style={{ padding: '2rem' }}>
                        <Link to="/products">Travel Tips</Link>
                      </FooterLi>
                      <FooterLi style={{ padding: '2rem' }}>
                        <Link to="/contact/examples">Shaka TV</Link>
                      </FooterLi>
                    </FooterUl>
                  </div>
                </Col>
                <Col lg={3}>
                  <Row end="lg">
                    <Col>
                      <div>
                        <a title="facebook" href="https://facebook.com">
                          <img
                            src={facebook}
                            alt="Facebook"
                            style={{ width: '1em', height: '1em' }}
                          />
                        </a>
                        <a title="twitter" href="https://twitter.com">
                          <img
                            src={twitter}
                            alt="Twitter"
                            style={{ width: '1em', height: '1em' }}
                          />
                        </a>
                        <a title="instagram" href="https://instagram.com">
                          <img
                            src={instagram}
                            alt="Instagram"
                            style={{ width: '1em', height: '1em' }}
                          />
                        </a>
                        <a title="vimeo" href="https://vimeo.com">
                          <img
                            src={vimeo}
                            alt="Vimeo"
                            style={{ width: '1em', height: '1em' }}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </FooterStyles>
    );
  }
};

export default Footer;
