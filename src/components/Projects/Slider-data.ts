export type ProjectDataType = {
  id: number;
  lang: string;
  txtTitleFirst: string;
  txtTitleSecond: string;
  disc: string;
};

export const data: ProjectDataType[] = [
  {
    id: 1,
    lang: 'POL',
    txtTitleFirst: 'Wszystkie',
    txtTitleSecond: 'Projekty',
    disc: 'Kliknij w opis aby dowiedzieć się więcej',
  },
  {
    id: 2,
    lang: 'ENG',
    txtTitleFirst: 'Recent',
    txtTitleSecond: 'Projects',
    disc: 'Click on the description to learn more',
  },
];
export const settings = {
  className: 'center',
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
