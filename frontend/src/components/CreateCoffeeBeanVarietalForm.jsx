/*
Citation for use of AI Tools
Date: 05/21/2025
Scope: Code was copied and modified for CoffeeBeansVarietalPage, CreateCoffeeBeanVarietalForm, and UpdateCoffeeBeanVarietalForm.
Prompts used for the CoffeeBeansVarietalsPage and its Create and Update forms: 
"Within these existing drop downs, I want to pipe in the dynamic data for the coffee beans and varietals. how
can I modify the code? [code snippet]", "the data pulling in is all null but has the number of data points needed. troubleshooting
steps" "how to prevent the drop downs from loading before we receive the data" "how can I select only DISTINCT values"
AI Source URL: https://chatgpt.com
*/


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
