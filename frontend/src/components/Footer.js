import React from 'react'
import gb from '../images/gravity_brain_logo.svg'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-slate-700'>
        <div className='grid grid-cols-1 divide-y-2 text-slate-200'>
            <div>
                <div className='md:grid md:grid-cols-5 py-4 mx-10'>
                    <div>
                        <img src={gb} alt='Gravity Brain Logo' className='mt-4'></img>
                        <p className='ml-4 mt-2'>School's are backward in 2022. We believe. Children of today are capable, extra-smart and need additional stimuli to keep them engaged.</p>
                        <p className='mt-4 ml-4'>The heroes of tomorrow need learning today, beyond just the regular academic and curricular education.</p>
                    </div>
                    <div>
                        <p className='md:ml-20 ml-4 mt-6  font-bold'>COMPANY</p>
                        <p className='md:ml-20 ml-4 mt-2  '>About us</p>
                        <p className='md:ml-20 ml-4  mt-2  '>Our Program</p>
                        <p className='md:ml-20 ml-4 mt-2  '>Scholarship</p>
                    </div>
                    <div>
                        <p className='md:ml-20 ml-4 mt-6 text-lg font-bold'>RESOURCES</p>
                        <p className='md:ml-20 ml-4 mt-2  '>Student Reviews</p>
                        <p className='md:ml-20 ml-4 mt-2  '> Parent Reviews</p>
                        <p className='md:ml-20 ml-4 mt-2 '>Webinars</p>
                    </div>
                    <div>
                        <p className='md:ml-20 ml-4 mt-6 text-lg font-bold'>OTHER LINKS</p>
                        <Link to='/terms'><p className='md:ml-20 ml-4 mt-2  '>Terms and Conditions</p></Link>
                        <Link to='/privacy'><p className='md:ml-20 ml-4 mt-2  '>Privacy Policy</p></Link>
                    </div>
                    <div>
                        <p className='md:ml-20 ml-4 mt-6 text-lg font-bold'>OUR OFFICE</p>
                        <p className='md:ml-20 ml-4 mt-4  font-bold'>India</p>
                        <p className='md:ml-20 ml-4 mt-2 '>2nd Floor, Enkay Square Plot 448-A, Opposite Cyber Hub Gurugram, Haryana, India 122016</p>
                        <p className='md:ml-20 ml-4 mt-4  font-bold'>USA</p>
                        <p className='md:ml-20 ml-4 mt-2 pb-8'>Fillmore Street, #380-7980 San Francisco, CA 94115</p>
                    </div>

                </div>
            </div>
            <div>
                <h1 className='py-3 text-center pb-60 md:pb-3'>Copyright © 2022 - 2024 GravityBrain.org All Rights Reserved.</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer