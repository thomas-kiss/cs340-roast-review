const CreateCoffeeBeanVarietalForm = ({ backendURL, refreshCoffeeBeansVarietals, brandNameList, roastNameList, varietalNameList }) => {
    return (
        <>
            <h2>Create a Coffee Bean by Varietal Relationship</h2>

            <form className='cuForm'>
                <label htmlFor="select_coffeeBeanBrandName">Coffee Bean Brand Name: </label>
                <select name="select_coffeeBeanBrandName" id="select_coffeeBeanBrandName">
                    <option value="">Select a Brand</option>
                    {brandNameList.map((brand, index)=> (
                        <option key={index} value={brand}>
                            {brand}
                        </option>
                    ))}
                    required
                </select>

            <label htmlFor="select_coffeeBeanRoastName">Coffee Bean Roast Name: </label>
                <select name="select_coffeeBeanRoastName" id="select_coffeeBeanRoastName">
                     <option value="">Select a Roast</option>
                     {roastNameList.map((roast,index) => (
                        <option key={index} value={roast}>
                            {roast}
                        </option>
                     ))}
                    required
                </select>

                <label htmlFor="select_varietal_name">Varietal Name: </label>
                <select name="select_varietal_name" id="select_varietal_name">
                     <option value="">Select a Varietal</option>
                     {varietalNameList.map((varietalname,index) => (
                        <option key={index} value={varietalname}>
                            {varietalname}
                        </option>
                     ))}
                    required
                </select>

                <input type="submit" />
            </form>
        </>
    );
};

export default CreateCoffeeBeanVarietalForm;
