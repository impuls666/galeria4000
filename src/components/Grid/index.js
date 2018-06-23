import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Column = styled.div`
  padding: ${({ theme }) => theme.grid.gutterWidth};
  width: ${props => props.xs}%;
  ${({ theme }) => theme.media.s`
    width: ${props => props.s}%;
  `};
  ${({ theme }) => theme.media.m`
    width: ${props => props.m}%;
  `};
  ${({ theme }) => theme.media.l`
    width: ${props => props.l}%;
  `};
  ${({ theme }) => theme.media.xl`
    width: ${props => props.xl}%;
  `};
  z-index: 999;
`;

class Col extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = 12;
  }
  getAvailableSize(sizeName) {
    const sizesInOrder = ['xs', 's', 'm', 'l', 'xl'];
    const currentIndex = sizesInOrder.findIndex(item => {
      return item === sizeName;
    });
    let availableSize = null;
    for (let i = currentIndex; i >= 0; i--) {
      if (this.props[sizesInOrder[i]]) {
        availableSize = this.props[sizesInOrder[i]];
        break;
      }
    }
    return (100 / this.columns) * availableSize;
  }
  render() {
    const { xs } = this.props;
    return (
      <Column
        xs={(100 / this.columns) * xs}
        s={this.getAvailableSize('s')}
        m={this.getAvailableSize('m')}
        l={this.getAvailableSize('l')}
        xl={this.getAvailableSize('xl')}
      >
        {this.props.children}
      </Column>
    );
  }
}

/* eslint-disable */
Col.propTypes = {
  xs: PropTypes.number,
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  xl: PropTypes.number,
  children: PropTypes.node.isRequired,
};
/* eslint-enable */

Col.defaultProps = {
  xs: 12,
  s: null,
  m: null,
  l: null,
  xl: null,
};

export default Col;
