const UpdateCoffeeBeanForm = ({ coffeeBeans, backendURL, refreshCoffeeBeans }) => {
    return (
        <>
            <h2>Update a Coffee Bean</h2>
            <form className='cuForm'>
                <label htmlFor="update_coffeeBean_id">CoffeeBean ID to Update: </label>
                <select
                    name="update_coffeeBean_id"
                    id="update_coffeeBean_id"
                >
                    <option value="">Select a Coffee Bean</option>
                    {coffeeBeans.map((coffeeBean) => (
                        <option key={coffeeBean.coffeeBeanID} value={coffeeBean.coffeeBeanID}>
                            {coffeeBean.brandName}
                        </option>
                    ))}
                </select>
                
                <label htmlFor="update_coffeeBeans_brandName">Brand Name : </label>
                <input
                    type="text"
                    name="update_coffeeBeans_brandName"
                    id="update_coffeeBeans_brandName"
                    maxLength={45}
                />

                <label htmlFor="update_coffeeBeans_roastName">Roast Name: </label>
                <input
                    type="text"
                    name="update_coffeeBeans_roastName"
                    id="update_coffeeBeans_roastName"
                    maxLength={45}
                />

                <label htmlFor="update_coffeeBeans_singleOriginCountry">Country of Origin (single origin only): </label>
                <input
                    type="text"
                    name="update_coffeeBeans_singleOriginCountry"
                    id="update_coffeeBeans_singleOriginCountry"
                    maxLength={225}
                />

                <label htmlFor="update_coffeBeans_roastLevel">roastLevel: </label>
                <input
                    type="text"
                    name="update_coffeBeans_roastLevel"
                    id="update_coffeBeans_roastLevel"
                    maxLength={45}
                />

                <label htmlFor="update_coffeeBeans_proviedTastingNotes">Tasting Notes: </label>
                <input
                    type="text"
                    name="update_coffeeBeans_proviedTastingNotes"
                    id="update_coffeeBeans_proviedTastingNotes"
                    maxLength={500}
                />

                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateCoffeeBeanForm;
