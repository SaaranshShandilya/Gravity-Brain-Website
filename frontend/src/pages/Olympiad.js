import React, { useState } from "react";
import axios from 'axios'
import Svg from "../components/Svg";
import { Link, useNavigate } from "react-router-dom";
import im3 from "../images/slider_images8.png";
import ss from "../images/scholarships_icon.png";
import mi from "../images/free_master_class_icon.png";
import pc from "../images/participation_certificate.png";
import eg from "../images/exciting_goodies_icon.png";
import age from '../images/age_group_icon.png';
import td from '../images/test_duration_icon.png';
import nq from '../images/number_of_questions_icon.png'; 
import tm from '../images/test_mode_online_test_icon.png';
import si from '../images/syllabus_icon.png'
import ls from '../images/learning_skills.png';
import ss1 from '../images/scholarship.png';
import ss2 from '../images/scholarship_offered.png'; 
import scores from '../images/scores_grade_card.png'
import web from '../images/webinars_master_classes.png'; 
import rf from '../images/registration_form_icon.png'; 
import prf from '../images/pay_registration_fee_icon.png'; 
import sr from '../images/successfully_registered_icon.png'; 
import facebook from '../images/facebook.png'; 
import whatsapp from '../images/whatsapp.png';
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import Footer from '../components/Footer';
import Faq2 from '../components/Faq2'
import aka from '../images/analyze_key_areas.svg';



const Olympiad = () => {
  const navigate = useNavigate()
  const [type, setType] = useState("text");
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [pnum, setPnum] = useState('')
  const [dob, setDob] = useState('')
  const [cls, setCls] = useState('')
  const [grade, setGrade] = useState('')
  const [school, setSchool] = useState('')
  const [state, setState] = useState('')
  const fullName = fname + ' ' + lname;


  const initPayment = (data) =>{
    
    
    const options = {
      key: 'rzp_test_zAPLZk0Iu645pS',
      amount: data.amount,
      currency: data.currency,
      name : 'GravityBrain',
      prefill:{
        name:fullName,
        contact: pnum,
        email: email
      },
      description:'Payment for GBNO Olympiad',
      order_id: data.id,
      handler: async(response) => {
        try{
          const verifyUrl = "http://localhost:5000/api/payment/verify/"
          const {data, status} = await axios.post(verifyUrl, {
            response: response,
            fname: fname,
            lname: lname,
            email: email,
            pnum: pnum,
            dob: dob,
            cls:cls,
            school:school,
            state:state
          })
          if(status === 200){
            const pdf = new window.jsPDF();
            pdf.setFontSize(36)
            pdf.text(20,20,'GravityBrain');
            pdf.setFontSize(20)
            pdf.text(20,40,`Name : ${fullName}`)
            pdf.text(20,50,`Email : ${email}`)
            pdf.text(20,60,`Phone Number : ${pnum}`)
            pdf.text(20,70,`Date of Birth : ${dob}`)
            pdf.text(20,80,`Class: ${cls}`)
            pdf.text(20,90,`Order ID: ${response.razorpay_order_id}`)
            pdf.text(20,100,`Payment ID: ${response.razorpay_payment_id}`)
            pdf.save();
            navigate.push('/')
          }

        }
        catch(err){
          console.log(err)
        }
      }
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }


  const handleSubmit = async (e) => {

    try{
      e.preventDefault()
      const orderUrl = "http://localhost:5000/api/payment/orders/"

      const { data } = await axios.post(orderUrl, { amount: 1299 });
      console.log(data);
      initPayment(data.data);

      console.log(fname,lname,email,pnum,dob,cls,grade,school,state)
      setFname('')
      setLname('')
      setEmail('')
      setPnum('')
      setDob('')
      setCls('')
      setGrade('')
      setSchool('')
      setState('')

    }
    catch(err){
      console.log(err)
    }
  
  }
  return (
    <div>
      <div
        className="pt-2 pb-4"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/slider_bg.svg"})`,
        }}
      >
        <div className="ml-4 -mb-2">
          <Link to="/">
            <Svg />
          </Link>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <div>
            <img src={im3} alt="" className="lg:h-[27rem] h-[20rem] mt-8 mb-4 mx-auto"></img>
            <div>
              <h1 className="lg:mt-12 mt-3 lg:ml-20 ml-4 text-white text-2xl lg:text-4xl font-bold">
                Gravity Brain National Olympiad (GBNO)
              </h1>
              <p className="lg:ml-20 ml-4 text-white text-xl lg:text-3xl font-semibold mt-3">
                India's Leading Aptitude Test for
              </p>
              <p className="text-xl px-2 py-4 w-32 text-center rounded-xl bg-amber-500 mt-2 font-semibold lg:ml-20 ml-4 ">
                Grade 3-10
              </p>
              <p className="text-xl px-2 py-4 w-80 text-center rounded-xl bg-amber-500 mt-2 font-semibold lg:ml-20 ml-4">
                Scholarships worth Rs. 2.5 Cr.
              </p>
              <p className="lg:ml-20 ml-4 mt-4 text-white text-lg mb-4 lg:text-xl">
                Test Date: <span className="text-amber-400">20th Aug 2022</span>{" "}
                at <span className="text-amber-400">10:00 AM</span> Class:{" "}
                <span className="text-amber-400"> 1-10</span>
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="px-8  py-8 bg-white  mx-3 lg:mx-0 lg:w-4/5 rounded-xl">
              <h1 className="font-bold text-3xl">
                Enroll for Scholarships Now!
              </h1>
              <div className="flex">
                <input
                  className="bg-gray-200 rounded-lg outline-none py-4 px-4 mt-4 placeholder-slate-800 w-full "
                  type="text"
                  placeholder="First Name"
                  required
                  value={fname}
                  onChange={(e)=>{setFname(e.target.value)}}
                ></input>
                <input
                  className="bg-gray-200 rounded-lg outline-none py-4 px-4 mt-4 placeholder-slate-800 w-full ml-4 "
                  type="text"
                  placeholder="Last Name"
                  required
                  value={lname}
                  onChange={(e)=>{setLname(e.target.value)}}
                ></input>
              </div>
              <input
                className="bg-gray-200 rounded-lg outline-none py-4 px-4 mt-4 placeholder-slate-800 w-full "
                type="email"
                placeholder="Email id"
                required
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              ></input>
              <input
                className="bg-gray-200 rounded-lg outline-none py-4 px-4 mt-4 placeholder-slate-800 w-full "
                type="tel"
                placeholder="Phone Number"
                required
                value={pnum}
                onChange={(e)=>{setPnum(e.target.value)}}
              ></input>
              <input
                className="bg-gray-200 rounded-lg outline-none py-4 px-4 mt-4 placeholder-slate-800 w-full "
                type={type}
                onFocus={() => setType("date")}
                onBlur={() => setType("text")}
                placeholder="I was born on (dd - mm - yyyy)"
                required
                value={dob}
                onChange={(e)=>{setDob(e.target.value)}}
              ></input>
              <select
                className="bg-gray-200 rounded-lg outline-none py-4 px-4 mt-4 placeholder-slate-800 w-full "
                type="text"
                name="class"
                required
                value={cls}
                onChange={(e)=>{setCls(e.target.value)}}
              >
                <option value="">Select Class</option>
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
                <option value="fourth">Fourth</option>
                <option value="fifth">Fifth</option>
                <option value="sixth">Sixth</option>
                <option value="seventh">Seventh</option>
                <option value="eight">Eigth</option>
                <option value="ninth">Ninth</option>
                <option value="tenth">Tenth</option>
              </select>
              
              <input
                className="bg-gray-200 rounded-lg outline-none py-4 px-4 mt-4 placeholder-slate-800 w-full "
                type="text"
                placeholder="Enter School Name"
                required
                value={school}
                onChange={(e)=>{setSchool(e.target.value)}}
              ></input>
              <select
                className="bg-gray-200 rounded-lg outline-none py-4 px-4 mt-4 placeholder-slate-800 w-full "
                type="text"
                name="class"
                required
                value={state}
                onChange={(e)=>{setState(e.target.value)}}
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              <h1 className='mt-8 font-bold'>Do you agree to the Terms and Conditions and Privacy Policy?</h1>
            <div className="relative z-0 w-full mb-6  group">
              <input
                type="checkbox"
                name="checkbox"
                placeholder=" "
                required
              />
              <label
                htmlFor="checkbox"
                className='ml-2 '
              >
                Yes, I agree to the <Link to='/terms' className='text-blue-600 underline underline-offset-4'>Terms & Conditions</Link> and <Link to='/privacy' className='text-blue-600 underline underline-offset-4'>Privacy Policy</Link>
              </label>
            </div>
            <h1 className='font-semibold text-blue-700'>Trouble in registration?</h1>
            <p>Contact: <a href='mailto:info@gravitybrain.org' className='text-blue-500'>info@gravitybrain.org</a></p>
            <button type='submit' className='py-4 px-10 bg-gray-500 text-white mt-4 rounded-xl text-xl'>APPLY NOW</button>
            </form>
          </div>
        </div>
      </div>
      <div>
      <div className="mt-12 mx-2 lg:mx-52">
          <h1 className="text-center lg:text-5xl text-3xl mb-4 font-bold">
            Why you should give <span className="text-blue-600">GBNO?</span>
          </h1>
          <div className="mt-10 grid grid-cols-2 text-center gap-20">
            <div>
              <img
                src={ss}
                alt="Scholarship icon"
                className="mx-auto h-28"
              ></img>
              <h1 className="font-bold text-2xl mt-2">Scholarships</h1>
              <p className='lg:mt-2 text-xl'>
                upto <span className="text-blue-600 font-bold">100% *</span>
              </p>
            </div>
            <div>
              <img
                src={mi}
                alt="Scholarship icon"
                className="mx-auto h-28"
              ></img>
              <h1 className="font-bold mt-2 text-2xl">Free Master Class</h1>
              <p className='lg:mt-2 text-xl'>
                of your <span className="text-blue-600 font-bold">choice *</span>
              </p>
            </div>
            <div>
              <img
                src={pc}
                alt="Scholarship icon"
                className="mx-auto h-28"
              ></img>
              <h1 className="font-bold mt-2 text-2xl">Participation Certificate</h1>
              <p className='lg:mt-2 text-xl'>
                for all <span className="text-blue-600 font-bold">participants</span>
              </p>
            </div>
            <div>
              <img
                src={eg}
                alt="Scholarship icon"
                className="mx-auto h-28"
              ></img>
              <h1 className="font-bold mt-2 text-2xl">Exciting Goodies</h1>
              <p className='text-xl lg:mt-2'>
                signed by our <span className="text-blue-600 font-bold">CEO *</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-center lg:text-5xl text-3xl font-bold mt-16 lg:mt-36'>About <span className='text-blue-600'>Gravity</span> Brain National <span className='text-blue-600'>Olympiad</span></h1>
        <div className='lg:grid lg:grid-cols-3  lg:mx-20 mx-2 space-y-4  lg:space-y-0 mb-4 gap-8 mt-8 text-center '>
          <div className='bg-blue-800 text-white py-4 rounded-xl'>
            <h1 className='font-bold mb-3'>Age Group</h1>
            <img src={age} alt='age group icon' className='mx-auto h-24'></img>
            <p className='mt-3'>8 - 15 years</p>
          </div>
          <div className='bg-amber-500 text-white py-4  rounded-xl'>
            <h1 className='font-bold mb-3'>Test Duration</h1>
            <img src={td} alt='age group icon' className='mx-auto h-24'></img>
            <p className='mt-3'>60 minutes</p>
          </div>
          <div className='bg-cyan-500 text-white py-4  rounded-xl'>
            <h1 className='font-bold mb-3'>Number of Questions</h1>
            <img src={nq} alt='age group icon' className='mx-auto h-24'></img>
            <p className='mt-3'>40 questions</p>
          </div>
          
        </div>
        <div className='lg:grid lg:grid-cols-2 mx-3 lg:mx-60 space-y-4 lg:space-y-0 text-center gap-8'>
        <div className='bg-violet-800 text-white py-4  rounded-xl'>
            <h1 className='font-bold mb-3'>Test Mode</h1>
            <img src={tm} alt='age group icon' className='mx-auto h-24'></img>
            <p className='mt-3'>Online</p>
          </div>
          <div className='bg-emerald-500 text-white py-4  rounded-xl'>
            <h1 className='font-bold mb-3'>Syllabus</h1>
            <img src={si} alt='age group icon' className='mx-auto h-24'></img>
            <p className='mt-3'>Steam</p>
          </div>
        </div>
      </div>

      
      <div>
        <h1 className='lg:text-5xl text-3xl mx-2 my-8 font-bold text-center mt-16 mb-10'>Why You Should take <span className='text-blue-600'>GBNO?</span></h1>
        <div className='lg:grid lg:grid-cols-3 lg:mx-20 space-y-4 lg:space-y-0 mx-4 text-center gap-8'>
          <div className='border rounded-xl py-5'>
            <img src={ls} alt='learning skills icon' className='mx-auto h-24'></img>
            <p className='mt-4 mx-4'>GBNO is aimed at testing a child's learning skills - analytical, interpretational, quantitative and verbal to help them achieve their actual learning potential.</p>
          </div>
          <div className='border rounded-xl py-5'>
            <img src={aka} alt='learning skills icon' className='mx-auto h-24'></img>
            <p className='mt-4 mx-4'>GBNO helps students to analyze their key areas of strengths, aptitude, personality and interests.</p>
          </div>
          <div className='border rounded-xl py-5'>
            <img src={ss1} alt='learning skills icon' className='mx-auto h-24'></img>
            <p className='mt-4 mx-4'>Students can win up to 100% scholarship* and stand a chance to be a part of our exclusive project-based nurture program led by top educators from MIT, ISB, IIT and professionals from Google, Amazon, Paytm etc.</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className='lg:text-5xl text-3xl font-bold text-center mt-16 mb-10'>GBNO <span className='text-blue-600'>Test</span> Highlights</h1>
        <div className='lg:grid lg:grid-cols-2 lg:mx-96 mx-4 lg:space-y-0 space-y-4 text-center gap-16'>
          <div className='border rounded-xl py-5'>
            <img src={ss2} alt='learning skills icon' className='mx-auto h-24'></img>
            <p className='mt-4 mx-4'>100%* Scholarship will be offered based on your performance in GBNO.</p>
          </div>
          <div className='border rounded-xl py-5'>
            <img src={scores} alt='learning skills icon' className='mx-auto h-24'></img>
            <p className='mt-4 mx-4'>Personalized scorecard with analysis, scores, performance indicators for students growth and development</p>
          </div>
          <div className='border rounded-xl py-5'>
            <img src={pc} alt='learning skills icon' className='mx-auto h-24'></img>
            <p className='mt-4 mx-4'>Certificate of Participation will be given to all students appearing for GBNO</p>
          </div>
          <div className='border rounded-xl py-5'>
            <img src={web} alt='learning skills icon' className='mx-auto h-24'></img>
            <p className='mt-4 mx-4'>Exclusive access to our top webinars and master classes led by our stellar faculty*</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-center lg:text-5xl text-3xl mx-2 font-bold mt-16'>How to register for <span className='text-blue-600'>GBNO?</span></h1>
        <div className='lg:grid lg:grid-cols-3 lg:space-y-0 space-y-3 mt-10'>
          <div>
          <img src={rf} alt='registration form icon ' className='mx-auto h-32'></img>
          <p className='text-center mt-4 text-blue-600'>Fill up the registration form for GBNO </p>
          </div>
          <div>
          <img src={prf} alt='registration form icon' className='mx-auto h-32'></img>
          <p className='text-center mt-4 text-blue-600'>Pay the registration fee</p>
          </div>
          <div>
          <img src={sr} alt='registration form icon' className='mx-auto h-32'></img>
          <p className='text-center mt-4 text-blue-600'>You have successfully registered for GNBO! </p>
          </div>
        </div>
      </div>

      
      <div>
        <p className='text-center flex px-3 justify-center items-center lg:space-x-4 space-x-2 bg-orange-100 py-4 mt-8 text-orange-500 font-semibold text-lg'>Share and invite your friends to write GBNO !
        <a href=''><img src={facebook} className='lg:h-10 h-8 lg:pl-4 pl-2' alt='facebook logo'></img></a>
        <a href=''><img src={whatsapp} className='lg:h-10 h-8' alt='whatssapp logo'></img></a>
        <a href=''><img src={instagram} className='lg:h-10 h-8' alt='insta logo'></img></a>
        <a href=''><img src={twitter} className='lg:h-10 h-8' alt='twitter logo'></img></a>
        <a href=''><img src={linkedin} className='lg:h-10 h-8' alt='linkedin logo'></img></a>
        </p>
      </div>

      <Faq2/>

      <Footer/>

    </div>
  );
};

export default Olympiad;
