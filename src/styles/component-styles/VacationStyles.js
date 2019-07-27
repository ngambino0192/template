import styled from 'styled-components';
import { media, theme } from '../../styles';
const { colors, fontSizes } = theme;

const Background = styled.div`
  background: linear-gradient(rgba(13, 138, 166, 0.8), rgba(13, 138, 166, 0.8)),
    url(/img/VacationBackground.jpg);
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  z-index: -1;
`;

const VacationsContainer = styled.div`
  margin: 0 auto;
  padding: 150px 20px;
  max-width: 1000px;
  ${media.tablet`padding: 150px 10px`};
`;

const HeaderContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin-bottom: 50px;
`;

const VacationsTitle = styled.h2`
  font-family: 'Open Sans';
  font-weight: 800;
  color: #fff;
  font-size: 36px;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: ${fontSizes.xsmall};
  margin: 0;
`;

const VacationItemsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;

  ${media.tablet`flex-flow: column nowrap;`};
`;

const TextContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 30px;
`;

const MainImageContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 25%;
  overflow: hidden;
  position: relative;
`;

const PackageTitle = styled.h3`
  font-weight: 300;
  margin: 0;
  text-transform: uppercase;
`;

const PackageDescription = styled.p`
  font-size: 10px;
  font-weight: 300;
`;

const ImageThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextHoverDetails = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;

  .fade-in-top {
    top: 20%;
  }
`;

const Day = styled.h3`
  color: #fff;
  font-weight: 600;
  font-size: ${fontSizes.xlarge};
  margin: 0;
  padding: 0;
`;

export {
  Background,
  VacationsContainer,
  HeaderContainer,
  VacationsTitle,
  Subtitle,
  VacationItemsContainer,
  TextContainer,
  ImageContainer,
  PackageTitle,
  PackageDescription,
  ImageThumbnail,
  MainImageContainer,
  TextHoverDetails,
  Day,
};
