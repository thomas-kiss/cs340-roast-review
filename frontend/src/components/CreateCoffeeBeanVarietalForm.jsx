const CreateCoffeeBeanVarietalForm = ({ backendURL, refreshCoffeeBeansVarietals }) => {

    return (
        <>
            <h2>Create a Coffee Bean by Varietal</h2>

            <form className='cuForm'>
                <label htmlFor="create_coffeeBeanVarietal_coffeeBeanID">Coffee Bean ID: </label>
                <input
                    type="text"
                    name="create_coffeeBeanVarietal_coffeeBeanID"
                    id="create_coffeeBeanVarietal_coffeeBeanID"
                    required
                    maxLength={11}
                />

                <label htmlFor="create_coffeeBeanVarietal_VarietalID">Varietal ID: </label>
                <input
                    type="text"
                    name="create_coffeeBeanVarietal_VarietalID"
                    id="create_coffeeBeanVarietal_VarietalID"
                    maxLength={11}
                    required
                />
                <input type="submit" />
            </form>
        </>
    );
};

export default CreateCoffeeBeanVarietalForm;
