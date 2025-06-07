/*
Citation for CREATE UserForm
Date: 06/06/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/

import React, { useState } from 'react';

const CreateUserForm = ({ backendURL, refreshUsers }) => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    location: '',
    joinDate: ''
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
      const response = await fetch(`${backendURL}/users/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User created successfully.");
        refreshUsers();               // refresh user list after creation
        setFormData({
          userName: '',
          email: '',
          firstName: '',
          lastName: '',
          location: '',
          joinDate: ''
        });                           // reset form
      } else {
        console.error("Error creating user.");
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <>
      <h2>Create a User</h2>

      <form className='cuForm' onSubmit={handleSubmit}>

        <label htmlFor="userName">Username: </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
        />

        <label htmlFor="joinDate">Join Date: </label>
        <input
          type="datetime-local"
          name="joinDate"
          id="joinDate"
          value={formData.joinDate}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Create" />
      </form>
    </>
  );
};

export default CreateUserForm;
