import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { AiOutlineLike } from 'react-icons/ai';
import { GoGear } from 'react-icons/go';
import styled from 'styled-components';
import theme from '../../assets/theme';
import POL from '../../assets/img/home/img-pol.webp';
import ENG from '../../assets/img/home/img-gbr.webp';
import Portfolio from '../../assets/svg/portfolio';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import { headerData } from './header-data';

function Header() {
  const [btnOption, setBtnOption] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const { changeMainColor, mainColor, lang, changeLang } = useMyContext();
  const colors = theme.colors.selectColors;
  const { linkName, linkId, txtOptionalMenu } =
    selectLang(headerData, lang) ?? headerData[0];

  const logoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current || !containerRef.current) return;

    // Zapisujemy oryginalną pozycję logo
    // const containerRect = containerRef.current.getBoundingClientRect();
    const logoRect = logoRef.current.getBoundingClientRect();

    // Obliczamy przesunięcie do środka ekranu
    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;

    const moveToX = windowCenterX - (logoRect.left + logoRect.width / 2);
    const moveToY = windowCenterY - (logoRect.top + logoRect.height / 2);

    // Tworzymy timeline animacji
    const timeline = gsap.timeline();

    // Przesuwamy logo na środek
    timeline.fromTo(
      logoRef.current,
      { x: moveToX, y: moveToY, scale: 2 },
      { x: 0, y: 0, scale: 1, delay: 4, duration: 1.2, ease: 'power3.inOut' }
    );

    // eslint-disable-next-line consistent-return
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <Container ref={containerRef} bar={hamburgerMenu} id="Home">
      <Logo color={mainColor} ref={logoRef}>
        <span>
          <AiOutlineLike />
        </span>

        <Portfolio data-section="logo" />
      </Logo>
      <Nav bar={hamburgerMenu}>
        {linkName.map((link: string, index: number) => {
          return (
            <span key={link}>
              <a
                href={`#${linkId[index]}`}
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
              >
                {link}
              </a>
            </span>
          );
        })}
        <span role="none" onClick={() => setBtnOption(!btnOption)}>
          <GoGear />
        </span>
        <Options btnOption={btnOption}>
          <div className="container-color-list">
            <img
              role="none"
              src={lang === 'POL' ? ENG : POL}
              alt="lang"
              onClick={() => changeLang()}
            />
            <h4>{txtOptionalMenu}</h4>
            <div className="color-list">
              {colors.map((color) => {
                return (
                  <DivColor
                    key={color}
                    item={color}
                    onClick={() => changeMainColor(color)}
                  />
                );
              })}
            </div>
          </div>
        </Options>
      </Nav>
      <div
        role="none"
        className="bars"
        onClick={() => setHamburgerMenu(!hamburgerMenu)}
      >
        <div className="bar" />
      </div>
    </Container>
  );
}
export default Header;

const DivColor = styled.div<{ item: string }>`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ item }) => item};
`;

const Container = styled.header<{ bar: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${(props) => props.theme.size.ld};
  width: 80%;
  gap: 2rem;
  margin: 0 auto;
  padding: 1.5rem 0;
  @media (max-width: calc(${(props) => props.theme.size.md} - 80px)) {
    width: 90%;
  }

  .bars {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.size.sm}) {
    .bars {
      width: 40px;
      height: 40px;
      position: fixed;
      background: ${(props) => props.theme.colors.lightGrey + 80};
      right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      z-index: ${(props) => props.theme.position[10]};

      .bar {
        position: fixed;
        width: 2rem;
        height: 2px;
        background-color: ${({ bar }) => (bar ? 'transparent' : '#fff')};
        transition: all 100ms ease-in-out;

        :before,
        :after {
          content: '';
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
          transition: all 400ms ease-in-out;
        }

        :before {
          transform: ${({ bar }) =>
            bar ? 'rotate(45deg)' : 'translateY(10px)'};
        }

        :after {
          transform: ${({ bar }) =>
            bar ? 'rotate(-45deg)' : 'translateY(-10px)'};
        }
      }
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.8rem;
    color: ${({ color }) => color};
  }
`;
const Nav = styled.nav<{ bar: boolean }>`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(6, auto);
  @media (max-width: ${(props) => props.theme.size.sm}) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.lightGrey};
    inset: 0;
    justify-content: flex-start;
    align-items: center;
    padding-top: ${({ bar }) => (bar ? '3rem' : '0')};
    gap: 2rem;
    font-size: 2rem;
    font-weight: 700;
    height: ${({ bar }) => (bar ? '100vh' : '0')};
    transition: all 400ms ease-in-out;
    overflow: hidden;
    z-index: ${(props) => props.theme.position[9]};
    @media screen and (max-height: 720px) {
      gap: 1rem;
    }
  }

  span {
    color: #fff;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 400;
      position: relative;
      :before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: top;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: bottom;
      }
      :hover {
        opacity: 0.7;
      }
    }
  }
  span:last-of-type {
    font-size: 1.3rem;
    position: relative;
    cursor: pointer;
  }
`;
const Options = styled.div<{ btnOption: boolean }>`
  z-index: ${(props) => props.theme.position[5]};
  grid-column-start: -3;
  @media (max-width: calc(${(props) => props.theme.size.md} - 80px)) {
    //790
    grid-column-start: -4;
  }
  @media (max-width: ${(props) => props.theme.size.sm}) {
    //790
    transform: translateX(-5rem);
  }
  .container-color-list {
    text-align: center;
    color: white;
    position: absolute;
    padding: 1rem;
    background: #191923;
    visibility: ${({ btnOption }) => (btnOption ? 'visible' : 'hidden')};

    .color-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-top: 0.5rem;
    }
    img {
      cursor: pointer;
    }
  }
`;
