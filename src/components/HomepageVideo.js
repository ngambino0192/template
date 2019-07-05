import React from 'react';

const Video = ({ videoURL, videoTitle, ...props }) => (
  <div className="video">
    {console.log('props', props)}
    <iframe
      src={videoURL}
      src="https://player.vimeo.com/video/315768830?background=1&autoplay=1&loop=1&byline=0&title=0"
      title="{videoTitle}"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

export default Video;
