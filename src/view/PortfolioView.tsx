import styled, { ThemeProvider } from 'styled-components';
import theme from '../assets/theme';
import Header from '../components/Banner/Header';
import ProfileComponent from '../components/Banner/ProfileComponent';
import Services from '../components/Service/Services';
import Projects from '../components/Projects/Projects';
import Clients from '../components/Clients/Clients';
import Footer from '../components/Footer/Footer';
import { ContextProvider } from '../utils/context/ContextProvider';
import { MainProject } from '../components/MainProject/MainProject';
import { Copyright } from '../components/Copyright/Copyright';
import { Education } from '../components/Education/Education';
import '../index.css';

function PortfolioView() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Container>
          <Banner>
            <Header />
            <ProfileComponent />
          </Banner>
          <MainProject />
          <LightColor>
            <Projects />
          </LightColor>
          <Services />
          <LightColor>
            <Education />
          </LightColor>
          <Clients />
          <LightColor>
            <Footer />
          </LightColor>
          <Copyright />
        </Container>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default PortfolioView;

const Container = styled.main``;
const Banner = styled.section`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  @media (max-width: ${(props) => props.theme.size.sm}) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;
const LightColor = styled.div`
  background: ${(props) => props.theme.colors.background};
`;
