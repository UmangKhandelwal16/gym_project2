//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/joinUs/Register';
import Login from './Pages/joinUs/Login';


function App() {
  return (
    <div className="App">
      <Home/>
      <BrowserRouter>
<Routes>
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />
<Route path='/home' element={<Home/>} />
</Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
