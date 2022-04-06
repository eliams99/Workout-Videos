import React from "react";
import VideoFrame from "./videoFrame";
import { useParams } from "react-router-dom";
import { getVideo, getVideos } from "../services/videoService";
import Recommended from "./recommended";
import Comments from "./comments";

function Video({ currentUser }) {
  const { id } = useParams();
  const video = getVideo(id);
  const recommendedVideos = getVideos();

  return (
    <React.Fragment>
      <div className="breadcrumb py-4">
        <div className="container">
          <h2>{video.title}</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <VideoFrame videoId={video._id} />
            <Comments videoId={video._id} currentUser={currentUser} />
          </div>
          <div className="col-md-4">
            <Recommended videos={recommendedVideos} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Video;
