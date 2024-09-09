import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './project1.scss';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Blurhash } from 'react-blurhash';
import onDefaultImage from "./blurhash/defaultImage/istockphoto-1147544807-612x612.jpg";

// Image rendering component that handles both Blurhash and regular image
const ImageWithBlurhash = ({ blurhash, src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Show Blurhash while the image is loading */}
      {!isLoaded && blurhash && (
        <Blurhash
          hash={blurhash}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}

      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: isLoaded ? 'block' : 'none' }}
        onLoad={handleImageLoad}
        onError={(e) => { e.target.src = onDefaultImage; setIsLoaded(true); }}  // Set fallback image and mark as loaded
      />
    </div>
  );
};

const Project1 = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://xlensvisualization-backend.onrender.com/api/projects/floorplans")
      .then((response) => {
        console.log(response.data); // Logging the response to ensure the structure
        setProjects(response.data); // Assuming `response.data` contains the array of projects
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
            {/* First Image */}
            <div className='first-image'>
              <ImageWithBlurhash
                blurhash={project.images[0]?.blurhash}
                src={project.images[0]?.url}
                alt='project'
              />
            </div>

            {/* Project Info */}
            <div className='right-text'>
              <h1>{project.designName}</h1>
              <p>{project.location || "Location"}</p>
              <p>{project.date}</p>
              <Link to='/project'>
                <FaLongArrowAltLeft size={40} color='#9B934A' />
              </Link>
            </div>
          </div>

          {/* Remaining Images */}
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
      ))}
    </>
  );
};

export default Project1;
