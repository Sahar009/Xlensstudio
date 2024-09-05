import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './project1.scss';

import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Project4 = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      axios.get("https://xlensvisualization-backend.onrender.com/api/projects/visualizations")
        .then((response) => {
          console.log(response.data);  // Make sure you're logging `response.data` to see the correct structure
          setProjects(response.data);  // Assuming `response.data` is the array of projects
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
  
    return (
      <>
        {projects.map((project, index) => (
          <div key={index} className='project-home'>
            <div className='project-inner'>
              <div className='first-image'>
                <img src={project.images[0].url} loading="lazy" alt='images' />
              </div>
              <div className='right-text'>
                <h1>{project.designName}</h1>
                <p>{project.location || "Location"}</p>
                <p>{project.date}</p>
                <Link to='/project'> <FaLongArrowAltLeft size={40} color='#9B934A' /></Link>
              </div>
            </div>
  
            <div className='second-image'>
              {project.images.slice(1).map((image, imgIndex) => (
                <div key={imgIndex} className='pic'>
                  <img src={image.url} loading="lazy" alt='images' />
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    )
}

export default Project4