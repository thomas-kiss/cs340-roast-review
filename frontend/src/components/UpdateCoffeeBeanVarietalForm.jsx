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


const UpdateCoffeeBeanVarietalForm = ({ selectedCoffeeBeanVarietal, backendURL, refreshCoffeeBeanVarietal, varietalNameList }) => {
  const [brandNameList, setBrandNameList] = useState([]);
  const [roastNameList, setRoastNameList] = useState([]);
  const [selectedBrandName, setSelectedBrandName] = useState('');
  const [selectedRoastName, setSelectedRoastName] = useState('');

  const [formData, setFormData] = useState({
    update_coffeebeanvarietal_id: '',
    update_brandName: '',
    update_roastName: '',
    update_varietalName: '',
  });
useEffect(() => {
  if (selectedCoffeeBeanVarietal) {
    setFormData({
      update_coffeebeanvarietal_id: selectedCoffeeBeanVarietal["Coffee Bean by Varietal Relationship ID"] || '',
      update_brandName: selectedCoffeeBeanVarietal["Brand Name"] || '',
      update_roastName: selectedCoffeeBeanVarietal["Roast Name"] || '',
      update_varietalName: selectedCoffeeBeanVarietal["Varietal Name"] || '',
    });
    setSelectedBrandName(selectedCoffeeBeanVarietal["Brand Name"] || '');
    setSelectedRoastName(selectedCoffeeBeanVarietal["Roast Name"] || '');

    getRoastNames(selectedCoffeeBeanVarietal["Brand Name"]);
    getBrandNames(selectedCoffeeBeanVarietal["Roast Name"]);
  }
}, [selectedCoffeeBeanVarietal]);

 const getBrandNames = async (roastFilter = "") => {
    try {
      const response = await fetch(
        roastFilter
          ? `${backendURL}/coffeebeansvarietals/brandnames?roastName=${encodeURIComponent(roastFilter)}`
          : `${backendURL}/coffeebeansvarietals/brandnames`
      );
      const data = await response.json();
      setBrandNameList(data.brands || data);
    } catch (error) {
      console.log("Brand name fetch error:", error);
    }
  };

  const getRoastNames = async (brandFilter = "") => {
    try {
      const response = await fetch(
        brandFilter
          ? `${backendURL}/coffeebeansvarietals/roastnames?brandName=${encodeURIComponent(brandFilter)}`
          : `${backendURL}/coffeebeansvarietals/roastnames`
      );
      const data = await response.json();
      setRoastNameList(data.roasts || data);
    } catch (error) {
      console.log("Roast name fetch error:", error);
    }
  };

    // On brand change
const handleBrandChange = (e) => {
  const selected = e.target.value;
  setSelectedBrandName(selected);
    setFormData(prev => ({ ...prev, update_brandName: selected }));
  getRoastNames(selected);
};

// On roast change
const handleRoastChange = (e) => {
  const selected = e.target.value;
  setSelectedRoastName(selected);
    setFormData(prev => ({ ...prev, update_roastName: selected }));
  getBrandNames(selected);
};

const handleVarietalChange = (e) => {
  const selected = e.target.value;
  setFormData(prev => ({ ...prev, update_varietalName: selected }));
};
  const handleSubmit = async (e) => {
    e.preventDefault();

// This is where the AI code copy stops. 

        try {
            const response = await fetch(`${backendURL}/coffeebeansvarietals/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("cofee bean varietal updated successfully.");
                refreshCoffeeBeanVarietal();
            } else {
                console.error("Error updating coffee bean varietal.");
            }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };


  // AI code used to modify and adapt the below input boxes and drop down boxes. 
    return (
        <>
            <h2>Update a Coffee Bean by Varietal Relationship</h2>
            <form className='cuForm' onSubmit={handleSubmit}>

                <label htmlFor="update_coffeeBeanVarietal_coffeeBeanBrandName">Brand Name</label>
                <select 
                name="update_coffeeBeanVarietal_coffeeBeanBrandName" 
                id="update_coffeeBeanVarietal_coffeeBeanBrandName" 
                value={formData.update_brandName} 
                onChange={handleBrandChange}
                required>
                    <option value="">Select a Brand</option>
                    {brandNameList.map((brand, index)=> (
            <option key={index} value={brand["Brand Name"] || brand}>
              {brand["Brand Name"] || brand}
            </option>
                    ))}
                </select>
            
                <label htmlFor="update_coffeeBeanVarietal_coffeeBeanRoastName">Roast Name: </label>
                <select
                    name="update_coffeeBeanVarietal_coffeeBeanRoastName"
                    id="update_coffeeBeanVarietal_coffeeBeanRoastName"
                value={formData.update_roastName} 
                onChange={handleRoastChange} 
                required>
                     <option value="">Select a Roast</option>
                     {roastNameList.map((roast,index) => (
            <option key={index} value={roast["Roast Name"] || roast}>
              {roast["Roast Name"] || roast}
            </option>
                     ))}
                </select>


                <label htmlFor="update_coffeeBeanVarietal_varietalName">Varietal Name: </label>
                <select
                    name="update_coffeeBeanVarietal_varietalName"
                    id="update_coffeeBeanVarietal_varietalName"
                    value={formData.update_varietalName}
                    onChange={handleVarietalChange}
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
export default UpdateCoffeeBeanVarietalForm;
