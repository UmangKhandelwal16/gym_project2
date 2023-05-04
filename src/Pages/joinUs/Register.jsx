import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './form.module.css'
import swal from 'sweetalert'


function Register() {

    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
  //  const [isRegistered, setIsRegistered] = useState(false) 



    const validateForm = ({
        name, email, password }) => {
        let errors = {}
        if (!name) {
            errors.name = 'name is required'
        } else if (/[^a-zA-Z\s]/.test(name)) {
            errors.name = 'Name should not contain special characters'
        } if (!email) {
            errors.email = 'email is required!'
        } else if (!/@/.test(email) || email.length < 13) {
            errors.email = 'email should contain @ and be at least 13 characters long'
        } if (!password ) {
            errors.password = 'password is required'
        }
        return errors
    }



    //to store value in local storage
    function handleSubmit(e) {
        e.preventDefault()
        const errors = validateForm(input)
        if (Object.keys(errors).length === 0) {
            localStorage.setItem('user', JSON.stringify(input))
            console.log('User form submitted')
            navigate('/login')
//            setIsRegistered(true)
            swal({
                title: "Good job!",
                text: "Registered Successfully!",
                icon: "success",
              });

        } else {
            // alert("Please insert valid input")
            setErrors(errors)
        }

    }

    return (
        
        <section className={style.formSection}  >

            <form className={style.formContainer} onSubmit={handleSubmit}>
                <h3>Register</h3>
                <div>
                    <div>
                        <label>Email</label><br />

                        <input type='text' name='email' placeholder='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><br />
                        {errors.email && <h5>{errors.email}</h5>}
                    </div>

                    <div>
                        <label>Name</label><br />
                        <input type='text' name='name' placeholder='Your Name' value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} /><br />
                        {errors.name && <h5>{errors.name}</h5>}
                    </div>

                    <div>
                        <label className={style.label}>Pssword</label><br />
                        <input type='password' name='password' placeholder='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                        {errors.password && <h5>{errors.password}</h5>}
                    </div>

                </div><pre />
                <button>Submit</button><pre />
                <h6>Already have an account?
                    <Link to={'/login'}>
                        <u>Login here</u>
                    </Link></h6>
            </form>
        </section>

    )
}

export default Register
