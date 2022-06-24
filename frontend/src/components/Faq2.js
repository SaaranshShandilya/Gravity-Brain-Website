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
    const [show9, setShow9] = useState(false);
    const[show10, setShow10] = useState(false);
    const[show11, setShow11] = useState(false);
    const[show12, setShow12] = useState(false);
    const[show13, setShow13] = useState(false);
    const[show14, setShow14] = useState(false);
    const[show15, setShow15] = useState(false);

  return (
    <div className='bg-cyan-200 pb-12'>
        <h1 className='text-center pt-12 font-bold text-4xl '>Frequently <span className='text-blue-600'>Asked</span>  Questions For</h1>
        <p className='text-2xl mt-2 font-semibold text-center'>Gravity Brain National Olympiad (GBNO)</p>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>What are the benefits for students appearing for the Gravitybrain Olympiad?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow1(!show1)}}>View More</button></span></h1>
            {show1 && (<p className='mt-2 text-xl '>1. Chance to earn 100% scholarship at Gravity Brain ( Course worth 1.5 Lac. ) <br></br>
2. Benchmark themselves against other students at All-India Level <br></br>
3. Chance to earn 100% scholarship at Gravity Brain ( Course worth 1.5 Lac. ) <br></br>
4. Learn from STEM Global Educators ( World's 1st Project based learning platform for 8-15 Year Kids )</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>How can I apply for the Olympiad?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow2(!show2)}}>View More</button></span></h1>
            {show2 && (<p className='mt-2 text-xl '>You can apply online on this website by filling out our Registration Form.<br></br>
The registration details and confirmation will be shared with you by our team.</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>What is the test pattern and syllabus?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow3(!show3)}}>View More</button></span></h1>
            {show3 && (<p className='mt-2 text-xl '><span className='font-semibold'>Test Duration:</span> 60 minutes <br></br>
<span className='font-semibold'>Total Number of Questions:</span> 40<br></br>
<span className='font-semibold'>Mode:</span> Proctored based Online Test<br></br>
<span className='font-semibold'>Syllabus:</span> STEAM ( Science, Technology, Engineering, Art & Mathematics )</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>What is the marking scheme for the Olympiad?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow4(!show4)}}>View More</button></span></h1>
            {show4 && (<p className='mt-2 text-xl '>+1 for each right answer and there is no negative marking.</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>What are the rewards for students?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow5(!show5)}}>View More</button></span></h1>
            {show5 && (<p className='mt-2 text-xl '>Scholarships will be rewarded based on your performance in the Olympiad.<br></br>
Top 200 students will be selected for our exclusive nurture program led by top STEM Global Educators.<br></br>
Scholarships worth: 2.8 Cr.<br></br>
Top performers of the nurture program will get a chance to visit CERN, Switzerland/Tesla Gigafactory</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>How to take the Olympiad?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow6(!show6)}}>View More</button></span></h1>
            {show6 && (<p className='mt-2 text-xl '>The Olympiad has to be taken online. The test will be conducted on 20th Aug 2022, on our test platform.<br></br>
To log in, students must fill up their login credentials and take the test.<br></br>
Students must submit only when they have attempted the complete test.</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>What are the system requirements for the Olympiad?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow7(!show7)}}>View More</button></span></h1>
            {show7 && (<p className='mt-2 text-xl '>The Olympiad can be taken on any laptop, desktop, mobile phone or tablet. For best user experience, we recommend using a modern browser.<br></br>
Please check your device, browser and internet connection to make sure you get a hassle free test experience.</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>Can I reschedule my Olympiad?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow8(!show8)}}>View More</button></span></h1>
            {show8 && (<p className='mt-2 text-xl '>Sorry, but you cannot reschedule the Olympiad. But you can always appear for our next Olympiad!</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>When will the results be announced?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow9(!show9)}}>View More</button></span></h1>
            {show9 && (<p className='mt-2 text-xl '>Results for the Olympiad will be announced on 15th Sep 2022 on Gravitybrain's official website (www.gravitybrain.org.)</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>Dos and Don'ts on Laptop/Desktop<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow10(!show10)}}>View More</button></span></h1>
            {show10 && (<p className='mt-2 text-xl '>1. Do not exit Full Screen (the test will end).<br></br>
2. Do not press Esc (the test will end).<br></br>
3. Alt+TAB will also end the test.<br></br>
4. Test your internet connection and browser on your device before starting the test.<br></br>
5. Do not change the browser on the device (the test will end).<br></br>
6. Do not click on any pop-up on your system not related to the Olympiad. All your activities will be tracked during the test.<br></br>
7. Do not refresh your page.</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>Dos and Don'ts on Mobile/Tablet<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow11(!show11)}}>View More</button></span></h1>
            {show11 && (<p className='mt-2 text-xl '>1. Do not press Home/Back (the test will end).<br></br>
2. Do not switch OFF the device (the test will end).<br></br>
3. Please ensure that your device's memory and storage are sufficient, battery is charged, and the internet is functioning well, before the test starts.<br></br>
4. Do not change the browser on the device (the test will end).<br></br>
5. Do not click on any pop up on your system not related to the Olympiad. All your activities will be tracked during the test.<br></br>
6. Do not refresh your page.</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>Can I appear for the Olympiad in any other language?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow12(!show12)}}>View More</button></span></h1>
            {show12 && (<p className='mt-2 text-xl '>For now, the Olympiad will be available only in English.</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>When can I avail my Scholarships<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow13(!show13)}}>View More</button></span></h1>
            {show13 && (<p className='mt-2 text-xl '>The winners will receive update about nurture program schedule after 15th Sep 2022</p>)}
        </div>
        <div className='md:mx-20 mx-4 py-4 px-4 mt-6  bg-white rounded-xl '>
            <h1 className='text-2xl font-semibold flex items-center justify-between my-3'>What if I have a further query?<span><button className='focus:text-blue-600 font-bold' onClick={()=>{setShow14(!show14)}}>View More</button></span></h1>
            {show14 && (<p className='mt-2 text-xl '>You can always reach out and send your queries to info@gravitybrain.com.</p>)}
        </div>
    </div>
  )
}


export default Faq