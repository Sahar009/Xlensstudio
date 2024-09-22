import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceSlider from '../serviceSlider/ServiceSlider';
import { Link } from 'react-router-dom';
import './service.scss';

const Service = () => {
  const [activeSection, setActiveSection] = useState('interior');
  const [images, setImages] = useState([]);
  const [projects, setProjects] = useState([]); // Fixed typo to setProjects (plural)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedImages = localStorage.getItem(activeSection); // Check if images are cached

    if (cachedImages) {
      setImages(JSON.parse(cachedImages));
      setLoading(false); // Skip fetching if cached images are available
    } else {
      const fetchImages = async () => {
        setLoading(true);
        let endpoint = '';

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

          // Log the response to check data structure
          console.log('API Response:', response.data);
          if (response.data && response.data.length > 0) {
            setImages(response.data[0].images); // Set images from the response
            setProjects(response.data); 
            console.log(response.data);
            // Set projects from the response
            localStorage.setItem(activeSection, JSON.stringify(response.data[0].images)); // Cache images
          } else {
            console.log('No data returned for projects');
            setProjects([]); // Clear projects if no data is returned
          }

          setLoading(false);
        } catch (err) {
          console.log('Error fetching data:', err.message);
          setLoading(false);
        }
      };

      fetchImages();
    }
  }, [activeSection]);

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
              <Link onClick={() => setActiveSection(section)}>
                {sectionDetails[section].title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {Object.keys(sectionDetails).map((section) => (
        <div key={section} className={`${section} ${activeSection === section ? 'active' : ''}`}>
          <p>Rendering pricing estimate for {sectionDetails[section].title.toLowerCase()}</p>
          <div>
            {/* Check if projects is an array and has content before mapping */}
            <div className="serviceText">
              <h3>Time frame: <span>{sectionDetails[section].timeFrame}</span></h3>
              <h3>Price Range: <span>{sectionDetails[section].priceRange}</span></h3>
              <h3>Contact us</h3>
            </div>
            <div className="serviceImage">
              <ServiceSlider images={images} loading={loading} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;
