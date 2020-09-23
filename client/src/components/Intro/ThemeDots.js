import React, { Component } from "react";
import "./ThemeDots.css";
import "../themes";
import { defaultTheme, greenTheme, purpleTheme, blueTheme } from "../themes";

const CLASSNAME = "theme-dot";
const dotsAttribute = [
  { dataMode: "default", id: "default-mode" },
  { dataMode: "blue", id: "blue-mode" },
  { dataMode: "green", id: "green-mode" },
  { dataMode: "purple", id: "purple-mode" },
];
// document.documentElement.style.setProperty('--mainColor', 'black');
class ThemeDots extends Component {
  changeTheme(themeMode) {
    if (themeMode === "default-mode") {
      Object.keys(defaultTheme).forEach((key) => {
        document.documentElement.style.setProperty(
          `--${key}`,
          defaultTheme[key]
        );
      });
    }
    if (themeMode === "green-mode") {
      Object.keys(greenTheme).forEach((key) => {
        document.documentElement.style.setProperty(`--${key}`, greenTheme[key]);
      });
    }
    if (themeMode === "purple-mode") {
      Object.keys(purpleTheme).forEach((key) => {
        document.documentElement.style.setProperty(
          `--${key}`,
          purpleTheme[key]
        );
      });
    }
    if (themeMode === "blue-mode") {
      console.log(blueTheme);
      Object.keys(blueTheme).forEach((key) => {
        document.documentElement.style.setProperty(`--${key}`, blueTheme[key]);
      });
    }
  }
  renderDots() {
    return dotsAttribute.map(({ dataMode, id }) => {
      return (
        <div
          key={dataMode}
          id={id}
          className={CLASSNAME}
          onClick={(e) => {
            this.changeTheme(e.target.id);
          }}
        />
      );
    });
  }
  render() {
    return <div id="theme-options-wrapper">{this.renderDots()}</div>;
  }
}

export default ThemeDots;
