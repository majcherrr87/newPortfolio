import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import Header from './components/Banner/Header';
import ProfileComponent from './components/Banner/ProfileComponent';
import Services from './components/Service/Services';
import Projects from './components/Projects/Projects';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Banner>
          <Header />
          <ProfileComponent />
        </Banner>
        <Services />
        <LightColor>
          <Projects />
        </LightColor>
        <Clients />
        <LightColor>
          <Footer />
        </LightColor>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;
const LightColor = styled.div`
  background: ${({ theme }) => theme.colors.background};
`;
