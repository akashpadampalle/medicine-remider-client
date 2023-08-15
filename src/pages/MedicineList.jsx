import React, { useEffect, useState } from 'react'
import axios from '../api/axios';

const MedicineList = () => {

    const [data, setData] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('/medicines/', { withCredentials: true });
                setData(res.data.user.medicines)
            } catch (error) {
                console.log(error);
            }

        }

        fetchData();
    })

    const removeMedicine = (index) => {
        const id = data[index]._id;
        const oldData = data;
        const newData = data.filter((item, i) => i != index);
        setData(newData);

        const removeRequest = async () => {
            try {
                await axios.delete(`/medicines/${id}`);
            } catch (error) {
                console.log(error);
                setData(oldData);
            }
        }

        removeRequest();

    }

    return (
        <>
            <h1>Medicines List</h1>
            {data && (
                <ul>
                    {data.map((medicine, index) => (
                        <li key={index}>
                            <h2> <button onClick={() => removeMedicine(index)}>X</button> {medicine.name}</h2>
                            <p>
                                {medicine.schedule + ' ' + medicine.dosage}
                            </p>
                            <p>
                                {medicine.notes}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default MedicineList