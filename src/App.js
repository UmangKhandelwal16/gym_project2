import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import GymAboutUs from './Components/AboutUs/AboutUs';
import Programs from './Components/TrainingPrograms/Programs'
import Blogs from './Components/Blogs/Blogs';
import Pricing from './Components/PricingSection/Pricing';
import Login from './Pages/Login/Login'
import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';

function App() {
  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<GymAboutUs/>}/>
        <Route path='/programs' element = {<Programs/>}/>
        <Route path='/blogs' element = {<Blogs/>}/>
        <Route path='/pricing' element = {<Pricing/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path = '/register' element = {<Register/>}/>       
      </Routes>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
