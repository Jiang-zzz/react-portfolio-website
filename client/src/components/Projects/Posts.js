import React, { Component } from "react";
import "./Post.css";
import image1 from "../../images/emaily.png"
import image2 from "../../images/portofolio.png"
const postInfo = [
  {
    image: image1,
    title: "React feedback collection app",
    intro:
      "MERN stack project, which allows users to send group email and auto-collect feedback, demo video coming",
    link: "https://github.com/Jiang-zzz/Email_app",
  },
  {
    image:image2,
    title: "React Portofilo Website",
    intro: " Reactjs + Express project deployed on heroku. Using react-hook-form and sendgrid to handle email",
    link: "https://github.com/Jiang-zzz",
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
            <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
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
