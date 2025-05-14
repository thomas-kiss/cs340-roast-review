const UpdateCoffeeBeanVarietalForm = ({ coffeebeansvarietals, backendURL, refreshCoffeeBeanVarietal }) => {
    return (
        <>
            <h2>Update a Coffee Bean by Varietal Relationship</h2>
            <form className='cuForm'>
                <label htmlFor="update_coffeeBeanVarietal_ID">Relationship to Update </label>
                <select
                    name="update_coffeeBeanVarietal_ID"
                    id="update_coffeeBeanVarietal_ID"
                >
                    <option value="">Select a Relationship</option>
                    {coffeebeansvarietals.map((coffeebeanvarietal) => (
                        <option key={coffeebeanvarietal.coffeebeanvarietalID} value={coffeebeanvarietal.coffeebeanvarietalID}>
                            {coffeebeanvarietal.coffeebeanvarietalID}
                        </option>
                    ))}
                </select>

                <label htmlFor="update_coffeeBeanVarietal_coffeeBeanID">Coffee Bean ID: </label>
                <input
                    type="text"
                    name="update_coffeeBeanVarietal_coffeeBeanID"
                    id="update_coffeeBeanVarietal_coffeeBeanID"
                />

                <label htmlFor="update_coffeeBeanVarietal_varietalID">Varietal ID: </label>
                <input
                    type="text"
                    name="update_coffeeBeanVarietal_varietalID"
                    id="update_coffeeBeanVarietal_varietalID"
                />


                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateCoffeeBeanVarietalForm;
