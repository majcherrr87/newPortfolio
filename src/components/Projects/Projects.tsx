import styled from 'styled-components';
import SliderComp from './Slider';
import React from 'react';

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
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
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
  }
`;
const Slide = styled.div``;
