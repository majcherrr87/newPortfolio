import React from 'react';
import styled from 'styled-components';
import SliderComp from './Slider';

import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = (): React.FC => {
  return (
    <Container>
      <h1>
        Recent <span>Projects</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
        fuga quas. Aspernatur autem consequatur esse, facere modi molestiae
        nihil officia quas qui ratione repudiandae, tempora vero vitae? Magni,
        voluptas!
      </p>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};
export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
    span {
      color: ${({ theme }) => theme.colors.main};
    }
  }
  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: ${({ theme }) => theme.size.sm500}) {
      width: 90%;
    }
  }
`;
const Slide = styled.div``;
