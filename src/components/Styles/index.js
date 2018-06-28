import styled from 'styled-components';

export const Header = styled.header`
  text-align: left;
  width: 100%;
  height: 350px;
  background: black;
  overflow: hidden;
  position: relative;
  text-transform: uppercase;
  @keyframes blurred-bg {
    0% {
      -webkit-filter: blur(0px);
    }
    100% {
      -webkit-filter: blur(10px);
    }
  }
`;

export const Container = styled.div`
  margin-top: -50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  z-index: 999;
`;

export const ImgContainer = styled.div`
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-bottom: 25px;
  transition: 0.5s ease-in-out;
  ${this}:hover {
    transform: translate(0px, -20px);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const CatText = styled.span`
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

export const CatText2 = styled.span`
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

export const BgImage = styled.div`
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

export const Header1 = styled.h1`
  color: #fff;
  transform: translate(10px, 150px);
`;

export const Header2 = styled.h2`
  color: #fff;
  transform: translate(10px, 170px);
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
`;
