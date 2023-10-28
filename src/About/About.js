import React from 'react';
import './about.scss'
import Footer from '../component/footer/Footer';
import AboutImg from '../assets/depositphotos_78505366-stock-illustration-interior-drawing 1 (1).png'
const About = () => {
  return (
    <>
    <div className='about'>
        <div className='left-about'>
            <img src={AboutImg}/>
        </div>
        <div className='right-about'>
            <h1>About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen

            </p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About