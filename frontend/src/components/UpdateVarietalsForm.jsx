/* Citation for use of AI Tools
Date: 05/30/2025
Prompts used to adjust the UpdateVarietalsForm and debug code issues
"I udpated the code for the udpate varietal form so that the data could actually be updated via the stored procedure on the backend database, 
but nothing is populating in the boxes like it did before [old code snippet] [new code snippet]", "500 error on submit, debugging steps"
*/

/*Citation for use of AI Tools
Date: 05/14/2025
Prompts used to dynamically pre-populate the UpdateCoffeeBeanForm, then code modified for UpdateVarietalsForm.
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

//Both CONST statements Modified from AI code, see citation above

import React, { useState, useEffect } from 'react';


const UpdateVarietalsForm = ({ selectedVarietal, backendURL, refreshVarietals }) => {
        const [formData, setFormData] = useState({
        update_varietal_id: '',
        update_varietal_name: '', 
        });

        useEffect (() => {
            if (selectedVarietal) {
                setFormData({
                    update_varietal_id: selectedVarietal["Varietal ID"] || '',
                    update_varietal_name: selectedVarietal["Name"] || ''
                });
            }
        }, [selectedVarietal]);

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
            const response = await fetch(backendURL + '/varietals/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Varietal updated successfully.");
                refreshVarietals();
            } else {
                console.error("Error creating varietal.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };
    return (
        <>
            <h2>Update a Varietal</h2>
            <form className='cuForm' onSubmit={handleSubmit}>
                
                <label htmlFor="update_varietal_name">Name: </label>
                <input
                    type="text"
                    name="update_varietal_name"
                    id="update_varietal_name"
                    //value line and readOnly copied from AI code, see citation above
                    value={formData.update_varietal_name}
                    onChange={handleChange}
                    
                />
                
                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateVarietalsForm;
