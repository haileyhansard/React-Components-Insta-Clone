// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
const [comments, setComments] = useState(props.comments);
const [comment, setComment] = useState('');

const addComment = event => {
  event.preventDefault();
  const data = {
    username: 'hailey',
    text: comment
  };
  setComments(comments => comments.concat(data));
  setComment('');
}

const changeComment = event => {
  setComment(event.target.value);
}

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment, idx) => <Comment key={idx} comment={comment} />)}
      <CommentInput 
        submitComment={addComment} 
        changeComment={changeComment} 
        comment={comment} 
      />
    </div>
  );
};

export default CommentSection;
