const CreateCoffeeBeanVarietalForm = ({ backendURL, refreshCoffeeBeansVarietals }) => {

    return (
        <>
            <h2>Create a Coffee Bean by Varietal Relationship</h2>

            <form className='cuForm'>
                <label htmlFor="create_coffeeBeanVarietal_coffeeBeanID">Coffee Bean Brand Name: </label>
                <select name="select_coffeeBeanBrandName" id="select_coffeeBeanBrandName">
                    <option value="">Select a Brand</option>
                    required
                </select>

            <label htmlFor="create_coffeeBeanVarietal_coffeeBeanID">Coffee Bean Roast Name: </label>
                <select name="select_coffeeBeanRoastName" id="select_coffeeBeanRoastName">
                     <option value="">Select a Roast</option>
                    required
                </select>

                <label htmlFor="create_coffeeBeanVarietal_VarietalID">Varietal Name: </label>
                <select name="select_varietal_name" id="select_varietal_name">
                     <option value="">Select a Varietal</option>
                    required
                </select>

                <input type="submit" />
            </form>
        </>
    );
};

export default CreateCoffeeBeanVarietalForm;
