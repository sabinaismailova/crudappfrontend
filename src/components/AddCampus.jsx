import React, { useState } from "react";

const AddCampus = ({ onSubmit }) => {
    const [newCampus, setnewCampus] = useState({
        name: '',
        address: '',
        description: '',
        imageUrl: ''
    });

    const HandleInputChange = (event) => {
        setnewCampus({
            ...newCampus,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(newCampus);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={newCampus.name} onChange={HandleInputChange} required/>

            </label>
            <label>
                Address:
                <input type="text" name="address" value={newCampus.address} onChange={HandleInputChange} required/>

            </label>
            <label>
                Image URL:
                <input type="text" name="imageUrl" value={newCampus.imageUrl} onChange={HandleInputChange} />
            </label>
            <label>
                Description:
                <textarea name="description" value={newCampus.description } onChange={HandleInputChange} />
            </label>
            <button type="submit">Add Campus</button>
        </form>
    );
};
export default AddCampus;