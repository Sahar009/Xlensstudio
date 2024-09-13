import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './project1.scss';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImageWithBlurhash from './blurhash/ImageWithBlurhash';
import SkeletonProjects from './SkeletonProjects';

const Project1 = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch project data from the backend
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://xlensvisualization-backend.onrender.com/api/projects/floorplans");
        setProjects(response.data); // Store project data
        setLoading(false); // Disable loading spinner
      } catch (error) {
        console.error(error.message);
        setLoading(false); // Disable loading spinner on error
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonProjects /> // Display loading skeleton while data is being fetched
      ) : (
        projects.map((project, index) => (
          <div key={index} className='project-home'>
            <div className='project-inner'>
              {/* Display first image with Blurhash */}
              <div className='first-image'>
                <ImageWithBlurhash
                  blurhash={project.images[0]?.blurhash} // Use blurhash from the API
                  src={project.images[0]?.url} // Use image URL from the API
                  alt='project'
                />
              </div>

              {/* Project details */}
              <div className='right-text'>
                <h1>{project.designName}</h1>
                <p>{project.location || "Location"}</p>
                <p>{project.date}</p>
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
                    blurhash={image.blurhash} // Use blurhash from the API
                    src={image.url} // Use image URL from the API
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

export default Project1;
