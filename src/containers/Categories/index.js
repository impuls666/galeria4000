import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Col, { Row } from '../../components/Grid';
import Image from '../../components/Image';
import Data from '../../data.json';
import { Container, ImgContainer, Header } from '../../components/Styles';

const CatText = styled.span`
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.05em;
  font-weight: 500;
  display: block;
  margin-top: 22px;
  margin-bottom: 22px;
  color: #555555;
`;

const BgImage = styled.div`
  background: url(${props => props.src});
  opacity: 0.75;
  background-size: cover;
  background-position: 50% 60%;
  position: absolute;
  left: -15px;
  top: -15px;
  width: calc(100% + 30px);
  height: calc(100% + 30px);
  z-index: 0;
  /*   -webkit-filter: blur(4px); */
  -webkit-animation: blurred-bg 2s 1 forwards;
  box-sizing: border-box;
`;

const CategoryText = props => {
  const { txt } = props;
  return <CatText>{txt}</CatText>;
};

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  onMouseOver() {
    this.setState({
      url: '../../images/architektura/pexels-photo-261187.jpeg',
    });
  }
  render() {
    return (
      <div>
        <Header>
          <BgImage src={this.state.url} />;
        </Header>
        <Container>
          <Row>
            {Data.map(item => {
              return (
                <Col s={3}>
                  <ImgContainer onMouseOver={this.onMouseOver}>
                    <Link to={`/category/${item.url}`}>
                      <Image src={item.categoryImage} />
                      <CategoryText txt={item.name} />
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
