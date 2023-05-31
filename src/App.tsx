import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import Header from './components/Banner/Header';

import './index.css';
import ProfileComponent from './components/Banner/ProfileComponent';
import Services from './components/Service/Services';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Banner>
          <Header />
          <ProfileComponent />
        </Banner>
        <Services />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 1rem;
  }
`;
