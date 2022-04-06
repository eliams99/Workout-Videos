import React from "react";

const Comment = ({ comment: { author, text } }) => {
  return (
    <div className="comment-item p-3 m-2">
      <div className="author">{author}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Comment;
