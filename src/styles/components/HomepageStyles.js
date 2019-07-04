import styled from 'styled-components';

const FigureStyles = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 10px 1%;
  background: #726fb9;
  text-align: center;
  cursor: pointer;
  background: #000;
  margin-bottom: 30px;
`;

const FigureCaption = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HomePageH1 = styled.h1`
  color: #333333;
  padding: 5px 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
`;

// const FigureImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

export { FigureStyles, FigureCaption, HomePageH1 };
