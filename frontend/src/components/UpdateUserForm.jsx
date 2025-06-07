/*
Citation for use of AI Tools 
Date: 05/15/2025
Adapted from the code in UpdateCoffeeBeanForm.jsx (see below citation)
*/

/*Citation for use of AI Tools
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

const UpdateUserForm = ({ selectedUser, backendURL, refreshUsers, onClose }) => {

    //Both CONST statements Modified from AI code, see citation above
    const [formData, setFormData] = useState({
        update_user_id: '',
        update_user_userName: '',
        update_user_email: '',
        update_user_firstName: '',
        update_user_lastName: '',
        update_user_location: '',
        update_user_joinDate: ''
    });

    // useEffect populates form fields based on selectedUser
    useEffect(() => {
        if (selectedUser) {
            setFormData({
                update_user_id: selectedUser["User ID"] || '',
                update_user_userName: selectedUser["Username"] || '',
                update_user_email: selectedUser["Email"] || '',
                update_user_firstName: selectedUser["First Name"] || '',
                update_user_lastName: selectedUser["Last Name"] || '',
                update_user_location: selectedUser["Location"] || '',
                update_user_joinDate: selectedUser["Join Date"]?.slice(0, 16) || ''
            });
        }
    }, [selectedUser]);

    // Handles typing into form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handles submission of update form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${backendURL}/users/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("User updated successfully");
                refreshUsers();  // refresh table data
                onClose();       // close update form
            } else {
                console.error("Failed to update user");
            }
        } catch (error) {
            console.error("Error during update:", error);
        }
    };

    return (
        <>
            <h2>Update a User</h2>
            <form className="cuForm" onSubmit={handleSubmit}>
                <label htmlFor="update_user_id">User ID: </label>
                <input
                    type="text"
                    id="update_user_id"
                    name="update_user_id"
                    value={formData.update_user_id}
                    readOnly
                    // value line and readOnly copied from AI code, see citation above
                />

                <label htmlFor="update_user_userName">Username: </label>
                <input
                    type="text"
                    id="update_user_userName"
                    name="update_user_userName"
                    value={formData.update_user_userName}
                    onChange={handleChange}
                />

                <label htmlFor="update_user_email">Email: </label>
                <input
                    type="email"
                    id="update_user_email"
                    name="update_user_email"
                    value={formData.update_user_email}
                    onChange={handleChange}
                />

                <label htmlFor="update_user_firstName">First Name: </label>
                <input
                    type="text"
                    id="update_user_firstName"
                    name="update_user_firstName"
                    value={formData.update_user_firstName}
                    onChange={handleChange}
                />

                <label htmlFor="update_user_lastName">Last Name: </label>
                <input
                    type="text"
                    id="update_user_lastName"
                    name="update_user_lastName"
                    value={formData.update_user_lastName}
                    onChange={handleChange}
                />

                <label htmlFor="update_user_location">Location: </label>
                <input
                    type="text"
                    id="update_user_location"
                    name="update_user_location"
                    value={formData.update_user_location}
                    onChange={handleChange}
                />

                <label htmlFor="update_user_joinDate">Join Date: </label>
                <input
                    type="datetime-local"
                    id="update_user_joinDate"
                    name="update_user_joinDate"
                    value={formData.update_user_joinDate}
                    onChange={handleChange}
                />

                <input type="submit" value="Update User" />
            </form>
        </>
    );
};

export default UpdateUserForm;
