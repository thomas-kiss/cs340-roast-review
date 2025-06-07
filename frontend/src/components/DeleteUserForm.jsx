/*
Citation for us of CS340 Starter Code 
Date: 06/02/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/

/* Citation for use of AI Tools
Date: 05/30/2025
Prompts used to rewrite the DeleteUserForm to match clean style with minimal UI for deletion only
AI Source URL: https://chatgpt.com
*/

/*Citation for use of CS340 Starter Code 
Date: 05/07/2025
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
import React from 'react';

const DeleteUserForm = ({ rowObject, backendURL, refreshData, onClose }) => {
  

  const handleDelete = async (e) => {
    e.preventDefault();

    const payload = {
      delete_user_id: rowObject["User ID"]
    };


        try {
            const response = await fetch(`${backendURL}/users/delete`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log(`Successfully deleted user ${payload.delete_user_id}`);
                refreshData();
            } else {
                const errorText = await response.text();
                console.error("Failed to delete user", errorText);
                alert("Error deleting user.");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Error deleting user.");
        }
    };
  return (
        <td>
            <form onSubmit={handleDelete}>
                <button type='submit'>Delete</button>
            </form>
        </td>
  );
};

export default DeleteUserForm;

