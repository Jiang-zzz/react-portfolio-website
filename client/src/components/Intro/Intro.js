import React from "react";
import "../default.css";
import NavBar from "./NavBar/NavBar";
import ThemeDots from "./ThemeDots";
import Preview from "./Preview"
import avatar from "../../images/avatar1.jpg";

const Intro = () => {
  return (
    <div className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Hi, I'm Zizhou (John) Zhang </h1>
        </div>
        <div className="intro-wrapper">
          <NavBar />
          <div className="left-column">
            <img id="profile_pic" alt="avatar" src={avatar} />
            <h5 style={{ textAlign: "center", lineHeight: "0" }}>
              Personalize Theme
            </h5>
            <ThemeDots />
            <p id="settings-note">
              *click them to change theme
              {/* *Theme settings will be saved for
              <br />
              your next vist */}
            </p>
          </div>
          <div className="right-column">
          <Preview title="Who I am" message="Web Developer and Kaggle enthusiast" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
