import styled from 'styled-components';
import { theme } from '../../styles/';
const { buttonBlueXl } = theme;

const FigureStyles = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 10px 1%;
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
  }
`;

const FigureCaption = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 30%;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, -20px, 0);
  transform: translate3d(0, -20px, 0);
  }

`;

const HomePageDiv = styled.div`
  display: flex;
  min-height: 400px;
  line-height: 1;
  align-items: center;
  text-align: center;
  padding: 3em;
`;

const HomePageH1 = styled.h1`
  color: #ffffff;
  padding: 5px 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 3em;
`;

const HomePageH2 = styled.h2`
  color: #333333;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.25em;
  text-align: center;
`;

const HomePageP = styled.p`
  color: #ffffff;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  padding: 1em;
  margin-top: -3em;
`;

const HomePageButton = styled.button`
  ${buttonBlueXl};

  &:hover {
    background-color: #fed136;
    border-color: #fed136;
  }
`;

export {
  FigureStyles,
  FigureCaption,
  HomePageDiv,
  HomePageH1,
  HomePageH2,
  HomePageP,
  HomePageButton
};
