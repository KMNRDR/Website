import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Validation from './Validation';

function Registration() {
    const [email, emailChange] = useState("");
    const [name, nameChange] = useState("");
    const [age, ageChange] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [regex, setRegex] = useState({
        email: '',
        name: '',
        age: ''
    })

    const handleSubmit=(e) => {
        e.preventDefault();
        setErrors(Validation(regex))
        let reg = {email, name, age};
        if(email === '' || name === '' || age === '')
        {
            alert('Please fill in all fields below')
        }
        else
        {
            fetch("http://localhost:8000/user", {
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(reg)
            }).then((res) => {
                alert('Registration Successful')
                navigate('/Home')
            }).catch((err) => {
                alert('Registration Unsuccessful')
            });
        }
    }

    return(
        <div>
            <a href="/Home">
                <button className='btn btn-success'>Home</button>
            </a>
            <em>    </em>
            <a href="/About">
                <button className='btn btn-success'>About Us</button>
            </a>
            <em>    </em>
            <a href="/Work">
                <button className='btn btn-success'>Our Work</button>
            </a>
            <em>    </em>
            <a href="/Gallery">
                <button className='btn btn-success'>Photo Gallery</button>
            </a>
            <em>    </em>
            <a href="/Contact">
                <button className='btn btn-success'>Contact Us</button>
            </a>
            <em>    </em>            
                <h1>Registration Page</h1>
                <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
                <div className='bg-white p-3 rounded w-25'>
                    <form className="container" onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" input value={email} onChange={e => emailChange(e.target.value)} placeholder='Enter Email' name='email' className='form-control rounded-0'/>
                            {errors.email && <span className='text-danger'> {errors.email}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input type="name" input value={name} onChange={e => nameChange(e.target.value)} placeholder='Enter name' name='name' className='form-control rounded-0'/>
                            {errors.name && <span className='text-danger'> {errors.name}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="age"><strong>Age</strong></label>
                            <input type="age" input value={age} onChange={e => ageChange(e.target.value)} placeholder='Enter Age' name='age' className='form-control rounded-0'/>
                            {errors.age && <span className='text-danger'> {errors.age}</span>}
                        </div>
                        <br/>
                        <button type='submit' className='btn btn-success w-100'><strong>Register</strong></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;