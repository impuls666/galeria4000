import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Data from '../../data.json';
import Col, { Row } from '../../components/Grid';
import Image from '../../components/Image';
import {
  Container,
  ImgContainer,
  Header,
  BgImage,
} from '../../components/Styles';

class Gallery extends PureComponent {
  render() {
    const match = Data.filter(item => {
      return item.url === this.props.match.params.categoryName;
    });
    return (
      <div>
        <Header>
          {match.map(item => {
            return <BgImage src={item.subimages[0]} />;
          })}
        </Header>
        <Container>
          <Row>
            {match.map(item => {
              return item.subimages.map(obraztek => {
                return (
                  <Col s={3}>
                    <ImgContainer>
                      <Image src={obraztek} />
                    </ImgContainer>
                  </Col>
                );
              });
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gallery;
