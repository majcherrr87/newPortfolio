import { BiMoon, BiSun } from 'react-icons/bi';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { CvContext } from '../context/cvContext';

export function SwitchMode() {
  const [isMoonIcon, setIsMoonIcon] = useState(true);
  const context = useContext(CvContext);
  if (!context)
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  const { isDarkTheme, setIsDarkTheme } = context;

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme);
    setIsMoonIcon((prev) => !prev);
  };

  return (
    <Switch onClick={handleClick}>{isMoonIcon ? BiMoon({}) : BiSun({})}</Switch>
  );
}

const Switch = styled.span`
  position: absolute;
  right: 2rem;
  top: 2.2rem;
  display: flex;
  color: ${({ theme }) => theme.colors.text_color};
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.title_color};
  }
`;
