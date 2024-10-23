import { useContext } from 'react';
import styled from 'styled-components';
import { FaRegFilePdf } from 'react-icons/fa6';
import { CvContext } from '../context/cvContext';
import CvEng from '../../../assets/pdf/Adrian_Majcher_CV_ENG.pdf';
import CvPol from '../../../assets/pdf/Adrian_Majcher_CV_POL.pdf';

export function Download() {
  const context = useContext(CvContext);

  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }

  const { language } = context;
  const cv = language === 'english' ? CvEng : CvPol;

  return (
    <a href={cv} download>
      <Icon>{FaRegFilePdf({})}</Icon>
    </a>
  );
}

const Icon = styled.span`
  display: none;
  position: absolute;
  top: 2.2rem;
  left: 2rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text_color};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.title_color};
  }
  @media screen and (min-width: 968px) {
    display: inline-block;
  }
`;
