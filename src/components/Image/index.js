import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.img`
  height: 200px;
  margin-left: -20px;
`;

const Image = props => {
  const { src } = props;
  return <Img src={src} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
