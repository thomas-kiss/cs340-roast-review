import React from 'react';

const DeleteUserForm = ({ selectedUser, backendURL, refreshUsers, onClose }) => {
    const fullname = `${selectedUser["First Name"] || ''} ${selectedUser["Last Name"] || ''}`.trim();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            delete_user_id: selectedUser["User ID"],
            delete_user_name: fullname,
        };

        try {
            const response = await fetch(backendURL + '/users/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("User deleted successfully.");
            } else {
                console.warn("Server returned non-200. Refreshing anyway.");
            }

            refreshUsers();
            onClose();  // Close the form after submit
        } catch (error) {
            console.error('Error during delete request:', error);
        }
    };

    return (
        <div className="delete-user-form" style={{ border: '1px solid red', padding: '1rem', marginTop: '1rem' }}>
            <p>Are you sure you want to delete <strong>{fullname}</strong>?</p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Confirm Delete</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default DeleteUserForm;
