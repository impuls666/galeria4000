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

const CatText2 = styled.span`
  text-align: center;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.05em;
  font-weight: 500;
  display: block;
  margin-top: 22px;
  margin-bottom: 22px;
  color: #aaa;
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
