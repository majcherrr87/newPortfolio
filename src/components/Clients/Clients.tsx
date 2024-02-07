import styled from 'styled-components';
import { H1Title, Span } from '../../assets/smallComponent';
import Slider from 'react-slick';
import ClientSlider from '../../components/Clients/ClientSlider';
import { clients, settings, langData } from './Clients-data';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRef } from 'react';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';

const Clients = () => {
  const arrowRef = useRef(null);
  const { mainColor, lang } = useMyContext();
  const { title, subTitle } = selectLang(langData, lang);
  let clientDisc = '';
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="Clients" color={mainColor}>
      <Span color={mainColor}>{title}</Span>
      <H1Title>{subTitle}</H1Title>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons color={mainColor}>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};
export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 0 auto;
  padding: 4rem 0;
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
