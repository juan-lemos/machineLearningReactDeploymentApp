import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ImageAndName({ image, name, height, width }) {
  return (
    <span style={{ margin: '5px', display: 'flex', flexDirection: 'column', verticalAlign: 'center', alignItems: 'center' }}>
      <span>
        <Image src={image} style={{ height: `${height}px`, width: `${width}px` }} circle />
      </span>
      <span>
        <div style={{ fontWeight: 'bold' }}>{name}</div>
      </span>
    </span >
  );
}

ImageAndName.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default ImageAndName;
