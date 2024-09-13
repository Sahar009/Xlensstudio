import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './project1.scss';  // Assuming the same styles apply
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImageWithBlurhash from './blurhash/ImageWithBlurhash';
import SkeletonProjects from './SkeletonProjects';

const Project4 = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://xlensvisualization-backend.onrender.com/api/projects/visualizations");
        setProjects(response.data);  // Store project data
        setLoading(false);  // Disable loading spinner
      } catch (error) {
        console.error(error.message);
        setLoading(false);  // Disable loading spinner on error
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonProjects />  // Show skeleton while loading
      ) : (
        projects.map((project, index) => (
          <div key={index} className='project-home'>
            <div className='project-inner'>
              {/* First image with blurhash */}
              <div className='first-image'>
                <ImageWithBlurhash
                  blurhash={project.images[0]?.blurhash}  // Use blurhash from API
                  src={project.images[0]?.url}  // Use image URL from API
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

            {/* Display additional images with blurhash */}
            <div className='second-image'>
              {project.images.slice(1).map((image, imgIndex) => (
                <div key={imgIndex} className='pic'>
                  <ImageWithBlurhash
                    blurhash={image.blurhash}  // Use blurhash from API
                    src={image.url}  // Use image URL from API
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

export default Project4;
