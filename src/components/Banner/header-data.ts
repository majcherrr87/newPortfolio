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
    txtLong: `Jestem początkującym programistą JavaScript z pasją do tworzenia estetycznych i funkcjonalnych stron internetowych. Mam doświadczenie w pracy z narzędziami frontendowymi, takimi jak React, TypeScript, SASS i Styled Components. Obecnie uczę się Angulara. W wolnym czasie rozwijam swoje umiejętności, ucząc się nowych technologii`,
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
    txtLong: `I am a beginner JavaScript developer with a passion for creating aesthetic and functional websites. I have experience working with frontend tools such as React, TypeScript, SASS, and Styled Components. I am currently learning Angular. In my free time, I enhance my skills by learning new technologies.`,
    txtBtnShowCv: 'Watch CV',
    linkBtnShowCv: '/cv',
    txtBtnDownloadCv: 'Download CV',
    linkBtnDownloadCv: Cv_eng,
    txtSocial: 'Check out my',
  },
];
