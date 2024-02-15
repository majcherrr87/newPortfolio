import styled from 'styled-components';
import profileImg from '../../assets/img/home/Adrian.webp';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import { headerData } from './header-data';
import IconBxlReact from '../../assets/svg/react';
import IconStyledComponents from '../../assets/svg/styled';
import IconTypescript from '../../assets/svg/typescript';
import IconRedux from '../../assets/svg/redux';
import IconJavascript from '../../assets/svg/javascript';
import { socialProfile } from '../Footer/footer-data';
import { VisitCounter } from '../VisitCounter/VisitCounter';

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
  } = selectLang(headerData, lang);

  return (
    <Container>
      <Texts color={mainColor}>
        <h4>
          {txtHello}
          <span>{txtIam}</span>
        </h4>
        <h1>Adrian Majcher</h1>
        <h3>Junior web developer</h3>
        <p>{txtLong}</p>
        <CvButtons>
          <a href={linkBtnShowCv} target="_blank" rel="noopener noreferrer">
            <button type="button">{txtBtnShowCv}</button>
          </a>
          <a href={linkBtnDownloadCv} download>
            <button type="button">{txtBtnDownloadCv}</button>
          </a>
        </CvButtons>

        <Social color={mainColor}>
          <p>{txtSocial}</p>
          <div className="social-icons">
            {socialProfile.map(({ icon, href, id }) => (
              <span key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {icon()}
                </a>
              </span>
            ))}
          </div>
        </Social>
        <VisitCounter />
      </Texts>
      <Profile color={mainColor}>
        <img id="my" loading="lazy" src={profileImg} alt="Adrian Majcher" />
        <IconBxlReact id="react" />
        <IconStyledComponents id="styled" />
        <IconTypescript id="typescript" />
        <IconRedux id="redux" />
        <IconJavascript />
      </Profile>
    </Container>
  );
}
export default ProfileComponent;

const Container = styled.div`
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
      :hover {
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

  img#my {
    width: 16rem;
    filter: drop-shadow(0px 10px 10px ${({ color }) => color + 70});
    transition: transform 400ms ease-in-out;
    z-index: 2;

    @media (max-width: calc(${({ theme }) => theme.size.md} - 50px)) {
      //790
      width: 14rem;
    }
    @media (max-width: calc(${({ theme }) => theme.size.sm} + 40px)) {
      //680
      width: 13rem;
    }
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      width: 40%;
    }

    :hover {
      transform: translateY(-10px);
    }
  }
`;
const CvButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
