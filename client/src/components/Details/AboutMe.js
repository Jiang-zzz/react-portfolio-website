import React, { Component } from "react";
import "./AboutMe.css";

const SOCIALLINKS = [
  { link: "https://github.com/Jiang-zzz", platform: "Github", id: "Jiang-zzz" },
  {
    link: "https://www.kaggle.com/jiangzzz197",
    platform: "Kaggle",
    id: "Zizhou Zhang",
  },
  {
    link: "https://www.facebook.com/profile.php?id=100008202469257",
    platform: "Facebook",
    id: "Zizhou Zhang",
  },
];
class AboutMe extends Component {
  renderLinks() {
    return SOCIALLINKS.map(({ link, platform, id }) => {
      return (
        <div key={platform} style={{ marginBottom: "30px" }}>
          <a
            key={platform}
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >{`${platform}: @${id}`}</a>
        </div>
      );
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h4>More about me</h4>

        <p>
          I'm a Master of IT graduate from the University of Melbourne. Keen to
          try new things and explore more career options
        </p>
        <p>
          I enjoy web development and occasionally participate in Kaggle
          competition
        </p>

        <hr />
        <div className="social-links">
          <h4>Find me on Internet</h4>
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}

export default AboutMe;
