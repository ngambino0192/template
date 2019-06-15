import React from 'react';
import PropTypes from 'prop-types';
import { PortfolioPageTemplate } from '../../templates/portfolio-page';

const PortfolioPagePreview = ({ entry, widgetFor }) => (
  <PortfolioPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

PortfolioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default PortfolioPagePreview;
