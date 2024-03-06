import { useLayoutEffect } from 'react';
import styled from 'styled-components';
import SliderComp from './Slider';
import { Disc, Span, Title } from '../../assets/smallComponent';
import { useMyContext } from '../../utils/context/ContextProvider';
import { data, ProjectDataType } from './Slider-data';
import { selectLang } from '../../utils/changeLang';

import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Projects() {
  const { mainColor, lang } = useMyContext();
  const { txtTitleFirst, txtTitleSecond, disc }: ProjectDataType = selectLang(
    data,
    lang
  );

  return (
    <Container id="allProject">
      <Title id="allProject-title">
        {txtTitleFirst} <Span color={mainColor}>{txtTitleSecond}</Span>
      </Title>
      <Disc id="allProject-description">{disc}</Disc>
      <Slide id="allProject-slide">
        <SliderComp />
      </Slide>
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
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
`;
const Slide = styled.div``;
