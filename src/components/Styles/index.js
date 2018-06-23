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
