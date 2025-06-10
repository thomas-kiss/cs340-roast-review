/*
Citation for use of AI Tools 
Adapted from the code in UpdateCoffeeBeanForm.jsx 
Date: 05/14/2025
Prompts used to dynamically pre-populate the UpdateCoffeeBeanForm
Note: This was done after the CoffeeBeans page and UpdateCoffeeBeanForm was created, and after the Update button was worked into the table component
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating. What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of CS340 Starter Code 
Date: 05/07/2025
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/

import React, { useState, useEffect } from 'react';

const UpdateBrewMethodForm = ({ selectedBrewMethod, backendURL, refreshBrewMethods, onClose }) => {

    const [formData, setFormData] = useState({
        update_brew_method_id: '',
        update_brew_method_name: '',
        update_brew_method_description: ''
    });

    useEffect(() => {
        if (selectedBrewMethod) {
            setFormData({
                update_brew_method_id: selectedBrewMethod["Brew Method ID"] || '',
                update_brew_method_name: selectedBrewMethod["Brew Method Name"] || '',
                update_brew_method_description: selectedBrewMethod["Description"] || ''
            });
        }
    }, [selectedBrewMethod]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${backendURL}/brew-methods/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("Brew method updated successfully");
                refreshBrewMethods();  
                onClose();             
            } else {
                console.error("Failed to update brew method");
            }
        } catch (error) {
            console.error("Error during update:", error);
        }
    };

    return (
        <>
            <h2>Update a Brew Method</h2>
            <form className="cuForm" onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    id="update_brew_method_id"
                    name="update_brew_method_id"
                    value={formData.update_brew_method_id}
                />

                <label htmlFor="update_brew_method_name">Brew Method Name: </label>
                <input
                    type="text"
                    id="update_brew_method_name"
                    name="update_brew_method_name"
                    value={formData.update_brew_method_name}
                    onChange={handleChange}
                />

                <label htmlFor="update_brew_method_description">Description: </label>
                <textarea
                    id="update_brew_method_description"
                    name="update_brew_method_description"
                    value={formData.update_brew_method_description}
                    onChange={handleChange}
                    maxLength={500}
                ></textarea>

                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateBrewMethodForm;
