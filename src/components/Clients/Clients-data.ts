export type ClientsDatatype = {
  name: string;
  position: string;
  img_url: string;
  start: number;
  disc: string;
};

export const clients: ClientsDatatype[] = [
  {
    name: 'Ilona Majcher',
    position: 'web developer',
    img_url:
      'https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg',
    start: 3,
    disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aperiam beatae consectetur consequatur corporis eius expedita.`,
  },
  {
    name: 'Ilona Majcher',
    position: 'web developer',
    img_url:
      'https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg',
    start: 4,
    disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aperiam beatae consectetur consequatur corporis eius expedita.`,
  },
  {
    name: 'Ilona Majcher',
    position: 'web developer',
    img_url:
      'https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg',
    start: 5,
    disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aperiam beatae consectetur consequatur corporis eius expedita.`,
  },
  {
    name: 'Ilona Majcher',
    position: 'web developer',
    img_url:
      'https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg',
    start: 2,
    disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aperiam beatae consectetur consequatur corporis eius expedita.`,
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
