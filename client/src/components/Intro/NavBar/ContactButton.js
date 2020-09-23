import React from "react";
import "./ContactButton.css"
import { HashLink } from 'react-router-hash-link';
const ContactButton = () => {
  return (
    <ul id="navigation">
      <li>
        <HashLink to="/#contact">Contact</HashLink>
      </li>
    </ul>
  );
};

export default ContactButton;
