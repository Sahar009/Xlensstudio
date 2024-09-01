import Slider from "../slider/Slider";
import './home.scss'
import client1 from '../../assets/clients.png';
import { useEffect, useState } from "react";
import clientimage from '../../assets/client-background (1).png'
import interior from '../../assets/Group 12.png'
import Footer from "../footer/Footer";
import {  AiOutlinePlus } from "react-icons/ai";

// import projectRight2 from '../../assets/Materials for Websites/INTERIOR PROJECTS/Lounge_01.jpg'

import { Link } from "react-router-dom";
import Project from "../project/Project";
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
  
    
    return(

        <>
        <Slider/>
        <div className="home">
    
        <Project/>
            <div className="clients">
                <h2>Our Clients</h2>
                <img src={client1}  alt='images'/>
              
               
           
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
            <img src={clientimage} alt='images'/>
           </div>
            </div>
           {/* <img src={clientback}/> */}
          
            </div>
            <section className="service">
            <div className="service-nav">
                <ul>
                   <li><Link onClick={() => handleSectionClick('interior')}> Interior</Link></li>
                 <li >  <Link onClick={() => handleSectionClick('exterior')}>Exterior</Link></li>
                   <li>  <Link  onClick={() => handleSectionClick('product')}>Product</Link></li>
                <li> <Link onClick={() => handleSectionClick('visualization')}>Visualization</Link></li>
               <li><Link onClick={() => handleSectionClick('floor-plans')}>Floor Plans </Link></li>
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