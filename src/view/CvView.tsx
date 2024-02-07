import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightThemeCv, darkThemeCv } from '../components/cv/themeCv';

import { Nav } from '../components/cv/Nav/Nav';
import { CVMain } from '../components/cv/CVMain';

function CvView() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={isDarkTheme ? darkThemeCv : lightThemeCv}>
      <Container>
        <Header>
          <Nav />
        </Header>
        <CVMain switchTheme={setIsDarkTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default CvView;

const Container = styled.div`
  margin: 0 0 ${({ theme }) => theme.header_height} 0;
  padding: 0;
  font-family: ${({ theme }) => theme.font.body_font};
  font-size: ${({ theme }) => theme.font.normal_font_size};
  background-color: ${({ theme }) => theme.colors.body_color};
  color: ${({ theme }) => theme.colors.text_color};
  transition: all 0.5s ease;
  h1,
  h2,
  h3,
  ul,
  p {
    margin: 0;
  }
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.title_color};
    font-weight: ${({ theme }) => theme.font.font_weight_medium};
  }
  ul {
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .section-title {
    font-size: ${({ theme }) => theme.font.h2_font_size};
    color: ${({ theme }) => theme.colors.title_color};
    font-weight: ${({ theme }) => theme.font.font_weight_bold};
    text-transform: uppercase;
    letter-spacing: 0.35rem;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.margins.mb_3};
    @media screen and (min-width: 968px) {
      text-align: initial;
    }
  }

  @media screen and (min-width: 968px) {
    padding: 3rem;
    margin-bottom: 0;
  }
`;
const Header = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.index.z_fixed};
  background-color: ${({ theme }) => theme.colors.body_color};
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  @media screen and (min-width: 968px) {
    display: none;
  }
`;
