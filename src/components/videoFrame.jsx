import React from "react";
import ReactPlayer from "react-player";

function VideoFrame({ videoId }) {
  const videoPath = `/videos/video_${videoId}.mp4`;
  return (
    // <video controls>
    //   <source src="/videos/video_example.mp4" type="video/mp4" />
    // </video>
    <ReactPlayer
      playing
      url={videoPath}
      width="100%"
      height="auto"
      controls={true}
    />
  );
}

export default VideoFrame;
