import React from 'react';
import { Link } from 'gatsby';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import FooterLogo from '../components/FooterLogo';

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
          <Row around="sm">
            <Col lg={12}>
              <Row center="lg" middle="xs" center="xs">
                <Col xs={12} lg={2}>
                  <div>
                    <Link to="/">
                      <FooterLogo />
                    </Link>
                  </div>
                </Col>
                <Col xs={12} lg={8}>
                  <div>
                    <FooterUl>
                      <FooterLi>
                        <Link to="/vacations">Our Vacations</Link>
                      </FooterLi>
                      <FooterLi>
                        <Link to="/about">Planning Calendar</Link>
                      </FooterLi>
                      <FooterLi>
                        <Link to="/products">Travel Tips</Link>
                      </FooterLi>
                      <FooterLi>
                        <Link to="/contact/examples">Shaka TV</Link>
                      </FooterLi>
                    </FooterUl>
                  </div>
                </Col>
                <Col xs={12} lg={2}>
                  <Row end="lg" middle="xs" center="xs">
                    <Col>
                      <div>
                        {/* <a title="facebook" href="https://facebook.com">
                          <img
                            src={facebook}
                            alt="Facebook"
                            style={{
                              width: '1em',
                              height: '1em',
                              padding: '.5em',
                              fill: '#333333'
                            }}
                          />
                        </a> */}
                        <a title="twitter" href="https://twitter.com">
                          <img
                            src={twitter}
                            alt="Twitter"
                            style={{
                              width: '1em',
                              height: '1em',
                              margin: '.5em',
                              fill: '#333333'
                            }}
                          />
                        </a>
                        <a title="instagram" href="https://instagram.com">
                          <img
                            src={instagram}
                            alt="Instagram"
                            style={{
                              width: '1em',
                              height: '1em',
                              margin: '.5em',
                              fill: '#333333'
                            }}
                          />
                        </a>
                        <a title="vimeo" href="https://vimeo.com">
                          <img
                            src={vimeo}
                            alt="Vimeo"
                            style={{
                              width: '1em',
                              height: '1em',
                              margin: '.5em',
                              fill: '#333333'
                            }}
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
