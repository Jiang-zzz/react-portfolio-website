import React from "react";
import "./Navbar.css";
import BrowserDots from "./BrowserDots";
import ContactButton from "./ContactButton";
const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <BrowserDots />

      <ContactButton />
    </div>
  );
};

export default NavBar;
