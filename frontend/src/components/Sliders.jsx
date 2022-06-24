import React from 'react'
import Slider from 'react-slick'
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
const Sliders = () => {
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
    <div>
      <Slider className='min-h-0 flex h-auto' {...settings}>
        <div>
          <Slide1/>
        </div>
        <div>
          <Slide2/>
        </div>
      </Slider>
    </div>
  )
}

export default Sliders