import React from "react";
import "./styles.css";

export default function movies(props) {
  const { movie, onDelete, id, isLiked, doLike } = props;
  return (
    <>
      <h1 className="title">{movie.name}</h1>
      <div>{movie.type}</div>
      <div>{movie.rating}</div>
      <div>{movie.cast}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button className={isLiked ? "like" : ""} onClick={() => doLike(id)}>
        Like
      </button>
    </>
  );
}
