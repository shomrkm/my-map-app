import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Header } from './components/header';
import { Footer } from './components/footer'
import { Map } from './map/map';


const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`;

const StyledAppContainer = styled.div`
  .body {
    margin: 0;
    padding: 0;
  }

  min-width: 100%;
  max-width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const App = ()=> {
  return (
    <StyledAppContainer>
        <GlobalStyle />
        <Header />
        <Map />
        <Footer />
    </StyledAppContainer>
  )
}