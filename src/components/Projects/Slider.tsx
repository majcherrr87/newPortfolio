import { useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Project from './Project';
import { settings } from './Slider-data';
import { ProjectData, ProjectDataType } from './project-data';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';

function SliderComp() {
  const arrowRef = useRef<Slider>(null);
  const { lang } = useMyContext();
  const { projects }: ProjectDataType = selectLang(ProjectData, lang);

  const handlePrev = () => {
    if (arrowRef.current) {
      arrowRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (arrowRef.current) {
      arrowRef.current.slickNext();
    }
  };

  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {projects.map((item) => (
          <Project item={item} key={item.index} />
        ))}
      </Slider>
      <Buttons>
        <button type="button" onClick={handlePrev} className="back">
          <IoIosArrowBack />
        </button>
        <button type="button" onClick={handleNext} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
}
export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: ${({ theme }) => theme.colors.main};
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
    font-size: 2rem;
  }
  .back {
    left: -1rem;
  }
`;
