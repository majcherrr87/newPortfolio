import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GiEarthAmerica } from 'react-icons/gi';
import { FaLinkedinIn } from 'react-icons/fa';
import profileImg from '../../assets/img/Adrian.png';
import { useReducer } from 'react';
import { initialState, reducer } from '../../utils/reducer/reducer';

const ProfileComponent = () => {
  const [{ mainColor }, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <Texts color={mainColor}>
        <h4>
          Hello <span>I`am</span>
        </h4>
        <h1>Adrian Majcher</h1>
        <h3>Junior web developer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          ad, aliquid at dolor laudantium natus optio possimus quisquam suscipit
          tenetur.
        </p>
        <button>Let`s talk</button>
        <Social>
          <p>Check out my</p>
          <div className="social-icons">
            <span>
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </span>
            <span>
              <a href="#">
                <GiEarthAmerica />
              </a>
            </span>
            <span>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </Social>
      </Texts>
      <Profile>
        <img loading="lazy" src={profileImg} alt="profile" />
      </Profile>
    </Container>
  );
};
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
const Texts = styled.div`
  flex: 1;

  h4 {
    padding: 1rem 0;
    font-weight: 500;
    span {
      color: ${({ color }: string) => color};
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.main};
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
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.main};
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(
      0px 10px 10px ${({ theme }) => theme.colors.main + '51'}
    );

    :hover {
      filter: drop-shadow(
        0px 10px 10px ${({ theme }) => theme.colors.main + '70'}
      );
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
      background-color: ${({ theme }) => theme.colors.main};
      position: relative;
      transition: all 400ms ease-in-out;
      :hover {
        transform: rotate(360deg) scale(1.6);
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
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: calc(${({ theme }) => theme.size.md} - 50px)) {
      width: 20rem;
    }
    @media (max-width: calc(${({ theme }) => theme.size.sm} + 40px)) {
      width: 18rem;
    }
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      width: 100%;
    }
    :hover {
      transform: translateY(-10px);
    }
  }
`;
