import styled from 'styled-components';
import { H1Footer, H1Title } from '../../assets/smallComponent';
import { MdAlternateEmail } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';
import { BsFacebook, BsSlack } from 'react-icons/bs';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z03hcrd',
        'template_x5pb2kr',
        form.current,
        'BG1c2DDI-NkQ3m80R'
      )
      .then(() => {
        setMessage('✅ Wiadomość została wysłana');
      });
    setTimeout(() => {
      setMessage('');
    }, 5000);

    e.target.reset();
  };

  return (
    <Container id="footer">
      <Profile>
        <H1Title>Portfolio</H1Title>

        <div className="address">
          <H1Footer>Address:</H1Footer>
          <p>1030 Southwood Dr San Luis Obispo, California(CA), 93401</p>
        </div>

        <div className="links">
          <H1Footer>Contact me diractly:</H1Footer>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <a href="tel:513354369">513354369</a>
          </div>
          <div>
            <span>
              <HiOutlineMailOpen />
            </span>
            <a href="mailto:majcherrr87@gmail.com">majcherrr87@gmail.com</a>
          </div>
        </div>

        <div className="profiles">
          <H1Footer>Check my profiles</H1Footer>
          <div className="icons">
            <span>
              <a href="#">
                <AiFillGithub />
              </a>
            </span>
            <span>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </span>
            <span>
              <a href="#">
                <BsFacebook />
              </a>
            </span>
            <span>
              <a href="#">
                <BsSlack />
              </a>
            </span>
          </div>
        </div>

        <ArrowUp>
          <a href="#home">
            <AiOutlineArrowUp />
          </a>
        </ArrowUp>
      </Profile>

      <Form>
        <form ref={form} onSubmit={sendEmail}>
          <div className="name">
            <span>
              <CgProfile />
            </span>
            <input type="text" name="name" placeholder="Fullname..." required />
          </div>
          <div className="email">
            <span>
              <MdAlternateEmail />
            </span>
            <input type="email" name="email" placeholder="Email..." required />
          </div>
          <div className="name">
            <span className="messageIcon">
              <FiMail />
            </span>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message..."
              required
              minLength="10"
              maxLength="500"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          <span className="message">{message}</span>
        </form>
      </Form>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.ld};
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  position: relative;
  .address {
    p {
      width: 60%;
      @media (max-width: ${({ theme }) => theme.size.sm}) {
        width: 100%;
      }
    }
  }
  .links {
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      a {
        text-decoration: none;
        color: lightgray;

        :hover {
          color: ${({ theme }) => theme.colors.lightGrey};
        }
      }
    }
  }
  .icons {
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #000;
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
      border-radius: 50px;
      :hover {
        background-color: ${({ theme }) => theme.colors.main};
      }
      a {
        margin-top: 0.2rem;
        color: #fff;
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    position: absolute;
    right: 1rem;
    bottom: 0rem;
  }
`;
const Form = styled.div`
  flex: 1;
  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    div {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 1rem;
      }
    }
    button {
      cursor: pointer;
      width: 5rem;
      height: 1.8rem;
      background-color: ${({ theme }) => theme.colors.main};
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);

      :hover {
        filter: drop-shadow(0px 6px 5px #01be9551);
      }
    }
    span.message {
      margin-left: 1rem;
    }
  }
`;
