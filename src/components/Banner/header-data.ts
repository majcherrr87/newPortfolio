import Cv_pol from '../../assets/pdf/CV-POL_AdrianMajcher.pdf';
import Cv_eng from '../../assets/pdf/CV-ENG_AdrianMajcher.pdf';

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
    txtLong: `Jestem początkującym programistą JavaScript z pasją do tworzenia pięknych i funkcjonalnych stron internetowych. Posiadam doświadczenie w pracy z różnymi narzędziami frontendu, takimi jak React, TypeScript, HTML i CSS. W wolnym czasie lubię tworzyć gry webowe i uczyć się nowych technologii.`,
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
    txtLong: `I am a beginner JavaScript developer with a passion for creating beautiful and functional web pages. I have experience working with various frontend tools, such as React, TypeScript, HTML, and CSS. In my free time, I enjoy creating web games and learning new technologies.`,
    txtBtnShowCv: 'Watch CV',
    linkBtnShowCv: '/cv',
    txtBtnDownloadCv: 'Download CV',
    linkBtnDownloadCv: Cv_eng,
    txtSocial: 'Check out my',
  },
];
