import styled from 'styled-components';

const VideoWrapper = styled.iframe`
  width: 100vw;
  min-height: 100vh;
  /* max-height: 100vh; */
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export { VideoWrapper };
