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

/* Citation for use of AI Tools
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
*/

import { useState, useEffect } from 'react';

function CreateCoffeeReviewForm({ backendURL, refreshCoffeeReviews, roastNameList, brewMethodList, userList }) {
  const [formData, setFormData] = useState({
    reviewDate: '',
    aroma: '',
    flavor: '',
    afterTaste: '',
    body: '',
    acidity: '',
    reviewNotes: '',
    coffeeBeanID: '',
    brewMethodID: '',
    userID: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch(`${backendURL}/coffee-reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      refreshCoffeeReviews();
    } catch (err) {
      console.error('Error creating review:', err);
    }
  };
  // Coffee Bean, Brew Method, User drop downs were adapted from AI code
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Coffee Review</h2>
      <label htmlFor="reviewDate">Review Date: </label>
      <input
        type="datetime-local"
        name="reviewDate"
        id="reviewDate"
        value={formData.reviewDate}
        onChange={handleChange}
        required
      />

      <label htmlFor="aroma">Aroma: </label>
      <input
        type="text"
        name="aroma"
        id="aroma"
        value={formData.aroma}
        onChange={handleChange}
        required
      />

      <label htmlFor="flavor">Flavor: </label>
      <input
        type="text"
        name="flavor"
        id="flavor"
        value={formData.flavor}
        onChange={handleChange}
        required
      />

      <label htmlFor="afterTaste">Aftertaste: </label>
      <input
        type="text"
        name="afterTaste"
        id="afterTaste"
        value={formData.afterTaste}
        onChange={handleChange}
        required
      />

      <label htmlFor="body">Body: </label>
      <input
        type="text"
        name="body"
        id="body"
        value={formData.body}
        onChange={handleChange}
        required
      />

      <label htmlFor="acidity">Acidity: </label>
      <input
        type="text"
        name="acidity"
        id="acidity"
        value={formData.acidity}
        onChange={handleChange}
        required
      />

      <label htmlFor="reviewNotes">Review Notes: </label>
      <textarea
        name="reviewNotes"
        id="reviewNotes"
        value={formData.reviewNotes}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="coffeeBeanID">Coffee Bean: </label>
      <select
        name="coffeeBeanID"
        id="coffeeBeanID"
        value={formData.coffeeBeanID}
        onChange={handleChange}
        required
      >
        <option value="">Select Coffee Bean</option>
                    {roastNameList.map((roast, index)=> (
                        <option key={index} value={roast}>
                            {roast}
                        </option>
                    ))}
      </select>

      <label htmlFor="brewMethodID">Brew Method: </label>
      <select
        name="brewMethodID"
        id="brewMethodID"
        value={formData.brewMethodID}
        onChange={handleChange}
        required
      >
        <option value="">Select Brew Method</option>
                    {brewMethodList.map((brewname, index)=> (
                        <option key={index} value={brewname}>
                            {brewname}
                        </option>
                    ))}
      </select>

      <label htmlFor="userID">User: </label>
      <select
        name="userID"
        id="userID"
        value={formData.userID}
        onChange={handleChange}
        required
      >
        <option value="">Select User</option>
                    {userList.map((username, index)=> (
                        <option key={index} value={username}>
                            {username}
                        </option>
                    ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateCoffeeReviewForm;
