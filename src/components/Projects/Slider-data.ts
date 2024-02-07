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
    txtTitleSecond: 'Projecty',
    disc: 'To jest polski text. Amet commodi fuga quas. Aspernatur autem consequatur esse, facere modi molestiae nihil officia quas qui ratione repudiandae, tempora vero vitae? Magni, voluptas!',
  },
  {
    id: 2,
    lang: 'ENG',
    txtTitleFirst: 'Recent',
    txtTitleSecond: 'Projects',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi fuga quas. Aspernatur autem consequatur esse, facere modi molestiae nihil officia quas qui ratione repudiandae, tempora vero vitae? Magni, voluptas!',
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
