import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import {
  FigureStyles,
  FigureCaption,
  FigureImage
} from '../styles/HomepageStyles';

const FeatureGrid = ({ gridItems }) => (
  <Grid className="grid">
    <Row middle="xs" className="row">
      {gridItems.map(item => (
        <Col xs={12} sm={6} md={4} className="col-4">
          <div key={item.text}>
            <div>
              <div>
                <FigureStyles>
                  <PreviewCompatibleImage imageInfo={item} />
                  <FigureCaption>{item.text}</FigureCaption>
                </FigureStyles>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Grid>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
