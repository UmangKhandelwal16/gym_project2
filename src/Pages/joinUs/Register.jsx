import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './form.module.css'


function Register() {

    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [errors,setErrors]=useState({})

const validateForm=({
name,email,password})=>{
    let errors={}
    if(!name){
        errors.name='name is required'
    }else if(/[^a-zA-Z\s]/.test(name)){
        errors.name='Name should not contain special characters'
    }if(!email){
        errors.name='email is required!'
    }else if(!/@/.test(email)||email.length<13){
        errors.name='email should contain @ and be at least 13 characters long'
    }if (!password){
        errors.password='password is required'
    }
    return errors
}



    //to store value in local storage
    function handleSubmit(e) {
        e.preventDefault()
        const errors=validateForm(input)
        if(Object.keys(errors).length===0){
            localStorage.setItem('user', JSON.stringify(input))
            console.log('User form submitted')
            navigate('/login')
            alert('Registered Succesfully')
        }else{
            alert("Please insert valid input")
            setErrors(errors)
        }
   
    }

    return (
        <section className={style.formSection} >
           
            <form onSubmit={handleSubmit}>
            <h3>Register</h3>
                <div>
                    <label>Email</label><br />
                
                    <input type='text' name='email'  placeholder='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><br />

                    <label>Name</label><br />
                    <input type='text' name='name' placeholder='Your Name' value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><br />

                    <label>Pssword</label><br />
                    <input type='password' name='password' placeholder='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                </div><pre/>
                <button>Submit</button><pre/>
                <p>Already have an account?
                <Link to={'/login'}>
                    <u>Login here</u>
                </Link></p>
            </form>
        </section>

    )
}

export default Register
