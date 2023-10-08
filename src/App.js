
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Slider from './component/slider/Slider';
import Home from './component/Home/Home'

function App() {
  return (
    <BrowserRouter>
  <Header/>
  <Home/>
  </BrowserRouter>
  );
}

export default App;
