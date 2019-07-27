import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import {
  VacationItemsContainer,
  TextContainer,
  ImageContainer,
  PackageTitle,
  ImageThumbnail,
  PackageDescription,
  MainImageContainer,
  TextHoverDetails,
  Day,
} from '../styles/component-styles/VacationStyles';

const images = [
  '/img/ocean-shaka.jpg',
  '/img/shark-diving.jpg',
  '/img/atlantis.jpg',
  '/img/pali-notches.jpg',
];

class VacationItems extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      posts &&
      posts.map(({ node: post }, i) => (
        <VacationItemsContainer key={i}>
          <TextContainer>
            <PackageTitle>{post.frontmatter.title}</PackageTitle>
            <PackageDescription>
              {post.frontmatter.description}
            </PackageDescription>
          </TextContainer>
          <MainImageContainer>
            {images.map((image, i) => (
              <ImageContainer key={i} className="vacation-img-container">
                <div className="vacation-img-overlay" />
                <ImageThumbnail src={image} />
                <TextHoverDetails className="text-hover-details fade-in-top">
                  <Day>Day {i + 1}</Day>
                </TextHoverDetails>
              </ImageContainer>
            ))}
          </MainImageContainer>
        </VacationItemsContainer>
      ))
    );
  }
}

VacationItems.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query VacationItemsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "vacation-package" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <VacationItems data={data} count={count} />}
  />
);
