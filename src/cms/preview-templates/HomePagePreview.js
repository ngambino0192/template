import React from 'react';
import PropTypes from 'prop-types';
import { HomepageTemplate } from '../../templates/homepage';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <HomepageTemplate
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
