
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Slider from './component/slider/Slider';
import Home from './component/Home/Home'
import Contact from './contact/Contact';
import Footer from './component/footer/Footer';
import Project from './component/project/Project';
import About from './About/About';
import Project1 from './component/projects route/Project1';
import Project2 from './component/projects route/Project2';
import Project3 from './component/projects route/Project3';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  <Header/>
  <Routes>
  <Route element={<Home/>} path='/'/>
  <Route element={ <Contact/>} path='/contact'/>
  <Route element={ <Project/>} path='/project'/>
  <Route element={ <About/>} path='/about'/>
  

  <Route element={ <Project1/>} path='/itunu'/>
  <Route element={ <Project2/>} path='/interior'/>
  <Route element={ <Project3/>} path='/mhq'/>

 
  </Routes>
  {/* <Footer/> */}
  </BrowserRouter>
  );
}

export default App;
