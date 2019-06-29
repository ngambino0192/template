import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const HomePageTemplate = ({ title, tags }) => {
  // const PageContent = contentComponent || Content;

  return (
    <>
      <div>Homepage Template</div>
      <div>Title: {title}</div>
    </>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string,
};

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <HomePageTemplate title={post.frontmatter.title} />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;
