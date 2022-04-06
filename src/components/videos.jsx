import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVideos } from "./../services/videoService";
import VideoCard from "./videoCard";

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(getVideos());
  });

  return (
    <React.Fragment>
      <div className="breadcrumb py-4">
        <div className="container">
          <h2>Videos</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {videos.map((video) => (
            <Link
              className="col-md-4 pb-4"
              to={`/videos/${video._id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <VideoCard video={video} />
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Videos;
