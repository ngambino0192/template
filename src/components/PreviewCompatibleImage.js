import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { redirectTo } from '@reach/router';

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = {
    borderRadius: '5px',
    opacity: '1',
    transition: 'opacity 0.35s',
    background: '#000'
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

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
};

export default PreviewCompatibleImage;

// BOOTSTRAP FIGURE? TODO: integrate into img tags above, test upload functionality
{
  /* <Figure class="effect-bubba">
<img src={image} alt={alt} class="img-responsive" />
<Figure.Caption>
  <h2>Ocean Activities</h2>
  <a href="/" data-toggle="modal" data-target="#Modal-2">
    View more
  </a>
</Figure.Caption>
</Figure> */
}
