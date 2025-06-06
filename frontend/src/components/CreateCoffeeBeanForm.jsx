
import React, { useState } from 'react';



const CreateCoffeeBeanForm = ({ backendURL, refreshCoffeeBeans }) => {
    const [formData, setFormData] = useState({
        roastName: '',
        brandName: '', 
        singleOriginCountry: '',
        roastLevel: '', 
        providedTastingNotes: ''
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
            const response = await fetch(`${backendURL}/coffeebeans/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("cofee bean created successfully.");
                refreshCoffeeBeans(); // refresh the list
                setFormData({ brandName: '', roastName: '', singleOriginCountry: '', roastLevel:'', providedTastingNotes:'' }); // reset form
            } else {
                console.error("Error creating coffee bean.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <>
            <h2>Create a Coffee Bean</h2>

            <form className='cuForm' onSubmit={handleSubmit}>
                <label htmlFor="create_coffeeBean_brandName">Brand Name: </label>
                <input
                    type="text"
                    name="brandName"
                    id="brandName"
                    required
                    maxLength={45}
                    value={formData.brandName}
                    onChange={handleChange}
                />

                <label htmlFor="create_coffeeBean_roastName">Roast Name: </label>
                <input
                    type="text"
                    name="roastName"
                    id="roastName"
                    maxLength={45}
                    value={formData.roastName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="create_coffeeBean_singleOriginCountry">Origin: </label>
                <input
                    type="text"
                    name="singleOriginCountry"
                    id="singleOriginCountry"
                    maxLength={225}
                    value={formData.singleOriginCountry}
                    onChange={handleChange}
                />

                <label htmlFor="create_coffeeBean_roastLevel">Roast Level: </label>
                <input
                    type="text"
                    name="roastLevel"
                    id="roastLevel"
                    maxLength={45}
                    value={formData.roastLevel}
                    onChange={handleChange}
                />

                <label htmlFor="create_coffeeBean_providedTastingNotes">Provided Tasting Notes: </label>
                <textarea
                    name="providedTastingNotes"
                    id="providedTastingNotes"
                    maxLength={500}
                    value={formData.providedTastingNotes}
                    onChange={handleChange}
                />

                <input type="submit" />
            </form>
        </>
    );
};

export default CreateCoffeeBeanForm;
