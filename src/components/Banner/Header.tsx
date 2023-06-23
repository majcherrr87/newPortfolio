import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';

const Header = () => {
  const [bar, setBar] = useState(false);

  return (
    <Container bar={bar} id="home">
      <Logo>
        <span>
          <AiOutlineLike />
        </span>
        <h1>Portfolio</h1>
      </Logo>
      <Nav bar={bar}>
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#service">Services</a>
        </span>
        <span>
          <a href="#project">Project</a>
        </span>
        <span>
          <a href="#clients">Testimonials</a>
        </span>
        <span>
          <a href="#footer">Portfolio</a>
        </span>
      </Nav>
      <div className="bars">
        <div className="bar" onClick={() => setBar(!bar)}></div>
      </div>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.size.ld};
  width: 80%;
  gap: 2rem;
  margin: 0 auto;
  padding: 1.5rem 0;
  @media (max-width: calc(${({ theme }) => theme.size.md} - 80px)) {
    width: 90%;
  }
  .bars {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: ${({ theme }) => theme.position[10]};
      .bar {
        position: absolute;
        width: 100%;
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
    color: ${({ theme }) => theme.colors.main};
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
const Nav = styled.div`
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.main};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
    font-weight: 700;
    height: ${({ bar }) => (bar ? '100vh' : '0')};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: ${({ theme }) => theme.position[9]};
  }
  span {
    margin-left: 1rem;
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
`;
