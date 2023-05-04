import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './Login.module.css'
import swal from 'sweetalert';
import Home from '../Home/Home';


function Login() {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  //to get value from local storage

  function handleLogin(e) {
    e.preventDefault()
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (input.email === loggedUser.email && input.password === loggedUser.password) {
      localStorage.setItem("loggedIn", true)
      // alert('Loged Succesfully')
      swal({
        title: "Good job!",
        text: "Successfully Logged in!",
        icon: "success",
      });
      navigate('/')
    } else {
      alert("Invalid Email or Password")
    }

  }

  return (
    <section className={style.formSection}>

      

      <form onSubmit={handleLogin}>
      <h3>Login</h3>
        <div>
          <label>Email</label><br />
          <input type='text' name='email' placeholder='email...' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><br />

          <label>Pssword</label><br />
          <input type={'password'} name='password'   placeholder='password...' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><br />
        </div><br />

        <button>Login</button><br /><pre/>
        <br/>

        <h6>Don't have an account ?
        <Link to={'/register'}>
          <u>Register here</u>
        </Link></h6>

      </form>
    </section>
  )
}

export default Login
