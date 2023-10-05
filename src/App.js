
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Slider from './component/slider/Slider';

function App() {
  return (
    <BrowserRouter>
  <Header/>
  <Slider/>
  </BrowserRouter>
  );
}

export default App;
