import React from 'react'
import Slider from 'react-slick';
import bc1 from '../images/1.png';
import bc2 from '../images/2.png';
import bc3 from '../images/3.png';
import bc4 from '../images/4.png';
import bc5 from '../images/5.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" , left:'90%', opacity: 0}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" ,backgroundColor:'red',  opacity:0}}
      onClick={onClick}
    />
  );
}

const SliderPhoto = () => {
  const settings = {
    infinite: true,
    dots:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: false,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "F59E0B",
          borderRadius: "10px",
          padding: "30px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    
  };
  return (
    <div className='lg:mx-32'>
      <Slider {...settings}>
        <div>
          <img src={bc1} alt='byte_car_1'></img>
        </div>
        <div>
          <img src={bc2} alt='byte_car_2'></img>
        </div>
        <div>
          <img src={bc3} alt='byte_car_3'></img>
        </div>
        <div>
          <img src={bc4} alt='byte_car_3'></img>
        </div>
        <div>
          <img src={bc5} alt='byte_car_3'></img>
        </div>
      </Slider>
    </div>
  )
}

export default SliderPhoto