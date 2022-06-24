import React from 'react'
import { Link } from 'react-router-dom'

import im2 from '../images/slider_images2.png'
import Svg from './Svg'
const Slide2 = () => {

  return (
    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+ "/slider_bg.svg"})`,}}>  
    <div  >
        
    <div className='grid grid-cols-2 pt-4'>
        <div>
        <Link to='/'><Svg/></Link>
        </div>
        <div className='text-right'>
            <Link to='/olympiad2022'><button className='md:px-6 md:py-2 px-4 py-2 text-sm md:text-lg bg-white mt-6 mr-8 text-blue-500 font-semibold rounded-lg'>Olympiad 2022</button></Link>
        </div>
        </div>
    <div className='md:grid text-left md:text-left md:grid-cols-3'>
    <div className='order-last'><img src={im2} alt='background' className='md:h-[30rem] h-[14rem] mx-auto mt-6 md:mt-0  md:-ml-12 '></img></div>
      <div className='col-span-2'>
      <h1 className='text-white md:text-6xl text-3xl font-bold italic md:mt-12 mx-8 md:ml-28  '>An exclusive curriculum open</h1>   
       <p className='text-white md:text-5xl text-xl mt-2 md:mt-4 mx-8 md:ml-28 italic'>for a limited few</p>
       <p className='text-white md:mt-8 mt-4  md:ml-28 mx-8 md:text-xl text-lg'>Register in our 2022 Olympiad to participate in the evaluation process
         <p>top 100 students get a 100% scholarship worth INR 1.8 Crore</p></p>
            <div className='text-center md:text-left'>
            <Link to='/olympiad2022'><button className='px-8 py-4 bg-white mt-6 ml-4 md:ml-28 text-blue-600 font-semibold rounded-lg'>APPLY NOW</button> </Link>          
            </div>
      </div>
        </div>
       
    </div>
    <div className='bg-amber-500 md:mt-0 mt-8 pt-4 text-center mx-auto justify-center'>
    <p className='text-white font-bold text-3xl py-2 mx-2'>"Education is not the learning of facts, but the training of the mind to think"</p>
        <p className='text-white text-2xl py-4 pb-8 flex mx-auto font-semibold justify-center' >Albert Einstein</p>
    </div>
    </div>
    
  )
}

export default Slide2