import React from 'react';
import './contact.scss'
import { AiFillBehanceCircle, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { FiYoutube } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';


const Contact = () => {
  return (
    <div className='contact'>
        <div className='form-section'>
        <form action="">
          <h1>Contact Us</h1>
          <input type="text" name='name' placeholder='Your Full Name' required/>


            <input type="email"name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='--btn '>Send Message</button>
        </form>
        </div>
        <div className='icon-section'>
          <div>
            <div className='icons'>
             <a href='https://www.instagram.com/xlensviz/'> <AiFillInstagram className='icon' size={20}/></a>
              <AiFillBehanceCircle className='icon' size={20}/>
              <FiYoutube className='icon' size={20}/>
            </div>
            <div>
            <div className='email'>
            <a href="mailto:akinwumisehinde@gmail.com" target='_blank'><MdEmail className='icon' size={18}/></a>
              <a href="mailto:akinwumisehinde@gmail.com" target='_blank'> xlensviz@gmail.com</a>
            </div>
            <div className='email'>
            <AiOutlineWhatsApp className='icon' size={18}/>
            <a href="https://api.whatsapp.com/send?phone=23408101126131" target='_blank'><h5> +234(8101126131)</h5></a>
            </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Contact