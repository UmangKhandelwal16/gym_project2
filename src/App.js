import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Programs from './Components/TrainingPrograms/Programs'
import Pricing from './Components/PricingSection/Pricing';
import Login from './Pages/Login/Login'
import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';
import About from './Components/AboutUs/AboutUs';
import Team from './Components/TeamMembers/Team';
import Trainings from './Components/Blogs/Trainings';

function App() {
  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/programs' element = {<Programs/>}/>
       <Route path='/trainings' element={<Trainings/>}/>
        <Route path='/pricing' element = {<Pricing/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path = '/register' element = {<Register/>}/>       
        <Route path = '/team' element = {<Team/>}/>       
  
      </Routes>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
