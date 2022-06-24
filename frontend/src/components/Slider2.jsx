import React from 'react'
import ad1 from '../images/advantages_project_base_learning1.svg'
import ad2 from '../images/advantages_project_base_learning2.svg'
import ad3 from '../images/advantages_project_base_learning3.svg'
import Slider from 'react-slick'
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
const Slider2 = () => {

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
        <Slider {...settings} className='mt-12'>
          <div className='text-center mx-auto'>
            <img src={ad1} alt='advantages_project_base_learning1' className='h-72   mx-auto'></img>
            <h1 className='text-amber-600 text-4xl font-bold mt-12'>Empower Critical thinking</h1>
            <h1 className='text-blue-600 text-3xl font-semibold mt-2'>a continuous thinker in making</h1>
            <h1 className='text-white text-xl font-semibold mt-2 pb-7'>Unleash the power of conceptualising, apply, evaluate, access & adapt</h1>
          </div>
          <div className='text-center mx-auto'>
            <img src={ad2} alt='advantages_project_base_learning1' className='h-72   mx-auto'></img>
            <h1 className='text-amber-600 text-4xl font-bold mt-12'>Train for a future ready mind</h1>
            <h1 className='text-blue-600 text-3xl font-semibold mt-2'>a continuous thinker in making</h1>
            <h1 className='text-white text-xl font-semibold mt-2 pb-7'>Projects on STEM Based topics help young mind understand concepts and practical applications of Science, Tech, Engg. & Math in real life.</h1>
          </div>
          <div className='text-center mx-auto'>
            <img src={ad3} alt='advantages_project_base_learning1' className='h-72   mx-auto'></img>
            <h1 className='text-amber-600 text-4xl font-bold mt-12'>Make Kids Curious</h1>
            <h1 className='text-blue-600 text-3xl font-semibold mt-2'>a continuous thinker in making</h1>
            <h1 className='text-white text-xl font-semibold mt-2 pb-7'>Project-based learning makes kids curious.</h1>
          </div>
        </Slider>
    </div>
  )
}

export default Slider2