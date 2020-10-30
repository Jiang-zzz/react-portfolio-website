import React from "react";
import styled from "styled-components";

const Shadow = styled.div`
  background-color: var(--previewShadow);
  max-width: 300px;
  height: 180px;
  padding-left: 30px;
  padding-top: 30px;
`;

const PreviewCont = styled.div`
  width: 300px;
  border: 1.5px solid #17a2b8;
  background-color: var(--previewBg);
  padding: 15px;
  position: relative;
  & div {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid #17a2b8;
    background-color: #fff;
    position: absolute;
  }
  & #corner-tl {
    top: -5px;
    left: -5px;
  }

  & #corner-tr {
    top: -5px;
    right: -5px;
  }

  & #corner-br {
    bottom: -5px;
    right: -5px;
  }

  & #corner-bl {
    bottom: -5px;
    left: -5px;
  }
`;

const Preview = (props) => {
  return (
    <Shadow>
      <PreviewCont>
        <div id="corner-tl"></div>
        <div id="corner-tr"></div>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
        <div id="corner-br"></div>
        <div id="corner-bl"></div>
      </PreviewCont>
    </Shadow>
  );
};

export default Preview;
