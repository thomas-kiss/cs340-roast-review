/*
Citation for use of AI Tools
Date: 05/22/2025
Scope: Code copied from AI tool to allow for the Update form drop downs
to default to the value of the selected Row. Drop downs were already coded and populating with 
options, but the default value was null. 
Prompts: "my update form is populating the selectedRow, and the dropdowns are populated 
with the database names, but the value for the Names are not being auto selected at the first value [code snippet]"
"troubleshooting errors, defaults aren't piping in","console log shows values, still not populating"
*/

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

/*Citation for use of AI Tools
Date: 05/14/2025
Prompts used to dynamically pre-populate the UpdateCoffeeBeanForm
Note: This was done after the CoffeeBeans page and UpdateCoffeeBeanForm was created, and after the Update button was worked into the table component
Prompts: “how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of AI Tools 
Date: 06/06/2025
Prompts used to combine BrandName and UserName dropdowns
Prompts: "How can I take these two forms that work and combine them into one drop down that is brandname - roastname? [code snippet]", "are there other ways to accomplish 
that same thing"
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of CS340 Starter Code 
Date: 05/07/2036
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/

//Both CONST statements Modified from AI code, see citation above
import React, { useState, useEffect } from 'react';


const UpdateCoffeeBeanVarietalForm = ({ selectedCoffeeBeanVarietal, backendURL, refreshCoffeeBeanVarietal, brandNameList, roastNameList, varietalNameList }) => {
        const {
        'Coffee Bean by Varietal Relationship ID': coffeeBeanVarietalID,
        'Coffee Bean ID': coffeeBeanID,
        'Brand Name': brandName, 
        'Roast Name': roastName,
        'Varietal ID': varietalID,
        'Varietal Name': name
    } = selectedCoffeeBeanVarietal || {};




  // AI generated for const, use effect, and const handleBrandChange. citation above.
  const [selectedBrandName, setSelectedBrandName] = useState("");

  useEffect(() => {
    if (selectedCoffeeBeanVarietal) {
      setSelectedBrandName(brandName || "");
    }
  }, [selectedCoffeeBeanVarietal, brandName]);

  const handleBrandChange = (e) => {
    setSelectedBrandName(e.target.value);
  };

// Adapated from AI code based on brandname handling above
  const [selectedRoastName, setSelectedRoastName] = useState("");

  useEffect(() => {
    if (selectedCoffeeBeanVarietal) {
      setSelectedRoastName(roastName || "");
    }
  }, [selectedCoffeeBeanVarietal, roastName]);

  const hanldeRoastChange = (e) => {
    setSelectedRoastName(e.target.value);
  };
    const [selectedVarietalName, setSelectedVarietalName] = useState("");

  useEffect(() => {
    if (selectedCoffeeBeanVarietal) {
      setSelectedVarietalName(name || "");
    }
  }, [selectedCoffeeBeanVarietal, name]);

  const handleVarietalChange = (e) => {
    setSelectedVarietalName(e.target.value);
  };

  // AI code used to modify and adapt the below input boxes and drop down boxes. 
    return (
        <>
            <h2>Update a Coffee Bean by Varietal Relationship</h2>
            <form className='cuForm'>

                <label htmlFor="update_coffeeBeanVarietal_coffeeBeanBrandName">Brand Name</label>
                <select 
                name="update_coffeeBeanVarietal_coffeeBeanBrandName" 
                id="update_coffeeBeanVarietal_coffeeBeanBrandName" 
                onChange={handleBrandChange} 
                value={selectedBrandName}
                >
                    {brandNameList.map((brand, index) => (
                    <option key={index} value={brand}>
                        {brand}
                    </option>
                ))}
                </select>
            
                <label htmlFor="update_coffeeBeanVarietal_coffeeBeanRoastName">Roast Name: </label>
                <select
                    name="update_coffeeBeanVarietal_coffeeBeanRoastName"
                    id="update_coffeeBeanVarietal_coffeeBeanRoastName"
                     onChange={hanldeRoastChange} 
                    value={selectedRoastName}
                >
                    {roastNameList.map((roast, index) => (
                    <option key={index} value={roast}>
                        {roast}
                    </option>
                ))}
                </select>
      

                <label htmlFor="update_coffeeBeanVarietal_varietalName">Varietal Name: </label>
                <select
                    name="update_coffeeBeanVarietal_varietalName"
                    id="update_coffeeBeanVarietal_varietalName"
                    onChange={handleVarietalChange} 
                    value={selectedVarietalName}
                >
                    {varietalNameList.map((varietal, index) => (
                    <option key={index} value={varietal}>
                        {varietal}
                    </option>
                ))}
                </select>

                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateCoffeeBeanVarietalForm;
