import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GiEarthAmerica } from 'react-icons/gi';
import { FaLinkedinIn } from 'react-icons/fa';

const ProfileComponent = () => {
  return (
    <Container>
      <Texts>
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
        <button>Let`s talk0</button>
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
        <img
          src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
          alt="profile"
        />
      </Profile>
    </Container>
  );
};
export default ProfileComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;

  h4 {
    padding: 1rem 0;
    font-weight: 500;

    span {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.green};
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
    background-color: ${({ theme }) => theme.colors.green};
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);

    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
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
    @media (max-width: 690px) {
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
      background-color: ${({ theme }) => theme.colors.green};
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
    @media (max-width: 790px) {
      width: 20rem;
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
    :hover {
      transform: translateY(-10px);
    }
  }
`;
//@TODO 31:52 https://www.youtube.com/watch?v=xbyoqfwCFE8&list=PLnrbKP8gLKSIGuvvBgBiBYkXzAxefzu4L&index=3&t=886s
