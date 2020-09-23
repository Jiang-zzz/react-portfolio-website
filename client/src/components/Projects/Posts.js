import React, { Component } from "react";
import "./Post.css";
import managePic from "../../images/dash.jpg"
import membershipPic from "../../images/membershipSite.jpg"
const postInfo = [
  {
    image: managePic,
    title: "Laboratory Management System",
    intro:
      " Designed built & mantained a the lab managment system for FOI Laboratories",
    link: "google.com",
  },
  {
    image: membershipPic,
    title: "React Portofilo Website",
    intro: " Using nodejs and a the lab managment system for FOI Laboratories ",
    link: "google.com",
  },
  {
    image: membershipPic,
    title: "Portofilo Website",
    intro: " Modulized guide for online courses with step by step intructions ",
    link: "google.com",
  },
];
class Posts extends Component {
  renderPost() {
    return postInfo.map(({ image, title, intro, link }) => {
      return (
        <div key={title} className="post">
          <img className="thumbnail" alt={title} src={image} />
          <div className="post-preview">
            <h6 className="post-title">{title}</h6>
            <p className="post-intro">{intro}</p>
            <a href={link}>Read More</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="post-wrapper">{this.renderPost()}</div>;
  }
}

export default Posts;
