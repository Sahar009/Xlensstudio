import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './project1.scss';  // Assuming the same styles apply
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImageWithBlurhash from './blurhash/ImageWithBlurhash';
import SkeletonProjects from './SkeletonProjects';

const Project2 = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://xlensvisualization-backend.onrender.com/api/projects/interiordesigns");
        const projectData = response.data;
        setProjects(projectData); // Store project data in state
        localStorage.setItem('interiorDesignProjects', JSON.stringify(projectData)); // Save data to localStorage
        setLoading(false); // Disable loading spinner
      } catch (error) {
        console.error(error.message);
        setLoading(false); // Disable loading spinner on error
      }
    };

    // Check if data is already in localStorage
    const storedProjects = localStorage.getItem('interiorDesignProjects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects)); // Use localStorage data
      setLoading(false); // Disable loading spinner
    } else {
      fetchProjects(); // Fetch from API if localStorage is empty
    }
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonProjects />
      ) : (
        projects.map((project, index) => (
          <div key={index} className='project-home'>
            <div className='project-inner'>
              <div className='first-image'>
                <ImageWithBlurhash
                  blurhash={project.images[0]?.blurhash}
                  src={project.images[0]?.url}
                  alt='project'
                />
              </div>
              <div className='right-text'>
                <h1>{project.designName}</h1>
                <p>{project.location || "Location"}</p>
                <p>{new Date(project.date).toLocaleDateString()}</p>
                <Link to='/project'>
                  <FaLongArrowAltLeft size={40} color='#9B934A' />
                </Link>
              </div>
            </div>
            <div className='second-image'>
              {project.images.slice(1).map((image, imgIndex) => (
                <div key={imgIndex} className='pic'>
                  <ImageWithBlurhash
                    blurhash={image.blurhash}
                    src={image.url}
                    alt={`project-image-${imgIndex}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Project2;
