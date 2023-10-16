
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Slider from './component/slider/Slider';
import Home from './component/Home/Home'
import Contact from './contact/Contact';
import Footer from './component/footer/Footer';

function App() {
  return (
    <BrowserRouter>
  <Header/>
  <Routes>
  <Route element={<Home/>} path='/'/>
  <Route element={ <Contact/>} path='/contact'/>
 
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
