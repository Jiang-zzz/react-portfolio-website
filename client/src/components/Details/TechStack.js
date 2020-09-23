import React, { Component } from "react";
import "./TechStack.css";

const SKILLS = [
  { name: "Python", percentage: "100%" },
  { name: "JavaScript", percentage: "90%" },
  { name: "MongoDB", percentage: "70%" },
  { name: "Express", percentage: "70%" },
  { name: "Reactjs", percentage: "70%" },
  { name: "Nodejs", percentage: "70%" },
];
class TechStack extends Component {
  renderSkills() {
    return SKILLS.map(({ name, percentage }) => {
      return (
        <div key={name} className="skillBox">
          <p>{name}</p>
          <p>{percentage}</p>
          <div className="skill">
            <div
              className="skill_level"
              style={{ width: `${percentage}` }}
            ></div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="center">{this.renderSkills()}</div>;
  }
}

export default TechStack;
