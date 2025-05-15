const UpdateBrewMethodForm = ({ brewMethods, backendURL, refreshBrewMethods }) => {
    return (
        <>
            <h2>Update a Brew Method</h2>
            <form className='cuForm'>
                <label htmlFor="update_brew_method_id">Brew Method to Update: </label>
                <select
                    name="update_brew_method_id"
                    id="update_brew_method_id"
                >
                    <option value="">Select a Brew Method</option>
                    {brewMethods.map((method) => (
                        <option key={method.brewMethodID} value={method.brewMethodID}>
                            {method.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="update_brew_method_name">Brew Method Name: </label>
                <input
                    type="text"
                    name="update_brew_method_name"
                    id="update_brew_method_name"
                />

                <label htmlFor="update_brew_method_description">Description: </label>
                <textarea
                    name="update_brew_method_description"
                    id="update_brew_method_description"
                ></textarea>

                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateBrewMethodForm;