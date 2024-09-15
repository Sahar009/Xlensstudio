import Slider from "../slider/Slider";
import './home.scss'
import client1 from '../../assets/clients.png';
import { useEffect, useRef, useState } from "react";
import clientimage from '../../assets/client-background (1).png'
import Footer from "../footer/Footer";
import {  AiOutlinePlus } from "react-icons/ai";

// import projectRight2 from '../../assets/Materials for Websites/INTERIOR PROJECTS/Lounge_01.jpg'


import Project from "../project/Project";
import Service from "./services/Service";

import { FaArrowDown } from "react-icons/fa";

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
    

    const projectRef = useRef(null); // Create a ref for the Project section

  // Function to scroll to the Project section
  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
    
    return(

        <>
        <Slider/>
        <div className="home">
        <div className="ball" onClick={scrollToProject} style={{ cursor: 'pointer' }}><FaArrowDown  className='downArrowIcon'/></div>
        
        <div ref={projectRef}>
        <Project />
      </div>
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
           <Service/>
        <Footer/>
        
        </div>
        
        
        </>
    );

};
export default Home;