const CreateVarietalForm = ({ backendURL, refreshVarietals }) => {

    return (
        <>
            <h2>Create a Varietal</h2>

            <form className='cuForm'>
                <label htmlFor="create_varietal_name">Name: </label>
                <input
                    type="text"
                    name="create_varietal_name"
                    id="create_varietal_name"
                    required
                />
                <input type="submit" />
            </form>
        </>
    );
};

export default CreateVarietalForm;
