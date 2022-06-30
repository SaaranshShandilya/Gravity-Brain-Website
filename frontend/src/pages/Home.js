import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import Sliders from '../components/Sliders'
import pb from '../images/project_based_learning_icon.svg'
import stl from '../images/stem_learning_curriculam_icon.svg'
import ce from '../images/created_experts_icon.svg'
import Slider2 from '../components/Slider2'
import NET from 'vanta/dist/vanta.net.min.js'
import lt from '../images/kid_journey_timeline.svg'
import Slider_photo from '../components/SliderPhoto'
import ci from '../images/classes_icon.png'
import stc from '../images/special_steam_classes_icon.png'
import mtc from '../images/master_classes_icon.png'
import sp from '../images/special_projects_icon.png'
import ad1 from '../advisors/1.png'
import ad2 from '../advisors/2.png'
import ad3 from '../advisors/3.png'
import ad4 from '../advisors/4.png'
import ad5 from '../advisors/5.png'
import ed1 from '../Educators/1.png'
import ed2 from '../Educators/2.png'
import ed3 from '../Educators/3.png'
import ed4 from '../Educators/4.png'
import google from '../images/google_logo_with_white_bg.svg'
import iitd from '../images/iit_delhi_logo_with_white_bg.svg'
import iitb from '../images/iit_bombay_logo_with_white_bg.svg'
import microsoft from '../images/microsoft_logo_with_white_bg.svg'
import spacex from '../images/spaceX-logo_with_white_bg.svg'
import bits from '../images/bits_logo_with_white_bg.svg'
import tesla from '../images/tesla_motors_logo_with_white_bg.svg'
import su from '../images/stanford_university_logo_with_white_bg.svg'
import mit from '../images/mit_logo_with_white_bg.svg'
import t1 from '../thumbnail/webinare_video_them1.png'
import t2 from '../thumbnail/webinare_video_them2.png'
import t3 from '../thumbnail/webinare_video_them3.png'
import t4 from '../thumbnail/webinare_video_them4.png'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
const Home = () => {

    

        const vantaRef = useRef()
        useEffect(() =>{
            const vantaEffect = NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 100.00,
                minWidth: 100.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x1c1c1e,
                points: 3.00,
    
            })
            window.scroll(0,0)
            return () =>{
                if(vantaEffect) vantaEffect.destroy()
            }
        },[])
  return (
    <div>
        <Sliders/>
        {/* nurture program section start */}
        <div> 
        <h1 data-aos="fade-in" className='text-center lg:my-16 my-10 pb-10 lg:text-5xl text-3xl font-bold '>
            <span className='text-blue-600'>Nurture Program</span> Key Offerings
        </h1>
        <div data-aos="fade-in" className='lg:grid lg:grid-cols-3 text-center lg:mx-32 mx-4 gap-8 space-y-24 lg:space-y-0 pb-12'>
            <div className='border-2 relative rounded-lg shadow-xl hover:border-blue-600 hover:shadow-blue-600'>
                <img src={pb} alt='pbicon'  className='mx-auto h-36 -mt-16' ></img>
                <h1 className='pt-8 pb-8 text-2xl font-semibold'>Project Based Learning</h1>
                <p className='text-lg  pb-6'>We make children into super children</p>
            </div>
            <div data-aos="fade-in" className='border-2 relative rounded-lg shadow-xl hover:border-blue-600 hover:shadow-blue-600'>
                <img src={stl} alt='pbicon'  className='mx-auto h-36 -mt-16' ></img>
                <h1 className='pt-8 pb-8 mx-2 text-2xl font-semibold '>STEM learning aligned Curriculum</h1>
                <p className='text-lg mx-2 pb-6'>Unleash your child's hidden talents today</p>
            </div>
            <div data-aos="fade-in" className='border-2 relative rounded-lg shadow-xl hover:border-blue-600 hover:shadow-blue-600'>
                <img src={ce} alt='pbicon'  className='mx-auto h-36 -mt-16' ></img>
                <h1 className='pt-8 pb-8 text-2xl font-semibold'>Created by Experts(HBS, IIT,IIM)</h1>
                <p className='text-lg  pb-6'>Cheering for the leaders of tomorrow</p>
            </div>
        </div>
        <div className='text-center'>
        <Link to='/olympiad2022'><button className='text-white bg-blue-600 px-4 py-2 mb-6 rounded text-lg '>Enroll Now</button></Link>
        </div>
        </div>
        {/* nurture program section end */}
        <div ref={vantaRef}>
            <h1 className='text-white text-3xl mx-2 lg:text-5xl pb-8 text-center pt-8 font-bold'>Advantages of <span className='text-blue-600 '>Project</span> Based <span className='text-blue-600'>Learning</span></h1>
            <Slider2/>
        </div>
        <div>
            <h1 className='my-10 font-bold lg:text-5xl text-3xl text-center'><span className='text-blue-600'>Glimpse of our</span> Projects</h1>
            <Slider_photo/>
        </div>
        <div className=' pb-24'>
            <h1 className='text-3xl lg:text-5xl font-bold text-center my-12'>The <span className='text-blue-600'>Learning</span> Journey</h1>
            <img src={lt} alt='Lifetime'></img>
        </div>
        <div>
            <h1 className='lg:text-5xl text-3xl font-bold text-center my-6 lg:my-12'>A Year at <span className='text-blue-600'>Gravity Brain</span></h1>
            <div className='grid lg:grid-cols-4 grid-cols-2  mx-auto text-center'>
                <div className='mt-6'>
                    <img src={ci} alt='classes_icon' className='mx-auto h-36'></img>
                    <p className='mt-4 text-3xl font-bold text-blue-600'>104+</p>
                    <p className='text-xl text-blue-600'>Classes</p>
                </div>
                <div className='mt-6'>
                    <img src={stc} alt='classes_icon' className='mx-auto h-36'></img>
                    <p className='mt-4 text-3xl font-bold text-blue-600'>12+</p>
                    <p className='text-xl text-blue-600'>Special STEAM Classes</p>
                </div>
                <div className='mt-6'>
                    <img src={mtc} alt='classes_icon' className='mx-auto h-36'></img>
                    <p className='mt-4 text-3xl font-bold text-blue-600'>4+</p>
                    <p className='text-xl text-blue-600'>Master Classes</p>
                </div>
                <div className='mt-6'>
                    <img src={sp} alt='classes_icon' className='mx-auto h-36'></img>
                    <p className='mt-4 text-3xl font-bold text-blue-600'>15+</p>
                    <p className='text-xl text-blue-600'>Special Projects</p>
                </div>
            </div>
        </div>
        <div>
            <p className='text-lg text-center mt-12 py-4 px-2 lg:mx-20 rounded-lg bg-orange-100'>Connect with our expert to learn more <span className='font-bold'>- WhatsApp - Phone - Email</span></p>
        </div>
        <div>
            <p className='text-center lg:text-4xl mx-2 text-2xl my-8 font-bold'>Our advisors come from all around the world </p>
            <p className='my-8 mx-2 text-center text-lg'>Here's a glimpse of some the minds at work behind helping your child learn better</p>
            <div className='lg:grid lg:grid-cols-5 lg:mx-20 mx-12 lg:space-y-0 space-y-8 gap-8'>
                <div className='text-center border-2 rounded-xl py-4 '>
                    <img src={ad1} alt='advisor1' className='h-36 mx-auto'></img>
                    <p className='my-3 text-blue-500 text-xl font-bold'>Saugata Banerji</p>
                    <p>PhD INSEAD, MBA,</p>
                    <p>University of Massachusetts</p>
                </div>
                <div className='text-center border-2 rounded-xl py-4 '>
                    <img src={ad2} alt='advisor1' className='h-36 mx-auto'></img>
                    <p className='my-3 text-blue-500 text-xl font-bold'>Prateek Chakraborty</p>
                    <p>Founder,</p>
                    <p>Bidgly.com</p>
                </div>
                <div className='text-center border-2 rounded-xl py-4 '>
                    <img src={ad3} alt='advisor1' className='h-36 mx-auto'></img>
                    <p className='my-3 text-blue-500 text-xl font-bold'>Sanjeev Kumar Jha</p>
                    <p>Solution Architect,</p>
                    <p>Amazon</p>
                </div>
                <div className='text-center border-2 rounded-xl py-4 '>
                    <img src={ad4} alt='advisor1' className='h-36 mx-auto'></img>
                    <p className='my-3 text-blue-500 text-xl font-bold'>Ronit Kar Gupta</p>
                    <p>Dassault Aviation</p>
                </div>
                <div className='text-center border-2 rounded-xl py-4 '>
                    <img src={ad5} alt='advisor1' className='h-36 mx-auto'></img>
                    <p className='my-3 text-blue-500 text-xl font-bold'>Abhinav Tripathi</p>
                    <p>Intel Corporation</p>
                </div>
            </div>
            <p className='text-center lg:text-lg text-md mx-4 mt-6 lg:mx-40'>Gravity Brain projects are not aligned to academic curriculum. They are carefully curated and aligned to the child's age, specific mental capabilities and executed under the watchful supervision of global educators, early learning educational experts and global leaders.</p>
        </div>

        <div className='mt-12 text-center'>
            <p className='lg:text-5xl text-3xl font-bold mt-12 mb-6 '>Our Top <span className='text-blue-500'>Educators</span></p>
            <p className='my-5 lg:text-lg text-md mx-4'>Not just the expert panel - even our educators are masters in their fields from some of the most prestigious global schools and specially trained in this form of teaching:</p>
            <div className='lg:grid lg:grid-cols-4 lg:mx-20 mx-12 lg:space-y-0 space-y-8 gap-8'>
                <div className='text-center border-2 rounded-xl py-4 '>
                    <img src={ed1} alt='advisor1' className='h-36 mx-auto'></img>
                    <p className='my-3 text-blue-500 text-xl font-bold'>VASU PARWATE</p>
                    <p className='mx-6'>Energy Science, IIT Bombay, Blockchain Analyst, Auxesis, Market Analyst, Future First</p>
                </div>
                <div className='text-center border-2 rounded-xl py-4 '>
                    <img src={ed2} alt='advisor1' className='h-36 mx-auto'></img>
                    <p className='my-3 text-blue-500 text-xl font-bold'>RUCHI</p>
                    <p className='mx-6'>P.H.D IIT Delhi, Senior Project Scientist - IIT Delhi, Research Associate - IIT Kanpur</p>
                </div>
                <div className='text-center border-2 rounded-xl py-4 '>
                    <img src={ed3} alt='advisor1' className='h-36 mx-auto'></img>
                    <p className='my-3 text-blue-500 text-xl font-bold'>TIRTHESH KOTKAR</p>
                    <p className='mx-6'>Cognitive Science - IIT Delhi, Associate Data Engineer, InfostretchResearch Assistant - IIT Delhi</p>
                    
                </div>
                <div className='text-center border-2 rounded-xl py-4 '>
                    <img src={ed4} alt='advisor1' className='h-36 mx-auto'></img>
                    <p className='my-3 text-blue-500 text-xl font-bold'>ANANT RAJ</p>
                    <p className='mx-6'>Maths & CSE - BITS Pilani, Amazon</p>
                </div>
                
            </div>
        </div>

        <div>
            <p className='lg:text-5xl text-3xl mx-2 my-12 text-center font-bold'>Top contributors for <span className='text-blue-500'>Nurture Program</span></p>
            <div className='grid grid-cols-5 lg:gap-4 gap-2 lg:mx-44'>
                <div>
                    <img src={google}></img> 
                </div>
                <div>
                    <img src={iitd}></img> 
                </div>
                <div>
                    <img src={iitb}></img> 
                </div>
                <div>
                    <img src={microsoft}></img> 
                </div>
                <div>
                    <img src={spacex}></img> 
                </div>
            </div>
            <div className='grid grid-cols-4 lg:gap-4 gap-2 lg:mx-44'>
                <div>
                    <img className='h-40 ' src={bits}></img> 
                </div>
                <div>
                    <img className='h-40' src={tesla}></img> 
                </div>
                <div>
                    <img className='h-40' src={su}></img> 
                </div>
                <div>
                    <img className='h-40 ' src={mit}></img> 
                </div>
            </div>
        </div>

        <div className='-ml-2' style={{backgroundImage: `url(${process.env.PUBLIC_URL+ "/webinar_videos_bg.svg"})`,}}>
            <h1 className='py-12  text-center lg:text-5xl text-3xl font-bold'>Webinar Videos</h1>
            <div className='lg:grid lg:grid-cols-4 lg:space-y-0 space-y-4 pb-12 gap-4 mx-20'>
                <div>
                    <img src={t1} className='rounded-lg mx-auto h-60'></img>
                </div>
                <div>
                    <img src={t2} className='rounded-lg mx-auto h-60'></img>
                </div>
                <div>
                    <img src={t3} className='rounded-lg mx-auto h-60'></img>
                </div>
                <div>
                    <img src={t4} className='rounded-lg mx-auto h-60'></img>
                </div>
            </div>
        </div>

        <div>
            <Faq/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home