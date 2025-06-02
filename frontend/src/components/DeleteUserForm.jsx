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

import React from 'react';

const DeleteUserForm = ({ selectedUser, backendURL, refreshUsers, onClose }) => {
  const userId = selectedUser ? selectedUser["User ID"] || '' : '';

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(backendURL + '/users/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ delete_user_id: userId }),
      });

      if (response.ok) {
        refreshUsers();
        onClose();
      } else {
        console.error("Error deleting user.");
      }
    } catch (error) {
      console.error('Error during deletion:', error);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <input type="submit" value="Delete" />
    </form>
  );
};

export default DeleteUserForm;

