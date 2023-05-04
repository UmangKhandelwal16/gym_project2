import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './HomePage/Home';
import Pricing from './HomePage/Pricing';
import About from './HomePage/About';
import NavBar from './HomePage/NavBar';

function App() {
  return (
    <>    
      <NavBar/>  
      <Home/>
      <About/>
      <Pricing/>
    </>
  );
}

export default App;
