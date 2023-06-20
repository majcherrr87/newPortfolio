import { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { data, settings } from './Slider-data';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = data.map((item, index) => (
    <Project item={item} key={index} />
  ));

  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};
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
  }
  .back {
    left: -1rem;
  }
`;
