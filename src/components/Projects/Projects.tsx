import React from 'react';
import styled from 'styled-components';
import SliderComp from './Slider';
import { Disc, Span, Title } from '../../assets/smallComponent';
import { useMyContext } from '../../utils/context/ContextProvider';
import { data, ProjectDataType } from './Slider-data';
import { selectLang } from '../../utils/changeLang';

import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = (): React.FC => {
  const { mainColor, lang } = useMyContext();
  const { txtTitleFirst, txtTitleSecond, disc }: ProjectDataType = selectLang(
    data,
    lang
  );
  return (
    <Container id="Project">
      <Title>
        {txtTitleFirst} <Span color={mainColor}>{txtTitleSecond}</Span>
      </Title>
      <Disc>{disc}</Disc>
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
