import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import profileImg from '../../assets/img/home/Adrian.webp';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import { headerData } from './header-data';
import IconBxlReact from '../../assets/svg/react';
import IconTypescript from '../../assets/svg/typescript';
import IconJavascript from '../../assets/svg/javascript';
import { socialProfile } from '../Footer/footer-data';
import { VisitCounter } from '../VisitCounter/VisitCounter';
import IconNext from '../../assets/svg/nextjs';

function ProfileComponent() {
  const { mainColor, lang } = useMyContext();
  const {
    txtHello,
    txtIam,
    txtLong,
    txtBtnShowCv,
    txtBtnDownloadCv,
    txtSocial,
    linkBtnShowCv,
    linkBtnDownloadCv,
  } = selectLang(headerData, lang) ?? headerData[0];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const icons = gsap.utils.toArray<HTMLSpanElement>('.social-icons span');
    const texts = containerRef.current.querySelector('[data-section="texts"]');
    const profile = containerRef.current.querySelector(
      '[data-section="profile"]'
    );
    const svg = gsap.utils.toArray<HTMLSpanElement>(
      '[data-section="profile"] svg'
    );

    if (!texts || !profile || icons.length === 0 || svg.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 },
      });

      tl.from(
        texts,
        {
          x: -1000,
          opacity: 0,
          force3D: true,
        },
        0.5
      )
        .from(
          profile,
          {
            x: 500,
            opacity: 0,
            force3D: true,
          },
          0.5
        )
        .from(
          svg,
          {
            opacity: 0,

            stagger: 0.2,
            ease: 'back.out(1.7)',
            force3D: true,
          },
          2
        );
    }, containerRef);

    // eslint-disable-next-line consistent-return
    return () => ctx.revert();
  }, []);

  return (
    <Container ref={containerRef}>
      <Texts color={mainColor} data-section="texts">
        <h4>
          {txtHello}
          <span>{txtIam}</span>
        </h4>
        <h1>Adrian Majcher</h1>
        <h3>Web developer</h3>
        <p>{txtLong}</p>
        <CvButtons>
          <a href={linkBtnShowCv} target="_blank" rel="noopener noreferrer">
            <button type="button">{txtBtnShowCv}</button>
          </a>
          <a href={linkBtnDownloadCv} download>
            <button type="button">{txtBtnDownloadCv}</button>
          </a>
        </CvButtons>

        <Social color={mainColor} data-section="social">
          <p>{txtSocial}</p>
          <div className="social-icons">
            {socialProfile.map(({ icon, href, id, ariaLabel }) => (
              <span key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                >
                  {icon({})}
                </a>
              </span>
            ))}
          </div>
        </Social>
        <VisitCounter />
      </Texts>
      <Profile color={mainColor} data-section="profile">
        <img id="my" loading="lazy" src={profileImg} alt="Adrian Majcher" />
        <IconBxlReact />
        <IconTypescript />
        <IconNext />
        <IconJavascript />
      </Profile>
    </Container>
  );
}
export default ProfileComponent;

const Container = styled.article`
  display: flex;
  gap: 2rem;
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 6rem auto;

  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
const Texts = styled.div<{ color: string }>`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;

  h4 {
    padding: 1rem 0;
    font-weight: 500;
    span {
      color: ${({ color }) => color};
    }
  }

  h1 {
    color: ${({ color }) => color};
    font-size: 2rem;
    font-family: 'Secular One', sans-serif;
    letter-spacing: 2px;
  }

  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }

  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 1.5rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: ${({ color }) => color};
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px ${({ color }) => color + 51});

    :hover {
      filter: drop-shadow(0px 10px 10px ${({ color }) => color + 70});
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.9rem;
    @media (max-width: calc(${({ theme }) => theme.size.sm} + 50px)) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      background-color: ${({ color }) => color};
      position: relative;
      transition: transform 200ms ease-in-out;
      &:hover {
        transform: scale(1.6);
      }
      a {
        color: #fff;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
const Profile = styled.div<{ color: string }>`
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;
  align-items: center;

  img#my {
    width: 16rem;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0px 10px 10px ${({ color }) => color + 70});
    transition: all 400ms ease-in-out;
    z-index: 2;

    margin-top: 10px;
    max-height: 350px;

    @media (max-width: ${({ theme }) => theme.size.md}) {
      width: 14rem;
    }
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      width: 12rem;
    }
    @media (max-width: 550px) {
      width: 80%;
      max-width: 12rem;
    }

    :hover {
      transform: translateY(-10px) scale(1.02);
      filter: drop-shadow(0px 15px 15px ${({ color }) => color + 90});
    }
  }

  svg {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2));
    transition: transform 300ms ease;

    &:hover {
      transform: scale(1.2);
    }

    @media (max-width: ${({ theme }) => theme.size.sm}) {
      width: 2rem;
      height: 2rem;
    }
  }

  svg:nth-of-type(1) {
    top: 10%;
    right: 20%;
    width: 4rem;
    height: 4rem;

    @media (max-width: ${({ theme }) => theme.size.sm}) {
      top: 5%;
      right: 15%;
    }
  }

  svg:nth-of-type(2) {
    top: 30%;
    right: 10%;

    @media (max-width: ${({ theme }) => theme.size.sm}) {
      top: 25%;
      right: 5%;
    }
  }

  svg:nth-of-type(3) {
    bottom: 30%;
    right: 10%;
    width: 6rem;
    height: 4rem;
    z-index: 3;

    @media (max-width: ${({ theme }) => theme.size.sm}) {
      bottom: 10%;
      right: 0%;
    }
  }

  svg:nth-of-type(4) {
    bottom: 10%;
    right: 0;

    @media (max-width: ${({ theme }) => theme.size.sm}) {
      bottom: 5%;
      right: 15%;
    }
  }
`;
const CvButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
