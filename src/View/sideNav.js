import React from "react";
import "../Styles/sideNav.css";

export default function({ onPageChange }) {
  return (
    <div className="side-nav">
      <div className={"link"} onClick={onPageChange.bind(this, 0)}>
        Home
      </div>
      <div className={"link"} onClick={onPageChange.bind(this, 1)}>
        Movie List
      </div>
      <div className={"link"} onClick={onPageChange.bind(this, 2)}>
        Movie List of Liked
      </div>
      <div className={"link"} onClick={onPageChange.bind(this, 3)}>
        Movie List of Blocked
      </div>
    </div>
  );
}
