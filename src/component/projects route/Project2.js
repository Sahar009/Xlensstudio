import './project1.scss'
import img1 from '../../assets/Materials for Websites/BURUM/IMAGES/CAM 3.jpg';
import img2 from '../../assets/Materials for Websites/BURUM/IMAGES/CAM_1.jpg'
import img3 from '../../assets/Materials for Websites/BURUM/IMAGES/NIGHT/002.jpg'
import img4 from '../../assets/Materials for Websites/BURUM/IMAGES/EXTERIORS/003-02.jpg'
import img5 from '../../assets/Materials for Websites/BURUM/IMAGES/EXTERIORS/BURUM-AERIAL-NIGHT.jpg'
import img6 from '../../assets/Materials for Websites/BURUM/IMAGES/NIGHT/003.jpg'
import img7 from '../../assets/Materials for Websites/BURUM/IMAGES/EXTERIORS/006.jpg'



const Project2 = () => {
  return (
    <div className='project-home'>
     
    <div className='project-inner'>
      <div className='first-image'>
        <img  src={img1}/>

      </div>
      <div >
        <h1>Bruhm 222Design</h1>
        <p>location</p>
        <p>Year</p>
        

      </div>

      

    </div>
    <div className='second-image'>
      <div className='pic'>
        <img src={img2}/>
      </div>
      <div className='pic'>
        <img src={img3}/>
      </div>
      <div className='pic'>
        <img src={img4}/>
      </div>
      <div className='pic'>
        <img src={img5}/>
      </div>
      <div className='pic'>
        <img src={img6}/>
      </div>
      <div className='pic'>
        <img src={img7}/>
      </div>


    </div>
    
  </div>
  )
}

export default Project2