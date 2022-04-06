import React from "react";
import VideoCard from "./videoCard";
import { Link } from "react-router-dom";

const Recommended = ({ videos }) => {
  return (
    <React.Fragment>
      <h4>Related</h4>
      <div className="recommended-videos">
        {videos.map((video) => (
          <Link
            className="col-4 pb-4"
            to={`/videos/${video._id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Recommended;
