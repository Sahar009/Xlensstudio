import React from 'react'
import './project1.scss'
import img1 from '../../assets/Materials for Websites/BURUM/IMAGES/CAM 3.jpg';
import img2 from '../../assets/Materials for Websites/BURUM/IMAGES/CAM_1.jpg'
import img3 from '../../assets/Materials for Websites/BURUM/IMAGES/NIGHT/002.jpg'
import img4 from '../../assets/Materials for Websites/BURUM/IMAGES/EXTERIORS/003-02.jpg'
import img5 from '../../assets/Materials for Websites/BURUM/IMAGES/EXTERIORS/BURUM-AERIAL-NIGHT.jpg'
import img6 from '../../assets/Materials for Websites/BURUM/IMAGES/NIGHT/003.jpg'
import img7 from '../../assets/Materials for Websites/BURUM/IMAGES/EXTERIORS/006.jpg'
import {FaLongArrowAltLeft } from "react-icons/fa";


import Footer from '../footer/Footer'
import { Link } from 'react-router-dom';
const Project1 = () => {
  return (
   <>
    <div className='project-home'>
     
      <div className='project-inner'>
        <div className='first-image'>
          <img  src={img1} loading="lazy"/>

        </div>
        <div className='right-text'>
          <h1>Bruhm Design</h1>
          <p>location</p>
          <p>Year</p>
         <Link to='/project'> <FaLongArrowAltLeft size={40} color='#9B934A'/></Link>

        </div>

        

      </div>
      <div className='second-image'>
        <div className='pic'>
          <img src={img2} loading="lazy"/>
        </div>
        <div className='pic'>
          <img src={img3} loading="lazy"/>
        </div>
        <div className='pic'>
          <img src={img4} loading="lazy"/>
        </div>
        <div className='pic'>
          <img src={img5} loading="lazy"/>
        </div>
        <div className='pic'>
          <img src={img6} loading="lazy"/>
        </div>
        <div className='pic'>
          <img src={img7} loading="lazy"/>
        </div>


      </div>
      
      
    </div>
   
    </>
  )
}

export default Project1