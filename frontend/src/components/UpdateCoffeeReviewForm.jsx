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
*/
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
Date: 05/07/2025
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/

import { useState, useEffect } from 'react';

const UpdateReviewForm = ({ selectedReview, backendURL, refreshReviews, onClose, roastNameList, brewMethodList, userList }) => {
    // Destructure from selectedReview
    const {
        'Review ID': reviewID,
        'Review Date': reviewDate,
        Aroma: aroma,
        Flavor: flavor,
        Aftertaste: afterTaste,
        Body: body,
        Acidity: acidity,
        Notes: reviewNotes,
        'User ID': userID,
        'User Name': userName,
        'Bean ID': beanID,
        'Roast Name': roastName,
        'Brew Method ID': brewMethodID,
        'Brew Method': brewMethodName
    } = selectedReview || {};

    // Controlled inputs state with date formatting applied here for datetime-local input
    const [formData, setFormData] = useState({
        reviewDate: reviewDate ? reviewDate.slice(0, 16) : "",  
        aroma: aroma || "",
        flavor: flavor || "",
        afterTaste: afterTaste || "",
        body: body || "",
        acidity: acidity || "",
        reviewNotes: reviewNotes || ""
    });

    // Update formData when selectedReview changes
    useEffect(() => {
        setFormData({
            reviewDate: reviewDate ? reviewDate.slice(0, 16) : "",  // <-- slice applied here too
            aroma: aroma || "",
            flavor: flavor || "",
            afterTaste: afterTaste || "",
            body: body || "",
            acidity: acidity || "",
            reviewNotes: reviewNotes || ""
        });
    }, [selectedReview]);

    // Handle changes to inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Submit updated data
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatePayload = {
            reviewDate: formData.reviewDate,
            Aroma: Number(formData.aroma),
            Flavor: Number(formData.flavor),
            Aftertaste: Number(formData.afterTaste),
            Body: Number(formData.body),
            Acidity: Number(formData.acidity),
            Notes: formData.reviewNotes
        };

        try {
            const response = await fetch(`${backendURL}/coffee-reviews/${reviewID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatePayload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Refresh list and close form on success
            await refreshReviews();
            onClose();
        } catch (error) {
            console.error("Failed to update review:", error);
        }
    };

    // coffee bean, brew method, and user drop downs modified based on AI code
    return (
        <>
            <h2>Update a Coffee Review</h2>
            <form className="cuForm" onSubmit={handleSubmit}>
                <label htmlFor="update_review_id">Review ID:</label>
                <input
                    type="text"
                    name="reviewID"
                    id="update_review_id"
                    value={reviewID || ""}
                    readOnly
                />

                {/* Changed input type to datetime-local for date + time */}
                <label htmlFor="update_review_date">Review Date:</label>
                <input
                    type="datetime-local"  // <-- changed here
                    name="reviewDate"
                    id="update_review_date"
                    value={formData.reviewDate}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="update_aroma">Aroma:</label>
                <input
                    type="number"
                    name="aroma"
                    id="update_aroma"
                    value={formData.aroma}
                    onChange={handleChange}
                    min={1}
                    max={10}
                    required
                />

                <label htmlFor="update_flavor">Flavor:</label>
                <input
                    type="number"
                    name="flavor"
                    id="update_flavor"
                    value={formData.flavor}
                    onChange={handleChange}
                    min={1}
                    max={10}
                    required
                />

                <label htmlFor="update_aftertaste">Aftertaste:</label>
                <input
                    type="number"
                    name="afterTaste"
                    id="update_aftertaste"
                    value={formData.afterTaste}
                    onChange={handleChange}
                    min={1}
                    max={10}
                    required
                />

                <label htmlFor="update_body">Body:</label>
                <input
                    type="number"
                    name="body"
                    id="update_body"
                    value={formData.body}
                    onChange={handleChange}
                    min={1}
                    max={10}
                    required
                />

                <label htmlFor="update_acidity">Acidity:</label>
                <input
                    type="number"
                    name="acidity"
                    id="update_acidity"
                    value={formData.acidity}
                    onChange={handleChange}
                    min={1}
                    max={10}
                    required
                />

                <label htmlFor="update_notes">Review Notes:</label>
                <textarea
                    name="reviewNotes"
                    id="update_notes"
                    value={formData.reviewNotes}
                    onChange={handleChange}
                    maxLength={1000}
                />

                <label htmlFor="update_user_name">User Name:</label>
                <select
                    name="userName"
                    id="update_user_name"
                    value={userName || ""}>
                    {userList.map((user, index) => (
                    <option key={index} value={user}>
                        {user}
                    </option>
                ))}
                </select>

                <label htmlFor="update_roast_name">Roast Name:</label>
                <select 
                    name="roastName"
                    id="update_roast_name"
                    value={roastName || ""}>
                    {roastNameList.map((roast, index) => (
                    <option key={index} value={roast}>
                        {roast}
                    </option>
                ))}
                </select>

                <label htmlFor="update_brew_method">Brew Method:</label>
                <select
                    name="brewMethodName"
                    id="update_brew_method"
                    value={brewMethodName || ""}>                    
                    {brewMethodList.map((brewMethod, index) => (
                    <option key={index} value={brewMethod}>
                        {brewMethod}
                    </option>
                ))}
                </select>

                <input type="submit" />
            </form>
        </>
    );
};

export default UpdateReviewForm;

