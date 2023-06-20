export type ProjectDataType = {
  img: string;
  disc: string;
};

export const data: ProjectDataType[] = [
  {
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis culpa cum',
  },
  {
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis culpa cum',
  },
  {
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis culpa cum',
  },
  {
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis culpa cum',
  },
  {
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis culpa cum',
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
  initialSlide: 0,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
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
