import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './project1.scss';  // Assuming the same styles apply
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImageWithBlurhash from './blurhash/ImageWithBlurhash';
import SkeletonProjects from './SkeletonProjects';

const Project3 = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMHQProjects = async () => {
    try {
      const response = await axios.get("https://xlensvisualization-backend.onrender.com/api/projects/mhqprojects");
      const projectData = response.data;

      // Check if the fetched data is different from the stored data in localStorage
      const storedProjects = localStorage.getItem('mhqProjects');
      if (JSON.stringify(projectData) !== storedProjects) {
        setProjects(projectData); // Update state with new data
        localStorage.setItem('mhqProjects', JSON.stringify(projectData)); // Update localStorage
      }

      setLoading(false); // Disable loading spinner
    } catch (error) {
      console.error(error.message);
      setLoading(false); // Disable loading spinner on error
    }
  };

  useEffect(() => {
    // Check if data is already in localStorage
    const storedProjects = localStorage.getItem('mhqProjects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects)); // Use localStorage data
      setLoading(false); // Disable loading spinner
    } else {
      fetchMHQProjects(); // Fetch from API if localStorage is empty
    }

    // Set up interval to check for updates every 5 minutes (300000ms)
    const interval = setInterval(fetchMHQProjects, 300000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonProjects />
      ) : (
        projects.map((project, index) => (
          <div key={index} className='project-home'>
            <div className='project-inner'>
              {/* Display first image with Blurhash */}
              <div className='first-image'>
                <ImageWithBlurhash
                  blurhash={project.images[0]?.blurhash}
                  src={project.images[0]?.url}
                  alt='project'
                />
              </div>

              {/* Project details */}
              <div className='right-text'>
                <h1>{project.designName}</h1>
                <p>{project.location || "Location"}</p>
                <p>{new Date(project.date).toLocaleDateString()}</p>
                <Link to='/project'>
                  <FaLongArrowAltLeft size={40} color='#9B934A' />
                </Link>
              </div>
            </div>

            {/* Display additional images (if available) with Blurhash */}
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

export default Project3;
