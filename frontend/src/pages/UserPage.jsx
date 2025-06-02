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
import CreateUserForm from '../components/CreateUserForm';
import UpdateUserForm from '../components/UpdateUserForm';
import DeleteUserForm from '../components/DeleteUserForm';

function UserPage({ backendURL }) {
  // State to store user data fetched from the backend
  const [users, setUsers] = useState([]);

  // State to track the selected user for updating
  const [selectedUser, setSelectedUser] = useState(null);

  // State to control whether the update form is shown
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // State to track the selected user for deleting
  const [selectedUserForDelete, setSelectedUserForDelete] = useState(null);

  // State to control whether the delete form is shown
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  // Async function to fetch user data from backend API
  const getData = async function () {
    let fetchedUsers = [];

    try {
      // Make GET request to /users endpoint
      const response = await fetch(backendURL + '/users');

      // Parse response JSON
      const data = await response.json();

      // Extract users array from response
      fetchedUsers = data.users;
    } catch (error) {
      // Log any errors fetching data
      console.log(error);
    }

    // Update state with fetched users
    setUsers(fetchedUsers);
  };

  // Load users data on component mount
  useEffect(() => {
    getData();
  }, []);

  // Handler to open the update form and pass selected user data
  const handleOpenUpdateForm = (user) => {
    setSelectedUser(user);
    setShowUpdateForm(true);
  };

  // Handler to open the delete form and pass selected user data
  const handleOpenDeleteForm = (user) => {
    setSelectedUserForDelete(user);
    setShowDeleteForm(true);
  };

  return (
    <>
      <h1>Users</h1>

      <table>
        <thead>
          <tr>
            {/* Dynamically create table headers based on first user object's keys */}
            {users.length > 0 &&
              Object.keys(users[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {/* Map users array to TableRow components, passing update and delete handlers */}
          {users.map((user, index) => (
            <TableRow
              key={index}
              rowObject={user}
              backendURL={backendURL}
              refreshHandler={getData}
              onUpdateClick={handleOpenUpdateForm}
              onDeleteClick={handleOpenDeleteForm}
              type="user"
              DeleteForm={DeleteUserForm}
            />
          ))}
        </tbody>
      </table>

      {/* Form to create a new user */}
      <CreateUserForm backendURL={backendURL} refreshUsers={getData} />

      {/* Conditionally render UpdateUserForm when triggered */}
      {showUpdateForm && selectedUser && (
        <div className="update-form">
          <UpdateUserForm
            selectedUser={selectedUser}
            backendURL={backendURL}
            refreshUsers={getData}
            onClose={() => setShowUpdateForm(false)}
          />
        </div>
      )}

      {/* Conditionally render DeleteUserForm when triggered */}
      {showDeleteForm && selectedUserForDelete && (
        <div className="delete-form">
          <DeleteUserForm
            selectedUser={selectedUserForDelete}
            backendURL={backendURL}
            refreshUsers={getData}
            onClose={() => setShowDeleteForm(false)}
          />
        </div>
      )}
    </>
  );
}

export default UserPage;
