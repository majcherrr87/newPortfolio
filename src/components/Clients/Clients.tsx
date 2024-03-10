import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { H1Title, Span } from '../../assets/smallComponent';
import ClientSlider from './ClientSlider';
import { clients, settings, langData } from './Clients-data';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';

function Clients() {
  const arrowRef = useRef<Slider>(null);
  const { mainColor, lang } = useMyContext();
  const { title, subTitle } = selectLang(langData, lang);
  let clientDisc = [];
  clientDisc = clients.map((item) => (
    <ClientSlider item={item} key={item.name} />
  ));

  const { ref: ServicesRef, inView } = useInView();
  const [view, setView] = useState('');
  useEffect(() => {
    if (inView) setView('visible');
  }, [inView]);
  return (
    <Container
      id="Clients"
      color={mainColor}
      ref={ServicesRef}
      className={view}
    >
      <Span color={mainColor}>{title}</Span>
      <H1Title>{subTitle}</H1Title>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons color={mainColor}>
          <button
            type="button"
            onClick={() =>
              arrowRef.current ? arrowRef.current.slickPrev() : null
            }
          >
            <IoIosArrowBack />
          </button>
          <button
            type="button"
            onClick={() =>
              arrowRef.current ? arrowRef.current.slickNext() : null
            }
          >
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
}
export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 0 auto;
  padding: 4rem 0;
  opacity: 0;
  transform: translateY(30%);
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }
  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }
  .slick-dots li button:before {
    content: ' ';
  }
  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: ${({ theme }) => theme.colors.background};
    padding: 0.1rem;
    margin: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }
  .slick-dots li.slick-active button {
    background: ${({ color }) => color};
    width: 15px;
  }
  .slick-dots li {
    margin: 0;
  }
  &.visible {
    animation: animateClients 1s forwards;
  }
  @keyframes animateClients {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;
  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: ${({ color }) => color};
    cursor: pointer;
    font-size: 1.3rem;
  }
  @media (max-width: calc(${({ theme }) => theme.size.xs} + 30px)) {
    display: none;
  }
`;
