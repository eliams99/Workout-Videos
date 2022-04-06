import React from "react";

function VideoCard({ video: { _id, title } }) {
  const imgPath = `/thumbnails/thumbnail_${_id}.png`;
  return (
    <div className="card" key={_id}>
      <img src={imgPath} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text title">{title}</p>
      </div>
    </div>
  );
}

export default VideoCard;
