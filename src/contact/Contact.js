import React, { useState } from 'react';
import './contact.scss'
import { AiFillBehanceCircle, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { FiYoutube } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Footer from '../component/footer/Footer';


const Contact = () => {

  const successfulmessage = () => {
    toast.success("Message sent successfully.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    
      });
  }

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
    
  }
  const [Formdata, setFormdata] = useState({
     fullname:"",
     email:"",
     message:"",
  })

  const API = 'https://xlensvisualization-backend.onrender.com/api/feedback'

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...Formdata, [name]: value });
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API, Formdata);
     
      setFormdata({
        fullname:"",
        email:"",
        message:"",
      });
      successfulmessage()
    
    } catch (error) {
     errormessage()
      console.log(error.message);
    }
  }



  return (
    <>
    <div className='contact'>
        <div className='form-section'>
        <form action="">
          <h1>Contact Us</h1>
          <input type="text" name='fullname' placeholder='Your Full Name' required onChange={handleInput}/>


            <input type="email"name='email' placeholder='Your Email' required onChange={handleInput}/>
            <textarea name="message" rows="7" placeholder='Your Message' required onChange={handleInput}></textarea>
            <button type='submit' className='--btn btn-contact' onClick={sendEmail}>Send Message</button>
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
            <Link href="mailto:akinwumisehinde@gmail.com" target='_blank'><MdEmail className='icon' size={18}/></Link>
              <Link href="mailto:akinwumisehinde@gmail.com" target='_blank'> xlensviz@gmail.com</Link>
            </div>
            <div className='email'>
            <AiOutlineWhatsApp className='icon' size={18}/>
            <Link href="https://api.whatsapp.com/send?phone=23408101126131" target='_blank'><h5> +234(8101126131)</h5></Link>
            </div>
            </div>
          </div>
        </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default Contact