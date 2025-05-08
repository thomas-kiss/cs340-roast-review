const CreateBrewMethodForm = ({ backendURL, refreshBrewMethods }) => {

    return (
        <>
            <h2>Create a Brew Method</h2>

            <form className='cuForm'>
                <label htmlFor="create_brew_method_name">Brew Method Name: </label>
                <input
                    type="text"
                    name="create_brew_method_name"
                    id="create_brew_method_name"
                    required
                />

                <label htmlFor="create_brew_method_description">Description: </label>
                <textarea
                    name="create_brew_method_description"
                    id="create_brew_method_description"
                ></textarea>

                <input type="submit" />
            </form>
        </>
    );
};

export default CreateBrewMethodForm;
