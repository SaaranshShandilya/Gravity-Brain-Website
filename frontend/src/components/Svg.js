import React from 'react'
import { motion } from 'framer-motion';

const Svg = () => {

    const pathVariantG={
        hidden:{
            opacity:0,
            pathLength: 0,
        },
        visible:{
            opacity:1,
            pathLength:1,
            transition:{duration:1, ease:'easeInOut'},
        }

    }
  return (

    <motion.svg  xmlns="http://www.w3.org/2000/svg" className='ml-4 mt-4 h-10 lg:h-16' viewBox="0 0 326 80">
    <g id="gravity_brain_logo" transform="translate(1511 -230)">
      <rect id="Rectangle_7830" data-name="Rectangle 7830" width="326" height="80" transform="translate(-1511 230)" fill="#929292" opacity="0"/>
      <g id="GravityBrain_logo" transform="translate(-1505.575 234.882)">
        <g id="Group_5282" data-name="Group 5282" transform="translate(25.862 24.645)">
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_6" data-name="Path 6" d="M164.515,790.726c-.036,11.01-7.224,19.114-17.549,19.114-10.111,0-17.794-7.762-17.794-18.293s7.483-18.366,17.656-18.366c8.536,0,15.625,5.526,17.227,13.383h-7.661a9.825,9.825,0,0,0-9.428-6.128c-6.086,0-10.262,4.544-10.262,11.111,0,6.5,4.069,11.038,10.262,11.038,4.437,0,8.293-2.406,9.562-6.027h-10.3v-5.831Z" transform="translate(-129.172 -771.543)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_7" data-name="Path 7" d="M281.383,803.646v6.913h-3.11c-4.038,0-5.635,1.829-5.635,6.26V830.9h-7.166V803.8h4.6l1.274,3.321a8.959,8.959,0,0,1,7.686-3.471Z" transform="translate(-226.825 -793.37)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_8" data-name="Path 8" d="M351.583,802.2v27.1h-5.617l-.616-2.425a12.717,12.717,0,0,1-8.589,3.232c-7.973,0-13.9-6.156-13.9-14.359,0-8.173,5.93-14.278,13.9-14.278a12.759,12.759,0,0,1,8.707,3.315l.766-2.59Zm-7.023,13.552a7.222,7.222,0,1,0-7.215,7.428A7.121,7.121,0,0,0,344.56,815.752Z" transform="translate(-267.939 -791.814)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_9" data-name="Path 9" d="M458.444,804.177l-10.53,27.1H441.3l-10.784-27.1h7.643l6.487,18.16,6.372-18.16Z" transform="translate(-345.072 -793.75)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_10" data-name="Path 10" d="M535.661,777.832h7.166v27.1h-7.166Zm.013-10.427h7.139v6.813h-7.139Z" transform="translate(-420.402 -767.405)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_11" data-name="Path 11" d="M586.665,806.886v6.525h-5.091c-5.831,0-9.414-3.664-9.414-9.678V792.2h-4.792v-1.584l10.467-11.38h1.37v7.073h7.313V792.2h-7.192v10.563c0,2.619,1.472,4.125,4.083,4.125Z" transform="translate(-443.118 -775.88)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_12" data-name="Path 12" d="M663.711,804.177,652.16,830.921c-3.177,7.346-5.97,10.13-11.918,10.13h-2.954v-6.589h2.48c3.454,0,4.351-.94,5.979-5.038l.1-.22L634.62,804.177h7.8l7.07,16.674,6.6-16.674Z" transform="translate(-491.302 -793.75)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_13" data-name="Path 13" d="M760.913,779.355c7.922,0,13.536,6.05,13.536,14.1,0,8.027-5.614,14.1-13.536,14.1a13.214,13.214,0,0,1-11.425-6.255l-.367,5.707h-1.928V770.3h2.4v15.129a13.211,13.211,0,0,1,11.316-6.071ZM772,793.455c0-6.759-4.741-11.71-11.244-11.71-6.45,0-11.293,5.029-11.293,11.71,0,6.631,4.843,11.71,11.293,11.71C767.258,805.165,772,800.213,772,793.455Z" transform="translate(-571.955 -769.477)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_14" data-name="Path 14" d="M874.684,803.838v2.343H872.2c-5.314,0-8.707,4.006-8.707,9.769v15.088h-2.4v-27.1h1.792l.422,5.346a9.726,9.726,0,0,1,9.08-5.442Z" transform="translate(-653.555 -793.508)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_15" data-name="Path 15" d="M939.706,802.791v27.1h-2.042l-.282-5.881a13.06,13.06,0,0,1-11.529,6.43c-7.747,0-13.584-6.073-13.584-14.1,0-8.05,5.837-14.1,13.584-14.1a13.053,13.053,0,0,1,11.547,6.45l.332-5.9Zm-13.694,25.262c6.5,0,11.244-4.952,11.244-11.71s-4.741-11.71-11.244-11.71c-6.45,0-11.292,5.056-11.292,11.711,0,6.681,4.842,11.71,11.292,11.71Z" transform="translate(-690.224 -792.365)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_16" data-name="Path 16" d="M1033.614,772.2h3.016v3.47h-3.016Zm.306,9.067h2.4v27.1h-2.4Z" transform="translate(-777.162 -770.841)" fill="#fff"/>
          <motion.path variants={pathVariantG} initial="hidden" animate="visible" id="Path_17" data-name="Path 17" d="M1081.132,802.244c6.361,0,10.34,4.68,10.34,11.552v16.1h-2.4v-15.59c0-6.153-3.144-9.789-8.48-9.789-5.13,0-9.39,4.489-9.39,9.913V829.9h-2.4v-27.1h1.792l.475,5.491a11.3,11.3,0,0,1,10.073-6.039Z" transform="translate(-802.366 -792.366)" fill="#fff"/>
        </g>
        <path id="icon" d="M10.761,48.768l1.771-1.341L3.943,36.146h0L.11,36.754l1.584-3.563-.543-.712s-3.71-3.285,2.189-4.565A1.022,1.022,0,0,1,4,27.979L14.44,4.454,48.3,0,42.449,10.786l-1-1.308s-10.669,1.491-18.342,7.3S10.806,32.5,10.806,32.5l1.738,2.282-6.928,1.1,8.107,10.646,1.639-1.241,2.881,3.783-3.323.154-1.278,3.33Zm-7-16.328a1.449,1.449,0,1,0,.875-.294A1.439,1.439,0,0,0,3.765,32.441ZM1.842,30.922l.542.712.834-1.879C2.431,29.8,1.153,30.018,1.842,30.922ZM12.92,32.009s4.154-8.886,11.036-14.1,16.449-6.546,16.449-6.546l5.729,7.524s-9.551,2.492-15.99,7.368S18.731,39.64,18.731,39.64Z" transform="translate(0 0)" fill="#fbc63d"/>
      </g>
    </g>
  </motion.svg>
  
  )
}

export default Svg;

