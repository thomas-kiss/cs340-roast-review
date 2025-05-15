const CreateUserForm = ({ backendURL, refreshUsers }) => {

    return (
        <>
            <h2>Create a User</h2>

            <form className='cuForm'>
                <label htmlFor="create_user_userName">Username: </label>
                <input
                    type="text"
                    name="create_user_userName"
                    id="create_user_userName"
                    required
                />

                <label htmlFor="create_user_email">Email: </label>
                <input
                    type="email"
                    name="create_user_email"
                    id="create_user_email"
                    required
                />

                <label htmlFor="create_user_firstName">First Name: </label>
                <input
                    type="text"
                    name="create_user_firstName"
                    id="create_user_firstName"
                />

                <label htmlFor="create_user_lastName">Last Name: </label>
                <input
                    type="text"
                    name="create_user_lastName"
                    id="create_user_lastName"
                />

                <label htmlFor="create_user_location">Location: </label>
                <input
                    type="text"
                    name="create_user_location"
                    id="create_user_location"
                />

                <label htmlFor="create_user_joinDate">Join Date: </label>
                <input
                    type="datetime-local"
                    name="create_user_joinDate"
                    id="create_user_joinDate"
                    required
                />

                <input type="submit" />
            </form>
        </>
    );
};

export default CreateUserForm;