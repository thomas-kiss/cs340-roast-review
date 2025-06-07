/*Citation for use of AI Tools
Date: 05/14/2025
Prompts used to dynamically pre-populate the UpdateCoffeeBeanForm
Note: This was done after the CoffeeBeans page and UpdateCoffeeBeanForm was created, and after the Update button was worked into the table component
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of CS340 Starter Code 
Date: 05/07/2036
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/




import React, { useState, useEffect } from 'react';


const UpdateCoffeeBeanForm = ({ selectedCoffeeBean, backendURL, refreshCoffeeBeans }) => {
        const [formData, setFormData] = useState({
            update_coffeeBeanID: '',
            update_brandName: '',
            update_roastName: '',
            update_singleOriginCountry: '',
            update_roastLevel: '',
            update_providedTastingNotes: ''
        });

        useEffect (() => {
            if (selectedCoffeeBean) {
                setFormData({
                    update_coffeeBeanID: selectedCoffeeBean["Coffee Bean ID"] || '',
                    update_brandName: selectedCoffeeBean["Brand Name"] || '',
                    update_roastName: selectedCoffeeBean["Roast Name"] ||'',
                    update_singleOriginCountry: selectedCoffeeBean["Origin"]|| '',
                    update_roastLevel: selectedCoffeeBean["Roast Level"]||'',
                    update_providedTastingNotes: selectedCoffeeBean["Provided Tasting Notes"] || ''
                });
            }
        }, [selectedCoffeeBean]);

        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle the update logic here

        try {
            const response = await fetch(backendURL + '/coffeebeans/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Coffee bean updated successfully.");
                refreshCoffeeBeans();
            } else {
                console.error("Error updating coffee bean.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <>
            <h2>Update a Coffee Bean</h2>
            <form className='cuForm' onSubmit={handleSubmit}>

                <label htmlFor="update_brandName">Brand Name: </label>
                <input
                    type="text"
                    name="update_brandName"
                    id="update_brandName"
                    value={formData.update_brandName}
                    onChange={handleChange}
                    maxLength={45}
                />

                <label htmlFor="update_roastName">Roast Name: </label>
                <input
                    type="text"
                    name="update_roastName"
                    id="update_roastName"
                    value={formData.update_roastName}
                    onChange={handleChange}
                    maxLength={45}
                />

                <label htmlFor="update_singleOriginCountry"> Origin: </label>
                <input
                    type="text"
                    name="update_singleOriginCountry"
                    id="update_singleOriginCountry"
                    value={formData.update_singleOriginCountry}
                    onChange={handleChange}
                    maxLength={225}
                />

                <label htmlFor="update_roastLevel">Roast Level: </label>
                <input
                    type="text"
                    name="update_roastLevel"
                    id="update_roastLevel"
                    value={formData.update_roastLevel}
                    onChange={handleChange}
                    maxLength={45}
                />

                <label htmlFor="update_providedTastingNotes">Provided Tasting Notes: </label>
                <textarea
                    name="update_providedTastingNotes"
                    id="update_providedTastingNotes"
                    maxLength={500}
                    value={formData.update_providedTastingNotes}
                    onChange={handleChange}
                />


                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateCoffeeBeanForm;
