import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
// import PreviewCompatibleImage from './PreviewCompatibleImage';

class HomepageTitle extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    // console.log('data: ', data);
    // console.log('posts: ', posts);

    return (
      <>
        <div>HomepageTitle Component</div>
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            <h2>{post.frontmatter.title}</h2>
          </div>
        ))}
      </>
    );
  }
}

HomepageTitle.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    tags: PropTypes.string
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query HomePageTitleQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "homepage" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `}
    render={data => <HomepageTitle data={data} />}
  />
);
