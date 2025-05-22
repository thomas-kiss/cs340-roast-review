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

//Both CONST statements Modified from AI code, see citation above
const UpdateVarietalsForm = ({ selectedVarietal, backendURL, refreshVarietals }) => {
        const {
        'Varietal ID': varietalID,
        'Name': name
    } = selectedVarietal || {};
    return (
        <>
            <h2>Update a Varietal</h2>
            <form className='cuForm'>
                <label htmlFor="update_varietalID">Varietal ID: </label>
                <input
                    type="text"
                    name="update_varietalID"
                    id="update_varietalID"
                    //value line and readOnly copied from AI code, see citation above
                    value={varietalID || ""}
                    readOnly
                />
                <label htmlFor="update_varietal_name">Name: </label>
                <input
                    type="text"
                    name="update_varietal_name"
                    id="update_varietal_name"
                    //value line and readOnly copied from AI code, see citation above
                    value={name || ""}
                    
                />
                
                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateVarietalsForm;
