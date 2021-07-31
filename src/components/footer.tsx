import React, { VFC } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 90px;
  font-family: sans-serif;
  text-align: center;
  background: lightblue;
`;

export const Footer: VFC = () => {
  return (
    <StyledContainer>
      <h3>This is footer</h3>
    </StyledContainer>
  );
};
