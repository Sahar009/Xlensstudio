import React, { useState } from 'react';
import './footer.scss';
import footerImg from '../../assets/Final Logo white_  (1) 1.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    // Perform validation if needed
    if (!email) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      // Make a request to your backend API to handle the subscription
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast('Subscription successful!');
      } else {
        toast('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during subscription:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='footer'>
      <ul>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/' >Stocklist</Link></li>
        <li><Link to='/contact' >Contact</Link></li>
        <li><Link to='#' ><img src={footerImg} alt="Footer Logo" /></Link></li>
        <li><Link to='/contact' >Stay in touch</Link></li>
      </ul>
      <div className='inputDiv'>
        <input
          className='--form-control input'
          placeholder='Enter your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='--btn' onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
