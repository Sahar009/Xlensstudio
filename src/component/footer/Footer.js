import React, { useState } from 'react';
import './footer.scss';
import footerImg from '../../assets/Final Logo white_ .png';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');

  const successfulmessage = () => {
    toast.success("Thank you for subscribing!", {
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
  

  const errormessage = (error) => {
    const errorMsg = error?.response?.data?.message || "An error occurred. Please try again.";
    toast.error(errorMsg, {
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

  const API = 'https://xlensvisualization-backend.onrender.com/api/subscribe';

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      errormessage({ response: { data: { message: "Email is required." } } });
      return;
    }
    
    try {
      await axios.post(API, { email });
      setEmail(''); // Reset the input field
      successfulmessage();
    } catch (error) {
      errormessage(error);
      console.log(error.message);
    }
  };

  return (
    <div className='footer'>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Stocklist</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='#'><img className='footerImg' src={footerImg} alt="Footer Logo" /></Link></li>
        <li><Link to='/contact'>Stay in touch</Link></li>
      </ul>
      <div className='inputDiv'>
        <input
          className='--form-control input'
          placeholder='Enter your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='--btn' onClick={sendEmail}>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
