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
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of CS340 Starter Code 
Date: 05/07/2025
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/


//Both CONST statements Modified from AI code, see citation above
const UpdateBrewMethodForm = ({ selectedBrewMethod, backendURL, refreshBrewMethods }) => {

    const {
        'Brew Method ID' : brewMethodID,
        'Brew Method Name' : name,
        'Description' : description
    } = selectedBrewMethod || {};

    return (
        <>
            <h2>Update a Brew Method</h2>
            <form className='cuForm'>

                <label htmlFor="update_brew_method_id">Brew Method ID: </label>
                <input
                    type="text"
                    id="update_brew_method_id"
                    name="update_brew_method_id"
                    //value line copied from AI code, see citation above
                    value={brewMethodID || ""}
                    readOnly
                />

                <label htmlFor="update_brew_method_name">Brew Method Name: </label>
                <input
                    type="text"
                    id="update_brew_method_name"
                    name="update_brew_method_name"
                    value={name || ""}
                    maxLength={100}
                />

                <label htmlFor="update_brew_method_description">Description: </label>
                <textarea
                    id="update_brew_method_description"
                    name="update_brew_method_description"
                    maxLength={500}
                    value={description || ""}
                ></textarea>

                <input type="submit"/>
            </form>
        </>
    );
};

export default UpdateBrewMethodForm;