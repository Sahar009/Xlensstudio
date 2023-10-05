import  {useState, useEffect} from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import  {sliderData} from './slider-data';
import './slider.scss'
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
      
        <AiOutlineArrowLeft onClick={prevSlide} className='arrow prev'/>
        <AiOutlineArrowRight onClick={nextSlide} className='arrow next'/>
    {sliderData.map((slide,index) =>{
        const {image, heading, desc}= slide
        return(
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
                            
                            <a href='#product' className='--btn --btn-primary'>
                                see projects
                            </a>
                        </div>
                        </>
                    )} 
            </div>


        )
    }
    )}
    </div>
    
  )
}

export default Slider;