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

  // State to store list of brew methods
  const [brewMethods, setBrewMethods] = useState([]);
  
  // State to track currently selected brew method for update form
  const [selectedBrewMethod, setSelectedBrewMethod] = useState(null);

  // Fetch brew methods from backend API
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

  // Handler when Update button is clicked for a brew method
  const handleUpdateClick = (brewMethod) => {
    setSelectedBrewMethod(brewMethod);
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Brew Methods</h1>

      <table>
        <thead>
          <tr>
            {brewMethods.length > 0 && Object.keys(brewMethods[0]).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
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
              refreshBrewMethods={getData}  // <-- unified prop name
              onUpdateClick={handleUpdateClick} // Pass handler directly
              DeleteForm={DeleteBrewMethodForm} // Pass update handler
            />
          ))}
        </tbody>
      </table>

      <CreateBrewMethodForm backendURL={backendURL} refreshBrewMethods={getData} />

      {selectedBrewMethod && (
        <UpdateBrewMethodForm
          selectedBrewMethod={selectedBrewMethod}
          backendURL={backendURL}
          refreshBrewMethods={getData}
        />
      )}
    </>
  );
}

export default BrewMethodPage;