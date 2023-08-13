import { useState } from "react";
import axios from '../api/axios';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    function handlesubmit(e) {
        e.preventDefault();
        // axios.post('/users/login/', formData)
        //     .then((res) => console.log(res))
        //     .catch((error) => console.log(error));
        const fetchData = async () => {
            try {
                const res = await axios.post('/users/login/', formData);
                Cookies.set('jwtToken', res.data.jwtToken);
                navigate('/profile');
            } catch (error){
                console.log(error);
            }
        }

        fetchData();
    }

    return (
        <form onSubmit={handlesubmit}>
            <input
                type="text"
                placeholder="username...."
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
            />
            <input
                type="password"
                placeholder="password..."
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
            />
            <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm