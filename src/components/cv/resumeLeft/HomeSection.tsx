import styled from 'styled-components';
import { useEffect, useState } from 'react';
import CvLink from '../../../assets/pdf/CV-POL_AdrianMajcher.pdf';
import { BiEnvelope, BiPhone } from 'react-icons/bi';
import { TbWorldWww } from 'react-icons/tb';
import { SwitchMode } from './SwitchMode';
import { DownloadFdf } from './downloadFdf';
import { Link } from 'react-router-dom';

export const HomeSection = ({ switchTheme }) => {
  const [userAvatar, setUserAvatar] = useState('');
  const [userWww, setUserWww] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/users/majcherrr87`);
      const data = await res.json();
      setUserAvatar(data.avatar_url);
      setUserWww(data.blog);
    };
    return () => fetchData();
  }, []);

  return (
    <CVResumeLeft>
      <CVSection id="home">
        <HomeContainer>
          <HomeData>
            <img src={userAvatar} alt="Adrian Majcher" />
            <h1>Adrian Majcher</h1>
            <h3>Web developer</h3>
            <BtnDownload>
              <a download href={CvLink}>
                download
              </a>
            </BtnDownload>
          </HomeData>
          <HomeAddress>
            <a target="_blank" href={'http://www.' + userWww}>
              {TbWorldWww()} {userWww}
            </a>
            <Link to="mailto:majcherrr87@gmail.com">
              {BiEnvelope()} majcherrr87@gmail.com
            </Link>
            <Link to="tel:513354369">{BiPhone()} 513-354-369</Link>
          </HomeAddress>
        </HomeContainer>
        <SwitchMode switchTheme={switchTheme} />
        <DownloadFdf />
      </CVSection>
    </CVResumeLeft>
  );
};

const CVResumeLeft = styled.div``;
const CVSection = styled.section`
  position: relative;
`;
const HomeContainer = styled.div`
  display: grid;
  gap: 3rem;
  padding: 1.5rem;
  @media screen and (min-width: 968px) {
    gap: 1.5rem;
  }
`;
const HomeData = styled.div`
  display: grid;
  gap: 0.5rem;
  text-align: center;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    justify-self: center;
    margin-bottom: ${({ theme }) => theme.margins.mb_1};
  }
  h1 {
    font-size: ${({ theme }) => theme.font.h1_font_size};
  }
  h3 {
    font-size: ${({ theme }) => theme.font.normal_font_size};
    margin-bottom: ${({ theme }) => theme.margins.mb_1};
  }
`;
const HomeAddress = styled.div`
  display: grid;
  gap: 1rem;
  a {
    display: flex;
    color: ${({ theme }) => theme.colors.text_color};
    align-items: center;
    font-size: ${({ theme }) => theme.font.small_font_size};
  }
  svg {
    font-size: 1.2rem;
    margin-right: 0.25rem;
  }
`;
const BtnDownload = styled.div`
  a {
    display: inline-block;
    border: 2px solid ${({ theme }) => theme.colors.text_color};
    color: ${({ theme }) => theme.colors.title_color};
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    transition: 0.3s;
    font-weight: ${({ theme }) => theme.font.font_weight_medium};
    margin-top: ${({ theme }) => theme.margins.mb_3};
    :hover {
      background-color: ${({ theme }) => theme.colors.text_color};
      color: ${({ theme }) => theme.colors.container_color};
    }
  }
  @media screen and (min-width: 968px) {
    display: none;
  }
`;
