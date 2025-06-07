/* Citation for use of AI Tools
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
*/

/*Citation for use of AI Tools
Date: 05/14/2025
Prompts used to allow the Update form to show up dynamically, and to pass the record's details to the update form so that it can pre-populated. 
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.
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

/*
Citation for use of AI Tools
Date: 6/6/2025
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code. 
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain
the dyanmic delete form but it's currently erroring out. provide debugging suggestions."
AI Source URL: https://chatgpt.com
*/


import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import TableRow from '../components/TableRow';
import CreateVarietalForm from '../components/CreateVarietalForm';
import UpdateVarietalsForm from '../components/UpdateVarietalsForm';
import DeleteVarietalForm from '../components/DeleteVarietalForm';

function VarietalPage({ backendURL }) {

    // Set up state variables to store varietal data
    const [varietals, setVarietals] = useState([]);

    //the two CONST definitions are from AI code, see citation above
    const [selectedVarietal, setSelectedVarietal] = useState(null); 
    const [showUpdateForm, setShowUpdateForm] = useState(false); 
    
    // Function to fetch data from the backend
    const getData = async function () {
        let fetchedVarietals = [];

        try {
            // Make a GET request to the backend
            const response = await fetch(backendURL + '/varietals');
            
            // Convert the response into JSON format
            const data = await response.json();
            
            // Extract varietals from the response
            fetchedVarietals = data.varietals;

        } catch (error) {
            // If the API call fails, print the error to the console
            console.log(error);
        }

        // Update the state with the fetched varietals
        setVarietals(fetchedVarietals);
    };

    // Load table on page load
    useEffect(() => {
        getData();
    }, []);

    //CONST from AI code, see citation above
    const handleOpenUpdateForm = (varietal) => {
        setSelectedVarietal(varietal); 
        setShowUpdateForm(true);
    }

    return (
        <>
            <h1>Varietals</h1>

            <table>
                <thead>
                    <tr>
                        {/* Dynamically create table headers from the keys of the first varietal */}
                        {varietals.length > 0 && Object.keys(varietals[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Map through the varietals array and display each varietal in a table row */}
                    {varietals.map((varietals, index) => (
                        <TableRow
                            key={index}
                            rowObject={varietals}
                            backendURL={backendURL}
                            refreshData={getData}
                            //onUpdateClick from AI code, see citation above 
                            onUpdateClick={handleOpenUpdateForm}
                            DeleteFormComponent={DeleteVarietalForm}
                        />
                    ))}
                </tbody>
            </table>

            <CreateVarietalForm backendURL={backendURL} refreshVarietals={getData} />

                                   
           {showUpdateForm && selectedVarietal && (
            <div className="update-form">
                <UpdateVarietalsForm
                selectedVarietal={selectedVarietal}
                backendURL={backendURL}
                refreshVarietals={getData}
            />
            </div>
           )}
        </>
    );
}

export default VarietalPage;

// line 102 through 109 generated by AI