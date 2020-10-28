import React from "react";
import styled from "styled-components";

const DotWrapper = styled.div`
  display: flex;
  padding: 10px;
  & div:nth-child(1) {
    background-color: #fc6058;
  }

  & div:nth-child(2) {
    background-color: #fec02f;
  }

  & div:nth-child(3) {
    background-color: #2aca3e;
  }
  //apply to all child
  > * {
    background-color: black;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 5px;

    -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  }
`;


const BrowserDots = () => {

  return (
    <div>
      <DotWrapper>
      <div key={1} />
      <div key={2} />
      <div key={3} />
      </DotWrapper>
    </div>
  );
};

export default BrowserDots;
