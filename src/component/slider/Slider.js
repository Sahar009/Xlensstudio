import  {useState, useEffect} from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import  {sliderData} from './slider-data';
import {FaPlus} from 'react-icons/fa';
import './slider.scss'
import { Link } from 'react-router-dom';
const Slider = () => {
    const[currentSlide, setCurrentSlide]=useState(0)
    const slideLength = sliderData.length;
    // console.log(slideLength);
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide =()=> {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      };
      useEffect(() => {
        setCurrentSlide(0);
      }, []);
    
    
    
      // useEffect(() => {
      //   if (autoScroll) {
      //     const auto = () => {
      //       slideInterval = setInterval(nextSlide, intervalTime);
      //     };
      //     auto();
      //   }
      //   return () => clearInterval(slideInterval);
      // }, [currentSlide, slideInterval, autoScroll]);
    

  return (
    <div className='slider'>
    {sliderData.map((slide,index) =>{
        const {image, heading, desc, location,type,year}= slide
        return(
            <>
            <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
                    {index === currentSlide && (
                        <>
                        <div className='slider-dark'></div>
                        <img src={image} alt='slide'/>
                       
                        <div className='content'>
                        <div className='content-hr'>
                        <hr />
                       </div>
                            <h2>{heading}</h2>
                            <p>{desc}</p>
                            <div className='seeProject'>
                            
                             <FaPlus size={10} /> <Link to='/project' > <h5>see projects</h5> 
                            </Link >
                            </div>
                        </div>
                        </>
                    )} 

            </div>
            {index === currentSlide && (
             <div className='slider-content2'>
                
           
         <div className='content2-inner'><div><h2>latest project</h2><h1>{type}</h1><h2>Year completed {year}</h2></div></div>
         <div className='content2-inner'><div><h2>Location</h2><h3>{location}</h3></div></div>
         <div className='content2-inner'> <div className='content2-icon'>  <AiOutlineArrowLeft onClick={prevSlide} className='arrow prev'/>
                 <AiOutlineArrowRight onClick={nextSlide} className='arrow next'/> </div></div>
             </div>)}
             </>


        )
    }
    )}
   
    </div>
    
  )
}

export default Slider;