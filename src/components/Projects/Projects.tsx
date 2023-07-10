import React from 'react';
import styled from 'styled-components';
import SliderComp from './Slider';
import { Disc, Span, Title } from '../../assets/smallComponent';

import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = (): React.FC => {
  return (
    <Container id="Project">
      <Title>
        Recent <Span>Projects</Span>
      </Title>
      <Disc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
        fuga quas. Aspernatur autem consequatur esse, facere modi molestiae
        nihil officia quas qui ratione repudiandae, tempora vero vitae? Magni,
        voluptas!
      </Disc>
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
`;
const Slide = styled.div``;
