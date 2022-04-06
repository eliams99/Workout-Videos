import React, { useState } from "react";
import $ from "jquery";
import Comment from "./comment";

function Comments({ currentUser }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsDisplay, setCommentsDisplay] = useState(true);

  function handleChange({ currentTarget: input }) {
    setComment(input.value);
  }

  function handlePostComment() {
    const newComment = { author: currentUser, text: comment };
    setComments([...comments, newComment]);
    setComment("");
  }

  function handleCommentsDisplay() {
    setCommentsDisplay(!commentsDisplay);
  }

  return (
    <div className="comments-section my-5">
      <div className="row">
        <h4 className="col">Comments</h4>
        <div className="col-auto form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            checked={commentsDisplay ? true : false}
            onClick={handleCommentsDisplay}
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            {commentsDisplay ? "Enabled" : "Disabled"}
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input
            id="commentInput"
            className="form-control"
            type="text"
            placeholder="Write a comment..."
            aria-label="Write a comment"
            value={comment}
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <button
            className="col-auto btn btn-primary"
            type="button"
            onClick={handlePostComment}
            disabled={comment.length == 0}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="comments-list">
        {commentsDisplay &&
          comments.map((comment) => <Comment comment={comment} />)}
      </div>
    </div>
  );
}

export default Comments;
