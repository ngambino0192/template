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
  />
);

export default Video;
