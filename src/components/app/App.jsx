
import { LInk, NavLink, Route , Routes} from "react-router-dom"
import './App.scss';

import AboutPages from "../pages/AboutPages"; 
import Contact from "../pages/Contact";
import HomePages from "../component/homePages/HomePages";
import MainPages from "../pages/MainPages";
import Portfoliyo from "../pages/Portfoliyo";
import ServicesPages from "../pages/ServicesPages";
import "../pages/styles.css"
import { useEffect } from 'react';



function App() {
  useEffect(() =>{
    if(localStorage.getItem('mode')==='true'){
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
    }
  })
  return (
    <>
      <HomePages />
      <NavLink to="/about"></NavLink>
      <NavLink to="/contact"></NavLink>
      <NavLink to="/portfoliyo"></NavLink>
      

      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/about" element={<AboutPages/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfoliyo" element={<Portfoliyo />} />
        <Route path="/services" element={<ServicesPages />} />
      </Routes>
    </>
  )

}

export default App;
