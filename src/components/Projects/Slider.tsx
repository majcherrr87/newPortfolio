import Slider from 'react-slick';
import Project from './Project';
import { data } from './Slider-data';

const settings = {
  className: 'center',
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const SliderComp = () => {
  console.log(data);
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <Project item={item} key={index} />
      ))}
    </Slider>
  );
};
export default SliderComp;
