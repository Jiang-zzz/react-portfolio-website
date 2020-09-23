import React from "react";
import "../default.css";
import Posts from './Posts'
function Project() {
  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Some of my projects</h3>
            <Posts />
      </div>
    </section>
  );
}

export default Project;
