import React from 'react';
import './footer.scss'
import footerImg from '../../assets/Final Logo white_  (1) 1.png'

const Footer = () => {
  return (
    <div className='footer'>
        <ul>
            <li><a >About</a></li>
            <li><a>Stocklist</a></li>
            <li><a>Contact</a></li>
            <li><a><img src={footerImg}/></a></li>
            <li><a>Stay in touch</a></li>
        </ul>
        <div className='inputDiv'>
            <input className='--form-control input' placeholder='Enter your email address'/><button className='--btn'>Subscribe</button>
        </div>
    </div>
  )
}

export default Footer