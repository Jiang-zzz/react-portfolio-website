import React from "react";
import BrowserDots from "./BrowserDots";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Contact = styled.ul`
  margin: 0;
  padding: 10px;
  & a {
    color: var(--mainText);
  }
  & li {
    display: inline-block;
    margin-right: 5px;
    margin-left: 5px;
  }
  & li:hover {
    color: gold;
  }
`;

const NavWrapper = styled.div`
  border-radius: 5px 5px 0 0;
  grid-area: nav-wrapper;
  border-bottom: 1px solid var(--borderColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--mainColor);
`;
const NavBar = () => {
  return (
    <NavWrapper>
      <BrowserDots />
      <Contact>
        <li>
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </Contact>
    </NavWrapper>
  );
};

export default NavBar;
