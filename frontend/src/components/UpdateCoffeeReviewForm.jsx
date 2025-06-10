/*
Citation for use of AI Tools
Date: 06/08/2025
Scope: Code copied from AI tool to allow for the Update form drop downs and update functionality
Prompts: "I need to implement UPDATE functionality that populates the form with the review data. Brew Method , Coffee Bean and User
must be dynamic drop downs. Note that Coffee Beans should be a combination of the brand name - roast name so that you can select the correct choice
when there are multiple beans with the same roast name."
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of AI Tools
Date: 05/21/2025
Scope: Code was adapted from code solutions provided for the CoffeeBeansVarietalsPage and respective 
Create and Update forms
Prompts used for the CoffeeBeansVarietalsPage and its Create and Update forms: 
"Within these existing drop downs, I want to pipe in the dynamic data for the coffee beans and varietals. how
can I modify the code? [code snippet]", "the data pulling in is all null but has the number of data points needed. troubleshooting
steps" "how to prevent the drop downs from loading before we receive the data" "how can I select only DISTINCT values"
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of AI Tools 
Date: 05/15/2025
Adapted from the code in UpdateCoffeeBeanForm.jsx (see below citation)
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
Date: 05/07/2025
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/

import React, { useState, useEffect } from 'react';

const UpdateCoffeeReviewForm = ({ selectedCoffeeReview, backendURL, refreshReviews, onClose }) => {
    const [formData, setFormData] = useState({});
    const [users, setUsers] = useState([]);
    const [brewMethods, setBrewMethods] = useState([]);
    const [coffeeBeans, setCoffeeBeans] = useState([]);

    useEffect(() => {
        fetch(`${backendURL}/users`).then(res => res.json()).then(data => setUsers(data.users));
        fetch(`${backendURL}/brew-methods`).then(res => res.json()).then(data => setBrewMethods(data.brewMethods));
        fetch(`${backendURL}/coffeebeans`).then(res => res.json()).then(data => setCoffeeBeans(data.coffeeBeans));
    }, [backendURL]);

    useEffect(() => {
        if (selectedCoffeeReview) {
            setFormData({
                coffeeReviewID: selectedCoffeeReview["Review ID"],
                reviewDate: selectedCoffeeReview["Review Date"].slice(0, 16),
                aroma: selectedCoffeeReview["Aroma"],
                flavor: selectedCoffeeReview["Flavor"],
                afterTaste: selectedCoffeeReview["Aftertaste"],
                body: selectedCoffeeReview["Body"],
                acidity: selectedCoffeeReview["Acidity"],
                reviewNotes: selectedCoffeeReview["Notes"],
                coffeeBeanID: selectedCoffeeReview["Bean ID"],
                brewMethodID: selectedCoffeeReview["Brew Method ID"],
                userID: selectedCoffeeReview["User ID"]
            });
        }
    }, [selectedCoffeeReview]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${backendURL}/coffee-reviews/${formData.coffeeReviewID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                refreshReviews();
                onClose();
            } else {
                console.error("Failed to update coffee review");
            }
        } catch (error) {
            console.error("Error during update:", error);
        }
    };

    return (
        <form className="cuForm" onSubmit={handleSubmit}>
            <h2>Update Coffee Review</h2>
            <label>Review Date:
                <input type="datetime-local" name="reviewDate" value={formData.reviewDate || ''} onChange={handleChange} required />
            </label>
            <label>Aroma:
                <input type="number" step="0.01" name="aroma" value={formData.aroma || ''} onChange={handleChange} required />
            </label>
            <label>Flavor:
                <input type="number" step="0.01" name="flavor" value={formData.flavor || ''} onChange={handleChange} required />
            </label>
            <label>Aftertaste:
                <input type="number" step="0.01" name="afterTaste" value={formData.afterTaste || ''} onChange={handleChange} required />
            </label>
            <label>Body:
                <input type="number" step="0.01" name="body" value={formData.body || ''} onChange={handleChange} required />
            </label>
            <label>Acidity:
                <input type="number" step="0.01" name="acidity" value={formData.acidity || ''} onChange={handleChange} required />
            </label>
            <label>Review Notes:
                <textarea name="reviewNotes" value={formData.reviewNotes || ''} onChange={handleChange} required />
            </label>

            <label>Brew Method:
                <select name="brewMethodID" value={formData.brewMethodID || ''} onChange={handleChange} required>
                    <option value="">Select Brew Method</option>
                    {brewMethods.map(method => (
                        <option key={method["Brew Method ID"]} value={method["Brew Method ID"]}>
                            {method["Brew Method Name"]}
                        </option>
                    ))}
                </select>
            </label>

            <label>User:
                <select name="userID" value={formData.userID || ''} onChange={handleChange} required>
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user["User ID"]} value={user["User ID"]}>
                            {user["Username"]}
                        </option>
                    ))}
                </select>
            </label>

            <label>Coffee Bean:
                <select name="coffeeBeanID" value={formData.coffeeBeanID || ''} onChange={handleChange} required>
                    <option value="">Select Coffee Bean</option>
                    {coffeeBeans.map(bean => (
                        <option key={bean["Coffee Bean ID"]} value={bean["Coffee Bean ID"]}>
                            {bean["Brand Name"]} - {bean["Roast Name"]}
                        </option>
                    ))}
                </select>
            </label>

            <input type="submit" />
        </form>
    );
};

export default UpdateCoffeeReviewForm;