import Cv_pol from '../../assets/pdf/Adrian_Majcher_CV_POL.pdf';
import Cv_eng from '../../assets/pdf/Adrian_Majcher_CV_ENG.pdf';

export interface HeaderDataType {
  id: number;
  lang: string;
  linkName: string[];
  linkId: string[];
  txtOptionalMenu: string;
  txtHello: string;
  txtIam: string;
  txtLong: string;
  txtBtnShowCv: string;
  linkBtnShowCv: string;
  txtBtnDownloadCv: string;
  linkBtnDownloadCv: string;
  txtSocial: string;
}

export const headerData: HeaderDataType[] = [
  {
    id: 1,
    lang: 'POL',
    linkName: ['Start', 'Projecty', 'Kursy', 'Polecenia', 'Kontakt'],
    linkId: ['Home', 'Project', 'Service', 'Clients', 'Contact'],
    txtOptionalMenu: 'Wybierz kolor',
    txtHello: 'Cześć ',
    txtIam: 'Jestem',
    txtLong: `Jestem programistą JavaScript specjalizującym się w\u00A0tworzeniu nowoczesnych aplikacji webowych oraz mobilnych przy użyciu React, React Native, Next.js i\u00A0TypeScript. Na co dzień pracuję z\u00A0narzędziami takimi jak Zustand, Styled Components, TanStack Query oraz Firebase. Moje doświadczenie obejmuje również backend (Express, SQL), co pozwala mi patrzeć na projekty całościowo i\u00A0proponować kompleksowe rozwiązania. Lubię rozwiązywać złożone problemy technologiczne, a\u00A0w\u00A0pracy stawiam na jakość, wydajność i\u00A0dobrą komunikację.`,
    txtBtnShowCv: 'Zobacz CV',
    linkBtnShowCv: '/cv',
    txtBtnDownloadCv: 'Pobierz CV',
    linkBtnDownloadCv: Cv_pol,
    txtSocial: 'Sprawdź mnie',
  },
  {
    id: 2,
    lang: 'ENG',
    linkName: ['Home', 'Project', 'Service', 'Reviews', 'Contact'],
    linkId: ['Home', 'Project', 'Service', 'Clients', 'Contact'],
    txtOptionalMenu: 'Select Color',
    txtHello: 'Hello ',
    txtIam: 'I`am',
    txtLong: `I am a\u00A0JavaScript developer specializing in building modern web and mobile applications using React, React Native, Next.js, and TypeScript. On a\u00A0daily basis, I\u00A0work with tools such as Zustand, Styled Components, TanStack Query, and Firebase. I\u00A0also have experience with backend technologies like Express and SQL, which allows me to approach projects holistically and provide comprehensive solutions. I\u00A0enjoy solving complex technical challenges and prioritize quality, performance, and clear communication in my work.`,
    txtBtnShowCv: 'Watch CV',
    linkBtnShowCv: '/cv',
    txtBtnDownloadCv: 'Download CV',
    linkBtnDownloadCv: Cv_eng,
    txtSocial: 'Check out my',
  },
];
