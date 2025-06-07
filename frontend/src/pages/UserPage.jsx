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
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // Fetch all users
  const getData = async () => {
    try {
      const response = await fetch(backendURL + '/users');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Open update form with selected user
  const handleOpenUpdateForm = (user) => {
    setSelectedUser(user);
    setShowUpdateForm(true);
  };

  // Close update form
  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedUser(null);
  };


  return (
    <>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            {users.length > 0 &&
              Object.keys(users[0]).map((header, index) => <th key={index}>{header}</th>)}
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableRow
              key={index}
              rowObject={user}
              backendURL={backendURL}
              refreshData={getData}
              onUpdateClick={handleOpenUpdateForm}
              DeleteFormComponent={DeleteUserForm}

            />
          ))}
        </tbody>
      </table>

      {/* Create User Form is always visible */}
      <CreateUserForm backendURL={backendURL} refreshUsers={getData} />

      {/* Conditionally render UpdateUserForm */}
      {showUpdateForm && selectedUser && (
        <UpdateUserForm
          selectedUser={selectedUser}
          backendURL={backendURL}
          refreshUsers={getData}
          onClose={handleCloseUpdateForm}
        />
      )}
    </>
  );
}

export default UserPage;
