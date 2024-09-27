import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoArrowRedoOutline } from "react-icons/io5";
import './login.scss'
import  background from '../../assets/001.jpg'
import logo from '../../assets/Final Logo white_ .png'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='loginContainer'>
       <div className='login_fl_div'>
        <div className='login_left_div'>
         <div className='background_img_div'><img src={background} alt='background'/></div>
         <div className='background_overlay_div'>
            <div className='overlay_content_div'><div><img src={logo} alt='logo' className='logo_img'/></div>
            <Link to='/'> <button>Back to website <IoArrowRedoOutline /></button>  </Link></div>
            
            </div>
        </div>
         <div className='login_right_div'>
            <div className='formfield'>
                 <h1>Login account</h1>
            <form >
                <div className='input_content'>
                   <label >Email:</label>
                   <div className='input_div'> <input className='input' type="email" required></input></div>
                </div>
                <div className='input_content'>
                   <label >Password:</label>
                   <div className='input_div'><input className='input' type="password" required></input></div>  
                </div >
                <div className='submit_div'><input type="submit"></input></div>
               
            </form>
            <Link><p className='link_p_tag'>don't have an account before?</p> </Link>

            <div className='p_div'> <p> or login with</p></div>

            <div className='google_btn'><button><FcGoogle size={30}/>Google</button></div>
            </div>
                
         </div>
       </div>
    </div>
  )
}

export default Login