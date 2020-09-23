import React, { Component } from "react";
import "./BrowserDots.css";

const CLASSNAME = "browser-dot";
const dotsAttributes = [{ id: "dot-1" }, { id: "dot-2" }, { id: "dot-3" }];

class BrowserDots extends Component {
  renderDots() {
    return dotsAttributes.map(({ id }) => {
      return <div key={id} id={id} className={CLASSNAME} />;
    });
  }
  render() {
    return (
      <div>
        <div className="dots-wrapper">{this.renderDots()}</div>
      </div>
    );
  }
}

export default BrowserDots;
