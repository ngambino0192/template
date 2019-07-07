import React from 'react';

import { VideoWrapper } from '../styles/component-styles/HomeVideoWrapper';

const Video = ({ videoURL, videoTitle, ...props }) => (
  <VideoWrapper
    src={props.videoUrl}
    title="{videoTitle}"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    style={{
      background:
        'linear-gradient(rgba(13, 138, 166, 0.8), rgba(13, 138, 166, 0.8)',
      position: 'fixed',
      height: '100vh',
      height: '100vw'
    }}
  />
);

export default Video;
