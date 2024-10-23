import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import SliderComp from './Slider';
import { Disc, Span, Title } from '../../assets/smallComponent';
import { useMyContext } from '../../utils/context/ContextProvider';
import { data, ProjectDataType } from './Slider-data';
import { selectLang } from '../../utils/changeLang';
import { HandSwipe } from '../../assets/svg/handSwipe';

import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Projects() {
  const { mainColor, lang } = useMyContext();
  const { txtTitleFirst, txtTitleSecond, disc }: ProjectDataType =
    selectLang(data, lang) ?? data[0];

  const { ref: projectRef, inView } = useInView();
  const [view, setView] = useState('');
  useEffect(() => {
    if (inView) setView('visible');
  }, [inView]);

  return (
    <Container id="allProject" className={view}>
      <Title id="allProject-title" ref={projectRef}>
        {txtTitleFirst} <Span color={mainColor}>{txtTitleSecond}</Span>
      </Title>
      <Disc id="allProject-description">{disc}</Disc>
      <Slide id="allProject-slide">
        <SliderComp />
      </Slide>
      <HandSwipe />
    </Container>
  );
}
export default Projects;

const Container = styled.section`
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  scale: 0;
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
  &.visible {
    animation: animateProject 1s forwards;
  }

  @keyframes animateProject {
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;
const Slide = styled.div``;
