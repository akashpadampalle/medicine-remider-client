import axios from "axios";
import Cookies from "js-cookie";


export default axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        Authorization: `Bearer ${Cookies.get('jwtToken')}`,
    }
});