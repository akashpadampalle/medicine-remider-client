import React, { useEffect, useState } from 'react'
import axios from '../api/axios';

const Profile = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
               const res = await axios.get('/users/profile', {withCredentials: true});
               setData(res.data) 
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

  return (
    <div>
        <ul>
            <li>name: {data.firstname + data.lastname}</li>
            <li>username: {data.username}</li>
        </ul>
    </div>
  )
}

export default Profile