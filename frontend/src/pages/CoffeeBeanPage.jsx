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
/* Citation for use of AI Tools
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of CS340 Starter Code 
Date: 05/07/2036
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/


import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import TableRow from '../components/TableRow';
import CreateCoffeeBeanForm from '../components/CreateCoffeeBeanForm';
import UpdateCoffeeBeanForm from '../components/UpdateCoffeeBeanForm';
import DeleteCoffeeBeanForm from '../components/DeleteCoffeeBeanForm';


function CoffeeBeanPage({ backendURL }) {

    // Set up state variables to store coffee bean data
    const [coffeeBeans, setCoffeeBeans] = useState([]);
    
    //the two CONST definitions are from AI code, see citation above
    const [selectedCoffeeBean, setSelectedCoffeeBean] = useState(null); 
    const [showUpdateForm, setShowUpdateForm] = useState(false); 
    
    // Function to fetch data from the backend
    const getData = async function () {
        let fetchedCoffeeBeans = [];

        try {
            // Make a GET request to the backend
            const response = await fetch(backendURL + '/coffeebeans');
            
            // Convert the response into JSON format
            const data = await response.json();
            
            // Extract coffee beans from the response
            fetchedCoffeeBeans = data.coffeeBeans;

        } catch (error) {
            // If the API call fails, print the error to the console
            console.log(error);
        }

        // Update the state with the fetched coffee beans
        setCoffeeBeans(fetchedCoffeeBeans);
    };

    // Load table on page load
    useEffect(() => {
        getData();
    }, []);

    //CONST from AI code, see citation above
    const handleOpenUpdateForm = (coffeeBean) => {
        setSelectedCoffeeBean(coffeeBean); 
        setShowUpdateForm(true);
    }

    const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedCoffeeBean(null);
  };


    const handleDeleteCoffeeBean = async (coffeeBean) => {
    try {
      const response = await fetch(`${backendURL}/coffeebeans/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ delete_coffeeBeanID: coffeeBean["Coffee Bean ID"] }),
      });

      if (response.ok) {
        getData();  // Refresh brew methods after successful deletion
      } else {
        console.error('Failed to delete coffee bean');
      }
    } catch (error) {
      console.error('Error deleting coffee bean:', error);
    }
  };

    return (
        <>
            <h1>Coffee Beans</h1>

            <table>
                <thead>
                    <tr>
                        {/* Dynamically create table headers from the keys of the first coffee bean */}
                        {coffeeBeans.length > 0 && Object.keys(coffeeBeans[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th>Update</th> 
                        <th>Delete</th> 
                    </tr>
                </thead>


                <tbody>
                    {/* Map through the coffee beans array and display each coffee bean in a table row */}
                    {coffeeBeans.map((coffeeBeans, index) => (
                        <TableRow
                            key={index}
                            rowObject={coffeeBeans}
                            backendURL={backendURL}
                            refreshData={getData}
                            //onUpdateClick from AI code, see citation above 
                            onUpdateClick={handleOpenUpdateForm}
                            DeleteFormComponent={DeleteCoffeeBeanForm}
                        />
                    ))}
                </tbody>
            </table>
            <CreateCoffeeBeanForm backendURL={backendURL} refreshCoffeeBeans={getData} />
           
           {showUpdateForm && selectedCoffeeBean && (
            <div className="update-form">
                <UpdateCoffeeBeanForm
                selectedCoffeeBean={selectedCoffeeBean}
                backendURL={backendURL}
                refreshCoffeeBeans={getData}
            />
            </div>
           )}
        </>
    );
}

export default CoffeeBeanPage;

// line 102 through 109 generated by AI