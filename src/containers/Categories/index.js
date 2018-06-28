import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Col, { Row } from '../../components/Grid';
import Image from '../../components/Image';
import Data from '../../data.json';
import {
  Container,
  ImgContainer,
  Header,
  BgImage,
  CatText,
  CatText2,
  Header1,
  Header2,
} from '../../components/Styles';

const CategoryText = props => {
  const { txt, pocet } = props;
  if (props.txt) {
    return <CatText>{txt}</CatText>;
  }
  if (props.pocet) {
    return <CatText2>{pocet} fotky</CatText2>;
  }
};

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
    };
  }

  render() {
    return (
      <div>
        <Header>
          <BgImage src={this.state.url} />
          <Container>
            <Header1>FOTOGALÉRIA</Header1>
            <Header2>KATEGÓRIE</Header2>
          </Container>
        </Header>
        <Container>
          <Row>
            {Data.map(item => {
              return (
                <Col s={3}>
                  <ImgContainer
                    onMouseEnter={() => {
                      this.setState({
                        url: item.categoryImage,
                      });
                    }}
                  >
                    <Link to={`/category/${item.url}`}>
                      <Image src={item.categoryImage} />
                      <CategoryText txt={item.name} />
                      <CategoryText pocet={item.subimages.length} />
                    </Link>
                  </ImgContainer>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
