import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceSlider from '../serviceSlider/ServiceSlider';
import { Link } from 'react-router-dom';
import './service.scss';

const Service = () => {
  const [activeSection, setActiveSection] = useState('interior');
  const [images, setImages] = useState([]);

  // Fetch the images when the active section changes
  useEffect(() => {
    const fetchImages = async () => {
      let endpoint = '';

      // Define the endpoint based on the active section
      switch (activeSection) {
        case 'interior':
          endpoint = 'https://xlensvisualization-backend.onrender.com/api/projects/interiordesigns';
          break;
        case 'exterior':
          endpoint = 'https://xlensvisualization-backend.onrender.com/api/projects/mhqprojects';
          break;
        case 'visualization':
          endpoint = 'https://xlensvisualization-backend.onrender.com/api/projects/visualizations';
          break;
        case 'floorPlan':
          endpoint = 'https://xlensvisualization-backend.onrender.com/api/projects/floorplans';
          break;
        default:
          return;
      }

      try {
        const response = await axios.get(endpoint);
        console.log(response.data[0].images);  // Logging the correct structure
        setImages(response.data[0].images);  // Assuming response.data[0].images is the correct array
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchImages(); // Call the fetch function
  }, [activeSection]); // Re-run the effect when activeSection changes

  const sectionDetails = {
    interior: { title: 'Interior Design', timeFrame: '3-6 days', priceRange: '$450 - $950' },
    exterior: { title: 'Exterior Design', timeFrame: '3-6 days', priceRange: '$450 - $950' },
    visualization: { title: 'Visualization Design', timeFrame: '3-6 days', priceRange: '$450 - $950' },
    floorPlan: { title: 'Floor Plans', timeFrame: '3-6 days', priceRange: '$450 - $950' },
  };

  return (
    <section className="service">
      <div className="service-nav">
        <ul>
          {Object.keys(sectionDetails).map((section) => (
            <li key={section}>
              <Link onClick={() => setActiveSection(section)}>{sectionDetails[section].title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {Object.keys(sectionDetails).map((section) => (
        <div key={section} className={`${section} ${activeSection === section ? 'active' : ''}`}>
          <p>Rendering pricing estimate for {sectionDetails[section].title.toLowerCase()}</p>
          <div>
            <div className="serviceText">
              <h3>Time frame: <span>{sectionDetails[section].timeFrame}</span></h3>
              <h3>Price Range: <span>{sectionDetails[section].priceRange}</span></h3>
              <h3>Contact us</h3>
            </div>
            {/* Pass the dynamically fetched images to ServiceSlider */}
            <div className='serviceImage'>
              <ServiceSlider images={images} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;
