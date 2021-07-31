import React, { VFC } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100px;
  font-family: sans-serif;
  text-align: center;
  background: lightblue;
`;

export const Header: VFC = () => {
  return (
    <StyledContainer>
      <h3>Hello My Map Application</h3>
      <h4>This is my sandbox app for learning openlayers.</h4>
    </StyledContainer>
  );
};
