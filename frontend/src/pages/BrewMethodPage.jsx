/* Citation for use of AI Tools
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of AI Tools 
Date: 05/14/2025
Adapted from the code in CoffeeBeans.jsx (see below citation)
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
Date: 05/07/2025
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/

import { useState, useEffect } from 'react';
import TableRow from '../components/TableRow';
import CreateBrewMethodForm from '../components/CreateBrewMethodForm';
import UpdateBrewMethodForm from '../components/UpdateBrewMethodForm';
import DeleteBrewMethodForm from '../components/DeleteBrewMethodForm';

function BrewMethodPage({ backendURL }) {
  const [brewMethods, setBrewMethods] = useState([]);
  const [selectedBrewMethod, setSelectedBrewMethod] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // Fetch all brew methods
  const getData = async () => {
    try {
      const response = await fetch(`${backendURL}/brew-methods`);
      const data = await response.json();
      setBrewMethods(data.brewMethods || []);
    } catch (error) {
      console.error('Error fetching brew methods:', error);
      setBrewMethods([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Open update form with selected brew method
  const handleOpenUpdateForm = (brewMethod) => {
    setSelectedBrewMethod(brewMethod);
    setShowUpdateForm(true);
  };

  // Close update form
  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedBrewMethod(null);
  };

  return (
    <>
      <h1>Brew Methods</h1>
      <table>
        <thead>
          <tr>
            {brewMethods.length > 0 &&
              Object.keys(brewMethods[0]).map((header, index) => <th key={index}>{header}</th>)}
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {brewMethods.map((brewMethod, index) => (
            <TableRow
              key={index}
              rowObject={brewMethod}
              backendURL={backendURL}
              refreshData={getData}
              onUpdateClick={handleOpenUpdateForm}
              DeleteFormComponent={DeleteBrewMethodForm}

            />
          ))}
        </tbody>
      </table>

      {/* Create Brew Method Form is always visible */}
      <CreateBrewMethodForm backendURL={backendURL} refreshBrewMethods={getData} />

      {/* Conditionally render UpdateBrewMethodForm */}
      {showUpdateForm && selectedBrewMethod && (
        <UpdateBrewMethodForm
          selectedBrewMethod={selectedBrewMethod}
          backendURL={backendURL}
          refreshBrewMethods={getData}
          onClose={handleCloseUpdateForm}
        />
      )}
    </>
  );
}

export default BrewMethodPage;
