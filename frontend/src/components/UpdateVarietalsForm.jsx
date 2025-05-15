const UpdateVarietalsForm = ({ varietals, backendURL, refreshVarietals }) => {
    return (
        <>
            <h2>Update a Varietal</h2>
            <form className='cuForm'>
                <label htmlFor="update_varietal_id">Varietal to Update: </label>
                <select
                    name="update_varietal_id"
                    id="update_varietal_id"
                >
                    <option value="">Select a Varietal</option>
                    {varietals.map((varietal) => (
                        <option key={varietal.varietalID} value={varietal.varietalID}>
                            {varietal.varietalID}
                        </option>
                    ))}
                </select>

                <label htmlFor="update_varietal_name">Name: </label>
                <input
                    type="text"
                    name="update_varietal_name"
                    id="update_varietal_name"
                />
                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateVarietalsForm;
