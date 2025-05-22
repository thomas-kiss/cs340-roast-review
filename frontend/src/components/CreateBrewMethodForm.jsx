import React, { useState } from 'react';

const CreateBrewMethodForm = ({ backendURL, refreshBrewMethods }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: ''
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
            const response = await fetch(`${backendURL}/brew-methods/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Brew method created successfully.");
                refreshBrewMethods(); // refresh the list
                setFormData({ name: '', description: '' }); // reset form
            } else {
                console.error("Error creating brew method.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <>
            <h2>Create a Brew Method</h2>

            <form className='cuForm' onSubmit={handleSubmit}>
                <label htmlFor="name">Brew Method Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="description">Description: </label>
                <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>

                <input type="submit" value="Create" />
            </form>
        </>
    );
};

export default CreateBrewMethodForm;