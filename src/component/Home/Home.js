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

import projectRight1 from '../../assets/4 Bedroom_View 1.png'
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
    return(

        <>
        <Slider/>
        <div className="home">
        <section className="project">
            <div className="project-left">
                <ul>
                    <li ><AiOutlineMinus className='iconStyle'/>3D Floor Plans </li>
                    {/* <FiArrowRightCircle/> */}
                    <li><AiOutlineMinus className='iconStyle'/> Interior Design</li>
                    <li><AiOutlineMinus className='iconStyle'/>Landscape</li>
                    <li><AiOutlineMinus className='iconStyle'/>3D Visualization</li>
                    <li><AiOutlineMinus className='iconStyle'/>Product Design</li>
                </ul>
            </div>
            <div className="project-right">
                <h5><AiOutlinePlus  className='iconStyle' /> All projects</h5>
                <div className="inner">
                <img src={projectRight1}/>
                </div>
                <div className="inner">
                <img src={projectRight1}/>
                </div>
           
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

        </div>

        <Footer/>
        </>
    );

};
export default Home;