import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar/Navbar';
import backgroundImage from "../assets/images/Pawsbackground.png";
import './UploadPet.css';

const UploadPet = () => {
    const [form, setForm] = useState({ name: '', animalType: '', age: '', breed: '', sex: '', colour: '' });
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user._id) {
            setUserId(user._id);
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { ...form, userListed: userId, animalType: form.animalType.toLowerCase() };
            await axios.post('/api/petlisting/add', data);
            alert('Pet listing added successfully');
        } catch (error) {
            console.error('Error adding pet listing', error);
            alert('Failed to add pet listing');
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
        >
            <NavBar />
            <div className="upload-pet-container">
                <h2>Upload Pet Listing</h2>
                <form className="upload-pet-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Pet Name" value={form.name} onChange={handleChange} required />
                    <select name="animalType" value={form.animalType} onChange={handleChange} required>
                        <option value="">Select Animal Type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="rabbit">Rabbit</option>
                        <option value="bird">Bird</option>
                        <option value="reptile">Reptile</option>
                        <option value="other">Other</option>
                    </select>
                    <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
                    <input type="text" name="breed" placeholder="Breed" value={form.breed} onChange={handleChange} required />
                    <select name="sex" value={form.sex} onChange={handleChange} required>
                        <option value="">Select Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input type="text" name="colour" placeholder="Colour" value={form.colour} onChange={handleChange} required />
                    <button type="submit">Add Listing</button>
                </form>
            </div>
        </div>
    );
};

export default UploadPet;
