import React, { useState } from 'react';
import './uploadform.scss'; // Import the SCSS file
import axios from 'axios';
import { toast } from 'react-toastify';

const UploadForm = () => {
  const successfulmessage = () => {
    toast.success("Data uploaded successfully.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const errormessage = () => {
    toast.error("All fields are required.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [formData, setFormData] = useState({
    designName: '',
    location: '',
    date: '',
    timeframe: '',
    pricerange: '',
  });

  const [images, setImages] = useState([]);

  const API = 'https://xlensvisualization-backend.onrender.com/api/floorplans'; // Update this to your API endpoint

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImages([...e.target.files]); // Set the selected image files
  };

  const uploadData = async (e) => {
    e.preventDefault();
    if (!images.length || !formData.designName || !formData.location || !formData.timeframe || !formData.pricerange) {
      errormessage();
      return;
    }

    const data = new FormData();
    data.append('designName', formData.designName);
    data.append('location', formData.location);
    data.append('date', formData.date);
    data.append('timeframe', formData.timeframe);
    data.append('pricerange', formData.pricerange);

    // Append all selected images to FormData
    images.forEach((file, index) => {
      data.append('images', file);
    });

    try {
      await axios.post(API, data);

      setFormData({
        designName: '',
        location: '',
        date: '',
        timeframe: '',
        pricerange: '',
      });
      setImages([]);
      successfulmessage();
    } catch (error) {
      errormessage();
      console.error(error.message);
    }
  };

  return (
    <div className="upload-form-container">
      <h2>Upload </h2>
      <form className="upload-form" onSubmit={uploadData}>
        <div className="form-group">
          <label htmlFor="designName">Design name:</label>
          <input
            type="text"
            id="designName"
            name="designName"
            placeholder="Enter design name"
            value={formData.designName}
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="images">Images:</label>
          <input
            type="file"
            name="images"
            id="images"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeframe">Time frame:</label>
          <input
            type="text"
            id="timeframe"
            name="timeframe"
            placeholder="2 - 6days"
            value={formData.timeframe}
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pricerange">Price range:</label>
          <input
            type="text"
            id="pricerange"
            name="pricerange"
            placeholder="Enter price range  $200 - $700"
            value={formData.pricerange}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default UploadForm;
