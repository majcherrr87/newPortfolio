import styled from 'styled-components';
import { BsArrowUpSquare } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import footer from '@/components/Footer/Footer';

export const ScrollTop = ({ isVisibleMenu }) => {
  const [isVisibleBtnScroll, setIsVisibleBtnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200
        ? setIsVisibleBtnScroll(true)
        : setIsVisibleBtnScroll(false);
    });
  }, []);

  return (
    <Top
      href="#home"
      isVisibleBtnScroll={isVisibleBtnScroll}
      onClick={() => isVisibleMenu(false)}
    >
      {BsArrowUpSquare()}
    </Top>
  );
};
const Top = styled.a`
  position: fixed;
  right: 1rem;
  bottom: ${({ isVisibleBtnScroll }) => (isVisibleBtnScroll ? '5rem' : '-20%')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.colors.container_color_alt};
  border-radius: 0.4rem;
  z-index: ${({ theme }) => theme.index.z_tooltip};
  transition: 0.4s;
  visibility: ${({ isVisibleBtnScroll }) =>
    isVisibleBtnScroll ? 'visible' : 'hidden'};
  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text_color};
  }
`;
