import React, { useState } from 'react'
import axios from '../api/axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        cpassword: '',
    });

    function handleSubmit(e){
        e.preventDefault();
        axios.post('/users/create/', formData)
        .then((res) => {
            Cookies.set('jwtToken', res.data.jwtToken);
            navigate('/profile', {replace: true});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='firstName'
                placeholder='first name ...'
                value={formData.firstname}
                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                required
            />
            <input
                type="text"
                name='lastName'
                placeholder='last name ...'
                value={formData.lastname}
                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                required
            />
            <input
                type="text"
                name='username'
                placeholder='username ...'
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
            />
            <input
                type="password"
                name='password'
                placeholder='password ...'
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
            />
            <input
                type="password"
                name='cpassword'
                placeholder='confirm password ...'
                value={formData.cpassword}
                onChange={(e) => setFormData({ ...formData, cpassword: e.target.value })}
                required
            />
            <input type="submit" value="Sign Up" />
        </form>
    )
}

export default SignupForm