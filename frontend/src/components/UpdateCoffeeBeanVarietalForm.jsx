/*Citation for use of AI Tools
Date: 05/14/2025
Prompts used to dynamically pre-populate the UpdateCoffeeBeanForm
Note: This was done after the CoffeeBeans page and UpdateCoffeeBeanForm was created, and after the Update button was worked into the table component
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
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

    return (
        <>
            <h2>Update a Coffee Bean by Varietal Relationship</h2>
            <form className='cuForm'>

                <label htmlFor="update_coffeeBeanVarietal_ID">Coffee Bean by Varietal Relationship ID: </label>
                <input
                    type="text"
                    name="update_coffeeBeanVarietal_ID"
                    id="update_coffeeBeanVarietal_ID"
                    //value line and readOnly copied from AI code, see citation above
                    value={coffeeBeanVarietalID || ""}
                />

                <label htmlFor="update_coffeeBeanVarietal_coffeeBeanBrandName">Brand Name: </label>
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
