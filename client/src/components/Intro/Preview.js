import React, { Component } from "react";
import './Preview.css'

class Preview extends Component {
  render() {
    return (
      <div id="preview-shadow">
        <div id="preview">
          <div id="corner-tl" className="corner"></div>
          <div id="corner-tr" className="corner"></div>
          <h3>{this.props.title}</h3>
          <p>{this.props.message}</p>
          <div id="corner-br" className="corner"></div>
          <div id="corner-bl" className="corner"></div>
        </div>
      </div>
    );
  }
}

export default Preview;
