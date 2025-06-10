
/*Citation for use of AI Tools
Date: 06/07/25
Adapted from AI Code 
Scope: Copied from AI Code as indicated with in-line comments.
Prompts: "I have this existing working code, but I'd like to modify it to make brandname and roastname dynamic
based on selecting roast or brand. User can select in either order. The dropdown not 
selected should update to the applicable brand or roast names. [code snippet]", "I don't want the frontend to query for the FKs, 
can we adjust to be in the PROC instead?", "if I need to query all roast names and sometimes a filtered list, how would I adjust my server file?",
"500 error, debugging help. procedure is functional, confirm with sql queries"
Source URL: https://chatgpt.com
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

/*
Citation for use of CS340 Starter Code 
Date: 05/07/2025
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/

import React, { useState, useEffect } from 'react';

const CreateCoffeeBeanVarietalForm = ({ backendURL, refreshCoffeeBeanVarietal, varietalNameList }) => {
    // Copied from AI code starting here 
    const [brandNameList, setbrandNameList] = useState([]);
    const [roastNameList, setroastNameList] = useState([]);
    const [selectedBrandName, setSelectedBrandName] = useState('');
    const [selectedRoastName, setSelectedRoastName] = useState('');
    const [selectedVarietal, setSelectedVarietal] = useState('');


    useEffect(() => {
        getBrandNames();
        getRoastNames();
    }, []);
        
    const getBrandNames = async function (roastFilter = "") {

        try {
            // following CONST RESPONSE copied from AI
      const response = await fetch(
        roastFilter
          ? `${backendURL}/coffeebeansvarietals/brandnames?roastName=${encodeURIComponent(roastFilter)}`
          : `${backendURL}/coffeebeansvarietals/brandnames`
      );
            // Convert the response into JSON format
            const data = await response.json();
            
            
         setbrandNameList(data.brands || data);

        } catch (error) {
            // If the API call fails, print the error to the console
            console.log(error);
        }
    };

        const getRoastNames = async function (brandFilter = "") {

        try {
            // following CONST RESPONSE copied from AI
      const response = await fetch(
        brandFilter
          ? `${backendURL}/coffeebeansvarietals/roastnames?brandName=${encodeURIComponent(brandFilter)}`
          : `${backendURL}/coffeebeansvarietals/roastnames`
      );
            // Convert the response into JSON format
            const data = await response.json();
            
        
            setroastNameList(data.roasts || data);

        } catch (error) {
            // If the API call fails, print the error to the console
            console.log(error);
        }
    };

    // On brand change
const handleBrandChange = (e) => {
  const selected = e.target.value;
  setSelectedBrandName(selected);
  getRoastNames(selected);
};

// On roast change
const handleRoastChange = (e) => {
  const selected = e.target.value;
  setSelectedRoastName(selected);
  getBrandNames(selected);
};

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      brandName: selectedBrandName,
      roastName: selectedRoastName,
      varietalName: selectedVarietal,
    };
// This is where the AI code copy stops. 


// The following code is adapted from the CS340 Starter Code
        try {
            const response = await fetch(`${backendURL}/coffeebeansvarietals/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("coffee bean varietal created successfully.");
                refreshCoffeeBeanVarietal();
            } else {
                console.error("Error creating coffee bean varietal.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

// In the below code, the brandNameList lines, roastNameList lines, and the onChange for Varietals was copied from AI code
    return (
        <>
            <h2>Create a Coffee Bean by Varietal Relationship</h2>

            <form className='cuForm' onSubmit={handleSubmit}>
                <label htmlFor="select_coffeeBeanBrandName">Coffee Bean Brand Name: </label>
                <select 
                name="select_coffeeBeanBrandName" 
                id="select_coffeeBeanBrandName" 
                value={selectedBrandName} 
                onChange={handleBrandChange}
                required>
                    <option value="">Select a Brand</option>
                    {brandNameList.map((brand, index)=> (
            <option key={index} value={brand["Brand Name"] || brand}>
              {brand["Brand Name"] || brand}
            </option>
                    ))}
                </select>

            <label htmlFor="select_coffeeBeanRoastName">Coffee Bean Roast Name: </label>
                <select 
                name="select_coffeeBeanRoastName" 
                id="select_coffeeBeanRoastName" 
                value={selectedRoastName} 
                onChange={handleRoastChange} 
                required>
                     <option value="">Select a Roast</option>
                     {roastNameList.map((roast,index) => (
            <option key={index} value={roast["Roast Name"] || roast}>
              {roast["Roast Name"] || roast}
            </option>
                     ))}
                </select>

                <label htmlFor="select_varietal_name">Varietal Name: </label>
                <select 
                name="select_varietal_name" 
                id="select_varietal_name"
                value={selectedVarietal}
                onChange={(e) => setSelectedVarietal(e.target.value)}
                 required>
                     <option value="">Select a Varietal</option>
                     {varietalNameList.map((varietalname,index) => (
                        <option key={index} value={varietalname}>
                            {varietalname}
                        </option>
                     ))}
                </select>

                <input type="submit" />
            </form>
        </>
    );
};

export default CreateCoffeeBeanVarietalForm;
