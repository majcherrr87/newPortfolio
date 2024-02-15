import avatar1 from '../../assets/img/avatar/avatar1.webp';
import avatar2 from '../../assets/img/avatar/avatar2.webp';
import avatar3 from '../../assets/img/avatar/avatar3.webp';
import avatar4 from '../../assets/img/avatar/avatar4.webp';

export type ClientsDatatype = {
  name: string;
  position: string;
  imgUrl: string;
  start: number;
  disc: string;
};

export const clients: ClientsDatatype[] = [
  {
    name: 'Pawel Tatarata',
    position: 'Tester oprogramowania w Craftware',
    imgUrl: avatar2,
    start: 3,
    disc: 'Solidny partner, polecam',
  },
  {
    name: 'Andrzej Tracz',
    position: 'Specjalista ds. automatyki w Caterpillar Inc.',
    imgUrl: avatar3,
    start: 4,
    disc: 'Rzetelny i dokładny deweloper, polecam współpracę',
  },
  {
    name: 'Rafał Pośpiech',
    position: 'RTR Specialist w firmie Bystronic',
    imgUrl: avatar4,
    start: 5,
    disc: 'Bardzo polecam Wszystkim! Doskonała współpraca!',
  },
  {
    name: 'Ilona Majcher',
    position: 'PMO / CANAL+ Poland / Project Portfolio Management ',
    imgUrl: avatar1,
    start: 2,
    disc: 'Polecam! Solidna osoba :)',
  },
];

type LangDataType = {
  lang: string;
  title: string;
  subTitle: string;
};

export const langData: LangDataType[] = [
  {
    lang: 'POL',
    title: 'Świadectwa',
    subTitle: 'Zobacz opinie',
  },
  {
    lang: 'ENG',
    title: 'Testimonials',
    subTitle: 'What Client Say',
  },
];

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
