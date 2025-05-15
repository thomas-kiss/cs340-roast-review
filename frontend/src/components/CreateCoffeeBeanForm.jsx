const CreateCoffeeBeanForm = ({ backendURL, refreshCoffeeBeans }) => {

    return (
        <>
            <h2>Create a Coffee Bean</h2>

            <form className='cuForm'>
                <label htmlFor="create_coffeeBean_brandName">Brand Name: </label>
                <input
                    type="text"
                    name="create_coffeeBean_brandName"
                    id="create_coffeeBean_brandName"
                    required
                    maxLength={45}
                />

                <label htmlFor="create_coffeeBean_roastName">Roast Name: </label>
                <input
                    type="text"
                    name="create_coffeeBean_roastName"
                    id="create_coffeeBean_roastName"
                    maxLength={45}
                    required
                />

                <label htmlFor="create_coffeeBean_singleOriginCountry">Origin: </label>
                <input
                    type="text"
                    name="create_coffeeBean_singleOriginCountry"
                    id="create_coffeeBean_singleOriginCountry"
                    maxLength={225}
                />

                <label htmlFor="create_coffeeBean_roastLevel">Roast Level: </label>
                <input
                    type="text"
                    name="create_coffeeBean_roastLevel"
                    id="create_coffeeBean_roastLevel"
                    maxLength={45}
                />

                <label htmlFor="create_coffeeBean_providedTastingNotes">Provided Tasting Notes: </label>
                <input
                    type="text"
                    name="create_coffeeBean_providedTastingNotes"
                    id="create_coffeeBean_providedTastingNotes"
                    maxLength={500}
                />

                <input type="submit" />
            </form>
        </>
    );
};

export default CreateCoffeeBeanForm;
