import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
// import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const HomepageTemplate = ({
  content,
  contentComponent,
  // description,
  tags,
  title
}) => {
  const HomeContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container content">
        <HomeContent className="content" content={content} />
        <div>Hello from Homepage Template {title}</div>
      </div>
    </section>
  );
};

HomepageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HomepageTemplate
        // contentComponent={HTMLContent}
        title={post.frontmatter.title}
        // content={post.html}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePage;

export const aboutPageQuery = graphql`
  query HomePage() {
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
`;
