import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./Comments.scss";

const Comments = ({ comment }: any) => {
  return (
    <div className="comment-container">
      <p>{ReactHtmlParser(comment.text)}</p>
      {comment.children.map((comment: any) => (
        <Comments key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
