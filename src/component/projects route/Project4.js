import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './project1.scss';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImageWithBlurhash from './blurhash/ImageWithBlurhash';

const Project4 = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://xlensvisualization-backend.onrender.com/api/projects/visualizations")
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    } catch (error) {
      console.log(error.message);
      
    }
    
  }, []);

  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className='project-home'>
          <div className='project-inner'>
            <div className='first-image'>
              <ImageWithBlurhash blurhash={project.images[0].blurhash} src={project.images[0]?.url} alt='project' />
            </div>
            <div className='right-text'>
              <h1>{project.designName}</h1>
              <p>{project.location || "Location"}</p>
              <p>{project.date}</p>
              <Link to='/project'><FaLongArrowAltLeft size={40} color='#9B934A' /></Link>
            </div>
          </div>

          <div className='second-image'>
            {project.images.slice(1).map((image, imgIndex) => (
              <div key={imgIndex} className='pic'>
                <ImageWithBlurhash blurhash={image.blurhash} src={image.url} alt={`project-image-${imgIndex}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Project4;
