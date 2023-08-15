import React, { useState } from 'react'
import axios from '../api/axios';

const MedicineForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        dosage: '',
        schedule: '',
        notes: '',
    })

    function handleSubmit(e) {
        e.preventDefault();
        try {
            const sendData = async () => {
                const res = await axios.post('/medicines/create', formData, {withCredentials: true});
                setFormData({
                    name: '',
                    dosage: '',
                    schedule: '',
                    notes: '',
                })
            }
            sendData();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder='medicine name....'
                required
            />
            <input
                type="text"
                value={formData.dosage}
                onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                placeholder='dosage....'
                required
            />
            <input
                type="time"
                value={formData.schedule}
                onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                placeholder='intake time...'
                required
            />
            <textarea
                cols="30"
                rows="10"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder='additional notes'>
            </textarea>
            <input type="submit" value="add" />
        </form>
    )
}

export default MedicineForm