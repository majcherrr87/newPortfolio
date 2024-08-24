import { useState } from 'react';
import styled from 'styled-components';
import { BiGridAlt } from 'react-icons/bi';
import { navData } from './nav-data';
import { ScrollTop } from './ScrollTop';

export function Nav() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const handleClick = () => {
    setIsToggleMenu((prev) => !prev);
  };

  return (
    <CvNav>
      <a href="#home">Adrian Majcher</a>
      <CvNavMenu toggleMenu={isToggleMenu}>
        <ul>
          {navData[1].item.map(({ link, name, icon }) => {
            return (
              <li role="none" key={name} onClick={handleClick}>
                <a href={`${link}`}>
                  {icon({ title: name })} {name}
                </a>
              </li>
            );
          })}
        </ul>
      </CvNavMenu>
      <CvNavToggle onClick={handleClick} className="nav_toggle">
        <BiGridAlt />
      </CvNavToggle>
      <ScrollTop isVisibleMenu={setIsToggleMenu} />
    </CvNav>
  );
}
const CvNav = styled.nav`
  max-width: 968px;
  width: calc(100% - 3rem);
  margin-left: ${({ theme }) => theme.margins.mb_3};
  margin-right: ${({ theme }) => theme.margins.mb_3};
  height: ${({ theme }) => theme.header_height};
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.title_color};
    font-weight: ${({ theme }) => theme.font.font_weight_medium};
  }
  @media screen and (min-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const CvNavMenu = styled.div<{ toggleMenu: boolean }>`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    @media screen and (max-width: 320px) {
      & {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem 0.5rem;
      }
    }
    li {
      text-align: center;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: ${({ theme }) => theme.font.smaller_font_size};
        color: ${({ theme }) => theme.colors.title_color};
        font-weight: ${({ theme }) => theme.font.font_weight_medium};
        :hover {
          color: ${({ theme }) => theme.colors.text_color_light};
        }
        svg {
          font-size: 1.2rem;
          margin-bottom: ${({ theme }) => theme.margins.mb_1};
        }
      }
    }
  }

  @media screen and (max-width: 968px) {
    position: fixed;
    bottom: ${({ toggleMenu }) => (toggleMenu ? '3rem' : '-100%')};
    left: 0;
    width: 100%;
    padding: 2rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.body_color};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 1rem 1rem 0 0;
    z-index: ${({ theme }) => theme.index.z_back};
    transition: 0.5s;
  }
`;
const CvNavToggle = styled.div`
  color: ${({ theme }) => theme.colors.title_color};
  font-weight: ${({ theme }) => theme.font.font_weight_medium};
  font-size: 1.2rem;
  cursor: pointer;
`;
