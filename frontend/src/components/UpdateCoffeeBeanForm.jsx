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

import { useEffect } from "react";

//Both CONST statements Modified from AI code, see citation above
const UpdateCoffeeBeanForm = ({ selectedCoffeeBean, backendURL, refreshCoffeeBeans }) => {
        const {
        'Coffee Bean ID': coffeeBeanID,
        'Brand Name': brandName,
        'Roast Name': roastName,
        'Origin': singleOriginCountry,
        'Roast Level': roastLevel,
        'Provided Tasting Notes': providedTastingNotes
    } = selectedCoffeeBean || {};

    return (
        <>
            <h2>Update a Coffee Bean</h2>
            <form className='cuForm'>
                <label htmlFor="update_coffeeBean_id">Coffee Bean ID: </label>
                <input
                    type="text"
                    name="update_coffeeBean_id"
                    id="update_coffeeBean_id"
                    //value line copied from AI code, see citation above
                    value={coffeeBeanID || ""}
                    readOnly
                />
                
                <label htmlFor="update_coffeeBeans_brandName">Brand Name: </label>
                <input
                    type="text"
                    name="update_coffeeBeans_brandName"
                    id="update_coffeeBeans_brandName"
                    value={brandName || ""}
                    maxLength={45}
                />

                <label htmlFor="update_coffeeBeans_roastName">Roast Name: </label>
                <input
                    type="text"
                    name="update_coffeeBeans_roastName"
                    id="update_coffeeBeans_roastName"
                    value={roastName || ""}
                    maxLength={45}
                />

                <label htmlFor="update_coffeeBeans_singleOriginCountry"> Origin: </label>
                <input
                    type="text"
                    name="update_coffeeBeans_singleOriginCountry"
                    id="update_coffeeBeans_singleOriginCountry"
                    value = {singleOriginCountry || ""}
                    maxLength={225}
                />

                <label htmlFor="update_coffeBeans_roastLevel">Roast Level: </label>
                <input
                    type="text"
                    name="update_coffeBeans_roastLevel"
                    id="update_coffeBeans_roastLevel"
                    value = {roastLevel || ""}
                    maxLength={45}
                />

                <label htmlFor="update_coffeeBeans_proviedTastingNotes">Provided Tasting Notes: </label>
                <input
                    type="text"
                    name="update_coffeeBeans_proviedTastingNotes"
                    id="update_coffeeBeans_proviedTastingNotes"
                    value ={providedTastingNotes || ""}
                    maxLength={500}
                />

                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateCoffeeBeanForm;
