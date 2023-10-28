import Slider from "../slider/Slider";
import './home.scss'
import client1 from '../../assets/clients.png';
import clientback from '../../assets/client-background (1).png'
import { useEffect, useState } from "react";
import clientimage from '../../assets/client-background (1).png'
import interior from '../../assets/Group 12.png'
import Footer from "../footer/Footer";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {FiArrowRightCircle} from 'react-icons/fi'
import backgroundleft from '../../assets/depositphotos_78505366-stock-illustration-interior-drawing 1.png'

import projectRight1 from '../../assets/4 Bedroom_View 1.png'
import projectRight2 from '../../assets/Materials for Websites/INTERIOR PROJECTS/Lounge_01.jpg';
import projectRight3 from '../../assets/Materials for Websites/GLATT ESTATE/RENDER/ARIEL VIEW b.jpg';
import projectRight4 from '../../assets/Materials for Websites/ITUNU/Images/COm_street view004.jpg';
// import projectRight2 from '../../assets/Materials for Websites/INTERIOR PROJECTS/Lounge_01.jpg'

import { Link } from "react-router-dom";
const Home = () =>{
    const [countProjects, setCountProjects] = useState(0);
    const [countContractors, setCountContractors] = useState(0);
    const [countAwards, setCountAwards] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Define your current numbers here
            const currentProjects = 374;
            const currentContractors = 120;
            const currentAwards = 24;

            // Increment the counts until they reach the current numbers
            if (countProjects < currentProjects) {
                setCountProjects(countProjects + 1);
            }
            if (countContractors < currentContractors) {
                setCountContractors(countContractors + 1);
            }
            if (countAwards < currentAwards) {
                setCountAwards(countAwards + 1);
            } else {
                // Clear the interval once the counts reach the current numbers
                clearInterval(interval);
            }
        }, 10); // Update the numbers every 100 milliseconds

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [countProjects, countContractors, countAwards]);


    //section render pricing 
    const [activeSection, setActiveSection] = useState('interior');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    //section displays on click
    const [activeDiv, setActiveDiv] = useState('div1');

    const handleItemClick = (target) => {
        setActiveDiv(target);
    };
    return(

        <>
        <Slider/>
        <div className="home">
        <section className="project">
        <div className="project-left">
            <img src={backgroundleft}/>
                <ul>
                    <li className={activeDiv === 'div1' ? 'active' : ''} onClick={() => handleItemClick('div1')}><AiOutlineMinus className='iconStyle'/><Link>3D Floor Plans</Link></li>
                    <li className={activeDiv === 'div2' ? 'active' : ''} onClick={() => handleItemClick('div2')}><AiOutlineMinus className='iconStyle'/><Link> Interior Design</Link></li>
                    <li className={activeDiv === 'div3' ? 'active' : ''} onClick={() => handleItemClick('div3')}><AiOutlineMinus className='iconStyle'/><Link>Landscape</Link></li>
                    <li className={activeDiv === 'div4' ? 'active' : ''} onClick={() => handleItemClick('div4')}><AiOutlineMinus className='iconStyle'/><Link>3D Visualization</Link></li>
                    <li className={activeDiv === 'div5' ? 'active' : ''} onClick={() => handleItemClick('div5')}><AiOutlineMinus className='iconStyle'/><Link>Product Design</Link></li>
                </ul>
            </div>
            <div className="project-right">
                <h5><AiOutlinePlus  className='iconStyle' /> All projects</h5>
                {activeDiv === 'div1' && (
                    <div className={`inner div1 ${activeDiv === 'div1' ? 'active' : ''}`}>
                        <img  src={projectRight1} />
                    </div>
                )}
                {activeDiv === 'div2' && (
                    <div className={`inner div1 ${activeDiv === 'div2' ? 'active' : ''}`}>
                       <img src={projectRight2} />
                    </div>
                )}
                 {activeDiv === 'div3' && (
                    <div className={`inner div1 ${activeDiv === 'div3' ? 'active' : ''}`}>
                        <img src={projectRight3} />
                    </div>
                )}
                 {activeDiv === 'div4' && (
                    <div className={`inner div1 ${activeDiv === 'div4' ? 'active' : ''}`}>
                        <img src={projectRight4} />
                       

                       
                    </div>
                )}
                 {activeDiv === 'div5' && (
                    <div className={`inner div1 ${activeDiv === 'div5' ? 'active' : ''}`}>
                       <img src={projectRight1} />
                    </div>
                )}
            </div>
           
            
        </section>
            <div className="clients">
                <h2>Our Clients</h2>
                <img src={client1}/>
              
               
           
           <div className="client-projects">
           <div className="text">
             <p>Our team is very passionate about people’s habits. We study how they live, work play and inhabit the spaces that we have imagined. Studio Arch42 is a connection between nature and people.  </p>
             </div>
           
           </div>
           <h3>Completed projects in 24 countries</h3>
           <div className="client-numbers">
                <div className="count">
                    <h1 className="count-up">{countProjects}<AiOutlinePlus  size={20}/></h1>
                    <h4>projects</h4>
                </div>
                <div className="count">
                    <h1 className="count-up">{countContractors}<AiOutlinePlus size={20}/></h1>
                    <h4>contractors</h4>
                </div>
                <div className="count">
                    <h1 className="count-up">{countAwards}<AiOutlinePlus size={20}/></h1>
                    <h4>awards</h4>
                </div>
                <div className="client-image">
            <img src={clientimage}/>
           </div>
            </div>
           {/* <img src={clientback}/> */}
          
            </div>
            <section className="service">
            <div className="service-nav">
                <ul>
                   <li><a onClick={() => handleSectionClick('interior')}> Interior</a></li>
                 <li >  <a onClick={() => handleSectionClick('exterior')}>Exterior</a></li>
                   <li>  <a  onClick={() => handleSectionClick('product')}>Product</a></li>
                <li> <a onClick={() => handleSectionClick('visualization')}>Visualization</a></li>
               <li><a onClick={() => handleSectionClick('floor-plans')}>Floor Plans </a></li>
                </ul>
            </div>
            <div className={`interior ${activeSection === 'interior' ? 'active' : ''}`}>
                <p>Rendering pricing estimate for interior design</p>
                <div>
        
                    <div className="serviceText">
                    <h3>Time frame: <span>3-6 days</span></h3>
                    <h3>Price Range: <span>$450 - $950</span></h3>
                    <h3>Contact us</h3>
                    </div>
                    <div className="serviceImage">
                         <img alt="Interior" src={interior} />
                      
                    </div>
                  
                </div>
            </div>
            <div className={`exterior ${activeSection === 'exterior' ? 'active' : ''}`}>
                <p>Rendering pricing estimate for exterior design</p>
                <div>
                    <h1>Exterior page</h1>
                    <img alt="Exterior" src="exterior-image-url" />
                </div>
            </div>
            
        </section>
        <Footer/>
        
        </div>
        
        
        </>
    );

};
export default Home;