/*
Citation for CREATE BrewMethodForm
Date: 05/21/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/


import React, { useState } from 'react';

const CreateVarietalForm = ({ backendURL, refreshVarietals }) => {
    const [formData, setFormData] = useState({
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${backendURL}/varietals/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Varietal created successfully.");
                refreshVarietals(); // refresh the list
                setFormData({ name: ''}); // reset form
            } else {
                console.error("Error creating varietal.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <>
            <h2>Create a Varietal</h2>

            <form className='cuForm' onSubmit={handleSubmit}>
                <label htmlFor="create_varietal_name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </>
    );
};

export default CreateVarietalForm;
