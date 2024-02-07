import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsMessenger, BsWhatsapp } from 'react-icons/bs';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

export type FooterDataType = {
  id: number;
  lang: string;
  txtAddress: string;
  txtContact: string;
  txtProfile: string;
  txtFormName: string;
  txtFormEmail: string;
  txtFormMessage: string;
  txtFormSendMessage: string;
  langReCaptcha: string;
  txtFormBtn: string;
};

export const FooterData: FooterDataType[] = [
  {
    id: 1,
    lang: 'POL',
    txtAddress: 'Adres',
    txtContact: 'Skontaktuj się ze mną bezpośrednio',
    txtProfile: 'Sprawdź moje profile',
    txtFormName: 'Imię i nazwisko',
    txtFormEmail: 'Email',
    txtFormMessage: 'Wiadomość',
    txtFormSendMessage: '✅ Wiadomość została wysłana',
    langReCaptcha: 'pl',
    txtFormBtn: 'Wyślij',
  },
  {
    id: 2,
    lang: 'ENG',
    txtAddress: 'Address',
    txtContact: 'Contact me directly',
    txtProfile: 'Check my profiles',
    txtFormName: 'Fullname',
    txtFormEmail: 'Email',
    txtFormMessage: 'Message',
    txtFormSendMessage: '✅ The message has been sent',
    langReCaptcha: 'en',
    txtFormBtn: 'Submit',
  },
];

export const socialProfile = [
  {
    href: 'https://github.com/majcherrr87',
    icon: AiFillGithub,
  },
  {
    href: 'https://www.linkedin.com/in/adrian-majcher-46a529163/',
    icon: AiFillLinkedin,
  },
  {
    href: 'https://www.facebook.com/adrian.majcher.568',
    icon: BsFacebook,
  },
];
export const contactProfile = [
  {
    name: '513 354 369',
    address: 'tel:513354369',
    icon: FiPhoneCall,
  },
  {
    name: 'majcherrr87@gmail.com',
    address: 'mailto:majcherrr87@gmail.com',
    icon: FiMail,
  },
  {
    name: 'Messenger',
    address: 'https://m.me/adrian.majcher.568',
    icon: BsMessenger,
  },
  {
    name: 'WhatsApp',
    address: 'https://api.whatsapp.com/send?phone=513354369',
    icon: BsWhatsapp,
  },
];
