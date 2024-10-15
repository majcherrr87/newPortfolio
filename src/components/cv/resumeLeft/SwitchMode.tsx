import { BiMoon, BiSun } from 'react-icons/bi';
import styled from 'styled-components';
import { useState } from 'react';
import { CvSwitchThemeType } from '../CvTypes';

export function SwitchMode({ switchTheme }: CvSwitchThemeType) {
  const [isMoonIcon, setIsMoonIcon] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = switchTheme;

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme);
    setIsMoonIcon((prev) => !prev);
  };
  const foo = false;
  if (foo) return null;

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
