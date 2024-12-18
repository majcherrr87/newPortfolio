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
    txtLong: `Jestem programistą JavaScript, tworzę aplikacje internetowe w React i TypeScript, wykorzystując w codziennej pracy takie narzędzia jak Zustand, Styled Components, Redux oraz TanStack Query. Moje doświadczenie z narzędziami backendowymi, takimi jak Express, oraz znajomość SQL pozwalają mi lepiej rozumieć pełen cykl tworzenia aplikacji i zapewniać kompleksowe rozwiązania. Z pasją podchodzę do rozwiązywania złożonych problemów technologicznych oraz stale rozwijam swoje umiejętności, aby tworzyć wydajne i nowoczesne aplikacje webowe.`,
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
    txtLong: `I am a JavaScript developer, creating web applications in React and TypeScript, using tools such as Zustand, Styled Components, Redux, and TanStack Query in my daily work. My experience with backend tools like Express and my knowledge of SQL allow me to better understand the full application development cycle and provide comprehensive solutions. I approach solving complex technological problems with passion and continually develop my skills to create efficient and modern web applications.`,
    txtBtnShowCv: 'Watch CV',
    linkBtnShowCv: '/cv',
    txtBtnDownloadCv: 'Download CV',
    linkBtnDownloadCv: Cv_eng,
    txtSocial: 'Check out my',
  },
];
