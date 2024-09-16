import React, { useEffect, useState } from 'react'
import './imageupload.scss'
import UploadForm from './form/UploadForm'

import ImageWithBlurhash from '../../../component/projects route/blurhash/ImageWithBlurhash';
import SkeletonProjects from '../../../component/projects route/SkeletonProjects';
import axios from 'axios';

const Visualization = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Function to fetch project data from the backend
      const fetchProjects = async () => {
        try {
          const response = await axios.get("https://xlensvisualization-backend.onrender.com/api/projects/visualizations");
          const projectData = response.data;
          setProjects(projectData); // Store project data in state
          localStorage.setItem('projects', JSON.stringify(projectData)); // Save the data to localStorage
          setLoading(false); // Disable loading spinner
        } catch (error) {
          console.error(error.message);
          setLoading(false); // Disable loading spinner on error
        }
      };
  
      // Check if data already exists in localStorage
      const storedProjects = localStorage.getItem('projects');
      if (storedProjects) {
        setProjects(JSON.parse(storedProjects)); // Load projects from localStorage
        setLoading(false); // Disable loading spinner
      } else {
        fetchProjects(); // Fetch data from the API if not in localStorage
      }
    }, []);
  return (
    <div className='projectContainer'>
        <div className='left_project_container'>
        <>
      {loading ? (
        <SkeletonProjects /> // Display loading skeleton while data is being fetched
      ) : (
        projects.map((project, index) => (
          <div key={index} className='uploadImgDiv'>
            {/* Project details */}
              <div className='UploadTextData'>
                <h1>{project.designName}</h1>
                <p>{project.location }</p>
                <p>{project.date}</p>                
              </div>
            {/* Display additional images (if available) with Blurhash */}
            <div className='ImgUploads'>
              {project.images.slice(0).map((image, imgIndex) => (
                <div key={imgIndex} className='img'>
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
        </div>
        <UploadForm/>
        
    </div>
  )
}

export default Visualization