import { useContext } from 'react';
import styled from 'styled-components';
import { CvContext } from '../context/cvContext';

export function ChangeLang() {
  const context = useContext(CvContext);

  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }

  const { language, setLanguage } = context;

  const handleSwichLanguage = () => {
    setLanguage(language === 'english' ? 'polish' : 'english');
  };

  return (
    <a href="#home" onClick={handleSwichLanguage}>
      <Icon>{language === 'english' ? 'PL' : 'EN'}</Icon>
    </a>
  );
}

const Icon = styled.span`
  display: none;
  position: absolute;
  top: 6rem;
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
