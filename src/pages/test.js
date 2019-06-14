import React from 'react';
import { graphql } from 'gatsby';

const Test = ({ data }) => {
  const content = data.allMarkdownRemark.edges;
  return (
    <>
      <ul>
        {content.map(result => {
          const excerpt = result.node.excerpt;
          console.log(excerpt);
          return <li>{excerpt}</li>;
        })}
        <div>hello</div>
      </ul>
    </>
  );
};

export default Test;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
        }
      }
    }
  }
`;
