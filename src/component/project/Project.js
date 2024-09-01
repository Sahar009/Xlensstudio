import React, { useState } from 'react'
import './project.scss'


import projectRight1 from '../../assets/4 Bedroom_View 1.png'
import projectRight2 from '../../assets/Materials for Websites/INTERIOR PROJECTS/Lounge_01.jpg';
import projectRight3 from '../../assets/Materials for Websites/MHQ PROJECT/Images/WS_B_002_0000.jpg';
import projectRight4 from '../../assets/Materials for Websites/ITUNU/Images/COm_street view004.jpg';
import { Link } from 'react-router-dom';
import { AiOutlineMinus} from "react-icons/ai";
import { GiClick } from "react-icons/gi";


import backgroundleft from '../../assets/depositphotos_78505366-stock-illustration-interior-drawing 1.png'
import Footer from '../footer/Footer';


const Project = () => {
  const [activeDiv, setActiveDiv] = useState('div1');

  const handleItemClick = (target) => {
   
      setActiveDiv(target);
  };
  return (
    <>
    
    
   
    <section className="project">
        <div className="project-left">
            <img src={backgroundleft} alt='images'/>
                <ul>
                <li className={activeDiv === 'div1' ? 'active' : ''} onClick={() => handleItemClick('div1')}><AiOutlineMinus className='iconStyle' /><Link to="#"> 3D Floor Plans</Link></li>
                <li className={activeDiv === 'div2' ? 'active' : ''} onClick={() => handleItemClick('div2')}><AiOutlineMinus className='iconStyle' /><Link to="#"> Interior Design</Link></li>
                <li className={activeDiv === 'div3' ? 'active' : ''} onClick={() => handleItemClick('div3')}><AiOutlineMinus className='iconStyle' /><Link to="#">MHQ Project</Link></li>
                <li className={activeDiv === 'div4' ? 'active' : ''} onClick={() => handleItemClick('div4')}><AiOutlineMinus className='iconStyle' /><Link to="#">3D Visualization</Link></li>
                </ul>
               
            </div>
            <div className="project-right">
               
                {activeDiv === 'div1' && (
                   <Link to='/itunu'> <div className={`inner div1 ${activeDiv === 'div1' ? 'active' : ''}`}>
                        <img  src={projectRight1} alt='image1'/>
                        <div className='div-icon'><GiClick  size={50}/></div>
                    </div>
                    </Link>
                )}
                {activeDiv === 'div2' && (
                  <Link to='/interior'>  <div className={`inner div1 ${activeDiv === 'div2' ? 'active' : ''}`}>
                       <img src={projectRight2} alt='image2'/>
                       <div className='div-icon'><GiClick  size={50}/></div>
                    </div>
                     </Link>
                )}
                 {activeDiv === 'div3' && (
                  <Link to='/mhq'> <div className={`inner div1 ${activeDiv === 'div3' ? 'active' : ''}`}>
                        <img src={projectRight3} alt='image3'/>
                        <div className='div-icon'><GiClick  size={50}/></div>
                    </div></Link> 
                )}
                 {activeDiv === 'div4' && (
                  <Link to='/visualization3D'> <div className={`inner div1 ${activeDiv === 'div4' ? 'active' : ''}`}>
                        <img src={projectRight4} alt='image4'/>
                        <div className='div-icon'><GiClick  size={50}/></div>        
                    </div>
                    </Link> 
                )}
             
            </div>
           
            
        </section>
    
   <Footer/>
    </>
  )
}

export default Project