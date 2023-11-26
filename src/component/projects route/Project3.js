import './project1.scss'
import img1 from '../../assets/Materials for Websites/MHQ PROJECT/Images/RG_CAM002_0001.jpg';
import img2 from '../../assets/Materials for Websites/MHQ PROJECT/Images/Soft Seating_1.jpg'
import img3 from '../../assets/Materials for Websites/MHQ PROJECT/Images/5TH-FLOOR_GENERAL-OFFICE_VIEW_II_04.jpg'
import img4 from '../../assets/Materials for Websites/MHQ PROJECT/Images/PENT  FLOOR_OFFICE_VIEW_02.jpg'
import img5 from '../../assets/Materials for Websites/MHQ PROJECT/Images/5TH-FLOOR_GENERAL-OFFICE_VIEW_08.jpg'
import img6 from '../../assets/Materials for Websites/MHQ PROJECT/Images/5TH-FLOOR_GENERAL-OFFICE_VIEW_II_02.jpg'
import img7 from '../../assets/Materials for Websites/MHQ PROJECT/Images/6TH-FLOOR_RECEPTION_VIEW_01.jpg'
// import vid1 from '../../assets/Materials for Websites/MHQ PROJECT/Videos/vid.mp4'


const Project3 = () => {
  return (
    <div className='project-home'>
     
    <div className='project-inner'>
      <div className='first-image'>
       <img src={img2}/>
        {/* <video autoPlay muted loop src='https://drive.google.com/file/d/1TZ2AphZnimx-RRfvreMNeIAAvR8d_KjO/view?usp=drive_link'></video> */}
      </div>
      <div >
        <h1>MHQ Project</h1>
        <p>location</p>
        <p>Year</p>
        

      </div>

      

    </div>
    <div className='second-image'>
      <div className='pic'>
      <img  src={img1} loading="lazy"/>
      </div>
      <div className='pic'>
        <img src={img3} loading="lazy"/>
      </div>
      <div className='pic'>
        <img src={img4} loading="lazy"/>
      </div>
      <div className='pic'>
        <img src={img5} loading="lazy"/>
      </div>
      <div className='pic'>
        <img src={img6} loading="lazy"/>
      </div>
      <div className='pic'>
        <img src={img7} loading="lazy"/>
      </div>


    </div>
    
  </div>
  )
}

export default Project3