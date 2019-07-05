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
} from '../styles/components/VacationStyles';

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
          {console.log(post)}
          <TextContainer>
            <PackageTitle>{post.frontmatter.title}</PackageTitle>
            <PackageDescription>
              {post.frontmatter.description}
            </PackageDescription>
          </TextContainer>
          <MainImageContainer>
            <ImageContainer>
              <ImageThumbnail src="/img/ocean-shaka.jpg" />
            </ImageContainer>
            <ImageContainer>
              <ImageThumbnail src="/img/shark-diving.jpg" />
            </ImageContainer>
            <ImageContainer>
              <ImageThumbnail src="/img/atlantis.jpg" />
            </ImageContainer>
            <ImageContainer>
              <ImageThumbnail src="/img/pali-notches.jpg" />
            </ImageContainer>
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

const VacationThumbnail = ({ imageInfo }) => {
  const imageStyle = {
    borderRadius: '5px',
    opacity: '0.75',
    transition: 'opacity 0.35s',
    width: '25%',
  };
  const { alt = '', childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

VacationThumbnail.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};
