import Cv_pol from '../../assets/pdf/CV-POL_AdrianMajcher.pdf';
import Cv_eng from '../../assets/pdf/CV-ENG_AdrianMajcher.pdf';

interface dataType {
  id: number;
  lang: string;
  linkName: string[];
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

const data: dataType[] = [
  {
    id: 1,
    lang: 'POL',
    linkName: ['Start', 'Kursy', 'Projecty', 'Klienci', 'Kontakt'],
    linkId: ['Home', 'Service', 'Project', 'Clients', 'Contact'],
    txtOptionalMenu: 'Wybierz kolor',
    txtHello: 'Cześć ',
    txtIam: 'Jestem',
    txtLong: `Tu będzie jakiś dłuższy text, teraz tak tylko na próbę coś tam napisałem żeby było. Tralala lalal kot lisa to naklepszy kot na świecie`,
    txtBtnShowCv: 'Zobacz CV',
    linkBtnShowCv: '/cv',
    txtBtnDownloadCv: 'Pobierz CV',
    linkBtnDownloadCv: Cv_pol,
    txtSocial: 'Sprawdź mnie',
  },
  {
    id: 2,
    lang: 'ENG',
    linkName: ['Home', 'Service', 'Project', 'Clients', 'Contact'],
    linkId: ['Home', 'Service', 'Project', 'Clients', 'Contact'],
    txtOptionalMenu: 'Select Color',
    txtHello: 'Hello ',
    txtIam: 'I`am',
    txtLong: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          ad, aliquid at dolor laudantium natus optio possimus quisquam suscipit
          tenetur.`,
    txtBtnShowCv: 'Watch CV',
    linkBtnShowCv: '/cv',
    txtBtnDownloadCv: 'Download CV',
    linkBtnDownloadCv: Cv_eng,
    txtSocial: 'Check out my',
  },
];
export default data;
