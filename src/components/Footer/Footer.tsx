import { useRef, useState, FormEvent, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { MdAlternateEmail } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { useMyContext } from '../../utils/context/ContextProvider';
import { H1Footer, H1Title } from '../../assets/smallComponent';
import { selectLang } from '../../utils/changeLang';
import {
  FooterData,
  socialProfile,
  FooterDataType,
  contactProfile,
} from './footer-data';

function Footer() {
  const { mainColor, lang } = useMyContext();
  const [message, setMessage] = useState('');
  const [captchaIsDone, setCaptchaIsDone] = useState(false);
  const key = import.meta.env.VITE_RECAPTCHA;
  const form = useRef<HTMLFormElement>(null);
  const {
    txtAddress,
    txtContact,
    txtProfile,
    txtFormName,
    txtFormEmail,
    txtFormMessage,
    txtFormBtn,
    txtFormSendMessage,
    langReCaptcha,
  }: FooterDataType = selectLang(FooterData, lang) ?? FooterData[0];

  const handleOnChange = () => {
    setCaptchaIsDone(true);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICEID;
    const templateID = import.meta.env.VITE_TEMPLATEID;
    const userID = import.meta.env.VITE_USERID;

    if (captchaIsDone && form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, userID).then(() => {
        setMessage(txtFormSendMessage);
      });
      setTimeout(() => {
        setMessage('');
        setCaptchaIsDone(false);
      }, 5000);

      e.currentTarget.reset();
    }
  };
  const { ref: FooterRef, inView } = useInView();
  const [view, setView] = useState('');
  useEffect(() => {
    if (inView) setView('visible');
  }, [inView]);

  return (
    <Container id="Contact" className={view}>
      <Profile color={mainColor} ref={FooterRef}>
        <H1Title>Portfolio</H1Title>

        <div className="address">
          <H1Footer>{txtAddress}:</H1Footer>
          <p>Warszawa ul. Kłobucka</p>
        </div>

        <div className="links">
          <H1Footer>{txtContact}:</H1Footer>
          {contactProfile.map(({ id, name, icon, address }) => (
            <div key={id}>
              <span>{icon({})}</span>
              <a href={address} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </div>
          ))}
        </div>

        <div className="profiles">
          <H1Footer>{txtProfile}</H1Footer>
          <div className="icons">
            {socialProfile.map(({ id, icon, href }) => (
              <span key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {icon({})}
                </a>
              </span>
            ))}
          </div>
        </div>

        <ArrowUp color={mainColor}>
          <a href="#Home">
            <AiOutlineArrowUp />
          </a>
        </ArrowUp>
      </Profile>

      <Form color={mainColor}>
        <form ref={form} onSubmit={sendEmail}>
          <div className="name">
            <span>
              <CgProfile />
            </span>
            <input type="text" name="name" placeholder={txtFormName} required />
          </div>
          <div className="email">
            <span>
              <MdAlternateEmail />
            </span>
            <input
              type="email"
              name="email"
              placeholder={txtFormEmail}
              required
            />
          </div>
          <div className="contents">
            <span className="messageIcon">
              <FiMail />
            </span>
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder={txtFormMessage}
              required
              minLength={10}
              maxLength={500}
            />
          </div>

          <ReCAPTCHA
            sitekey={key}
            hl={langReCaptcha}
            onChange={handleOnChange}
          />

          <button type="submit">{txtFormBtn}</button>
          <span className="message">{message}</span>
        </form>
      </Form>
    </Container>
  );
}
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
  &.visible > div:nth-child(1) {
    animation: animateFooterLeft 1s forwards;
  }
  &.visible > div:nth-child(2) {
    animation: animateFooterRight 1s forwards;
  }
  @keyframes animateFooterLeft {
    from {
      transform: translateX(100%);
    }
  }
  @keyframes animateFooterRight {
    from {
      transform: translateX(-100%);
    }
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
      align-items: flex-start;
      gap: 0.7rem;
      span {
        font-size: 1.3rem;
      }

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
      transition: all 200ms ease-in-out;
      :hover {
        background-color: ${({ color }) => color};
        transform: scale(1.5);
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
  background-color: ${({ color }) => color};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  transition: transform 200ms ease-in-out;
  :hover {
    transform: scale(1.3);
  }
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    position: absolute;
    right: 1rem;
    bottom: 0;
  }
`;
const Form = styled.div`
  flex: 1;
  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .contents {
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
      margin-top: 1rem;
      width: 5rem;
      height: 1.8rem;
      background-color: ${({ color }) => color};
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
