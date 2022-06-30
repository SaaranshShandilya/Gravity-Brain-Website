import React, {useState} from 'react'

const Faq = () => {

    const[show1, setShow1] = useState(false);
    const[show2, setShow2] = useState(false);
    const[show3, setShow3] = useState(false);
    const[show4, setShow4] = useState(false);
    const[show5, setShow5] = useState(false);
    const[show6, setShow6] = useState(false);
    const[show7, setShow7] = useState(false);
    const[show8, setShow8] = useState(false);
    const[show9, setShow9] = useState(false);

  return (
    <div className='bg-cyan-200 pb-12'>
        <h1 className='text-center pt-12 font-bold mx-2 lg:text-5xl text-3xl'>Frequently <span className='text-blue-600'>Asked</span>  Questions For</h1>
        <p className='lg:text-3xl text-2xl mx-2 mt-2 font-semibold text-center'>Gravity Brain (GB)</p>
        <div className='lg:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='lg:text-2xl text-xl mx-2 font-semibold flex items-center justify-between my-3'>Are Gravity Brain's programs applicable for all classes?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow1(!show1)}}>View More</button></span></h1>
            {show1 && (<p className='mt-2 lg:text-xl text-lg mx-2'>Gravity Brain's learning programs are for students from Class 3 to Class 10.</p>)}
        </div>
        <div className='lg:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='lg:text-2xl text-xl mx-2 font-semibold flex items-center justify-between my-3'>How do I get started?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow2(!show2)}}>View More</button></span></h1>
            {show2 && (<p className='mt-2 lg:text-xl text-lg mx-2 '>You can connect with our team at +91 8201926612 or reach out to us at info@gravitybrain.com. for more details. Check out our courses at </p>)}
        </div>
        <div className='lg:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='lg:text-2xl text-xl mx-2 font-semibold flex items-center justify-between my-3'>What are the courses offered at Gravity Brain?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow3(!show3)}}>View More</button></span></h1>
            {show3 && (<p className='mt-2 lg:text-xl text-lg mx-2'>We offer project-based learning for students of Class 3 to Class 10 led by Global Educators from top universities and companies. You can know more about it here </p>)}
        </div>
        <div className='lg:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='lg:text-2xl text-xl mx-2 font-semibold flex items-center justify-between my-3'>What languages are the learning programs available in?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow4(!show4)}}>View More</button></span></h1>
            {show4 && (<p className='mt-2 lg:text-xl text-lg mx-2'>The programs are available in English</p>)}
        </div>
        <div className='lg:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='lg:text-2xl text-xl mx-2 font-semibold flex items-center justify-between my-3'>Do learning programs need the internet?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow5(!show5)}}>View More</button></span></h1>
            {show5 && (<p className='mt-2 lg:text-xl text-lg mx-2'>Yes. Internet connection is required to access the program.</p>)}
        </div>
        <div className='lg:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='lg:text-2xl text-xl mx-2 font-semibold flex items-center justify-between my-3'>Is the program available on a free/paid basis?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow6(!show6)}}>View More</button></span></h1>
            {show6 && (<p className='mt-2 lg:text-xl text-lg mx-2'>Gravitybrain's nurture program is an invite-only program. A student can only avail it through olympiad or invite basis only.</p>)}
        </div>
        <div className='lg:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='lg:text-2xl text-xl mx-2 font-semibold flex items-center justify-between my-3'>How do I access my courses at Gravity brain?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow7(!show7)}}>View More</button></span></h1>
            {show7 && (<p className='mt-2 lg:text-xl text-lg mx-2'>After successfully enrolling in the nurture program, you can access everything at our portal using your username and password.</p>)}
        </div>
        <div className='lg:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='lg:text-2xl text-xl mx-2 font-semibold flex items-center justify-between my-3'>I am not able to access my course/content at GravityBrain?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow8(!show8)}}>View More</button></span></h1>
            {show8 && (<p className='mt-2 lg:text-xl text-lg mx-2'>If you are facing any issues with the access, please call our helpline number +91 8210926612 or mail us at info@gravitybrain.com.</p>)}
        </div>
        <div className='lg:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='lg:text-2xl text-xl mx-2 font-semibold flex items-center justify-between my-3'>Do you provide customer support?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow9(!show9)}}>View More</button></span></h1>
            {show9 && (<p className='mt-2 lg:text-xl text-lg mx-2'>Yes, you can reach out to us at +91 8210926612 or mail us at info@gravitybrain.com.</p>)}
        </div>
    </div>
  )
}


export default Faq