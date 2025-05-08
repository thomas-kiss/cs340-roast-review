const UpdateUserForm = ({ users, backendURL, refreshUsers }) => {
    return (
        <>
            <h2>Update a User</h2>
            <form className='cuForm'>
                <label htmlFor="update_user_id">User to Update: </label>
                <select
                    name="update_user_id"
                    id="update_user_id"
                >
                    <option value="">Select a User</option>
                    {users.map((user) => (
                        <option key={user.userID} value={user.userID}>
                            {user.userName}
                        </option>
                    ))}
                </select>

                <label htmlFor="update_user_username">Username: </label>
                <input
                    type="text"
                    name="update_user_username"
                    id="update_user_username"
                />

                <label htmlFor="update_user_email">Email: </label>
                <input
                    type="email"
                    name="update_user_email"
                    id="update_user_email"
                />

                <label htmlFor="update_user_firstname">First Name: </label>
                <input
                    type="text"
                    name="update_user_firstname"
                    id="update_user_firstname"
                />

                <label htmlFor="update_user_lastname">Last Name: </label>
                <input
                    type="text"
                    name="update_user_lastname"
                    id="update_user_lastname"
                />

                <label htmlFor="update_user_location">Location: </label>
                <input
                    type="text"
                    name="update_user_location"
                    id="update_user_location"
                />

                <label htmlFor="update_user_joindate">Join Date: </label>
                <input
                    type="datetime-local"
                    name="update_user_joindate"
                    id="update_user_joindate"
                />

                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateUserForm;
