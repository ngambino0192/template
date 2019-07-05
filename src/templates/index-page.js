import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import Layout from '../components/Layout';
import Features from '../components/Features';
import {
  HomePageDiv,
  HomePageH1,
  HomePageH2,
  HomePageP,
  HomePageButton
} from '../styles/component-styles/HomepageStyles';

import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({
  image,
  title,
  iFrame,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    {/* <div>{iFrame}</div> */}
    <iframe
      title="unique"
      class="video-player video-player--banner"
      width="1200"
      height="800"
      src="https://player.vimeo.com/video/315768830?background=1&autoplay=1&loop=1&byline=0&title=0"
    />
    {/* <iframe src="http://www.example.com/" width="1200" height="800"></iframe> */}
    <div
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <Grid>
        <HomePageDiv>
          <Row>
            <Col xs={12} lg={12}>
              <HomePageH1>{title}</HomePageH1>
            </Col>
            <Col xs={12} lg={12}>
              <HomePageButton>{subheading}</HomePageButton>
            </Col>
          </Row>
        </HomePageDiv>
      </Grid>
    </div>
    <section className="section">
      <Grid>
        <Row>
          <Col xs={12} lg={12}>
            <HomePageH2 className="title">{mainpitch.title}</HomePageH2>
          </Col>
          <Col xs={12} lg={12}>
            <HomePageP className="subtitle">{mainpitch.description}</HomePageP>
          </Col>
        </Row>
      </Grid>
      <Features gridItems={intro.blurbs} />
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  iFrame: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        iFrame={frontmatter.iFrame}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        iFrame
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
