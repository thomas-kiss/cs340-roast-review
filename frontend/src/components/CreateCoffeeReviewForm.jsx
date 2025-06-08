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

import { useEffect, useState } from 'react';

function CreateCoffeeReviewForm({ backendURL, refreshCoffeeReviews, coffeeBeans, brewMethods, users }) {
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

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedRoast, setSelectedRoast] = useState('');

  const uniqueBrands = [...new Set(coffeeBeans.map(cb => cb["Brand Name"]))];
  const uniqueRoasts = [...new Set(coffeeBeans.map(cb => cb["Roast Name"]))];

  const filteredBrands = selectedRoast
    ? [...new Set(coffeeBeans.filter(cb => cb["Roast Name"] === selectedRoast).map(cb => cb["Brand Name"]))]
    : uniqueBrands;

  const filteredRoasts = selectedBrand
    ? [...new Set(coffeeBeans.filter(cb => cb["Brand Name"] === selectedBrand).map(cb => cb["Roast Name"]))]
    : uniqueRoasts;

  useEffect(() => {
    const matchedBean = coffeeBeans.find(
      cb => cb["Brand Name"] === selectedBrand && cb["Roast Name"] === selectedRoast
    );
    setFormData(prev => ({
      ...prev,
      coffeeBeanID: matchedBean ? matchedBean["Coffee Bean ID"] : ''
    }));
  }, [selectedBrand, selectedRoast, coffeeBeans]);

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
      setFormData({
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
      setSelectedBrand('');
      setSelectedRoast('');
    } catch (err) {
      console.error('Error creating review:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Coffee Review</h2>

      <label htmlFor="reviewDate">Review Date:</label>
      <input
        type="datetime-local"
        name="reviewDate"
        id="reviewDate"
        value={formData.reviewDate}
        onChange={handleChange}
        required
      />

      <label htmlFor="aroma">Aroma:</label>
      <input
        type="number"
        name="aroma"
        id="aroma"
        step="0.01"        
        min="0"
        max="10"
        value={formData.aroma}
        onChange={handleChange}
        required
      />

      <label htmlFor="flavor">Flavor:</label>
      <input
        type="number"
        name="flavor"
        id="flavor"
        step="0.01"        
        min="0"
        max="10"
        value={formData.flavor}
        onChange={handleChange}
        required
      />

      <label htmlFor="afterTaste">Aftertaste:</label>
      <input
        type="number"
        name="afterTaste"
        id="afterTaste"         
        step="0.01"       
        min="0"
        max="10"
        value={formData.afterTaste}
        onChange={handleChange}
        required
      />

      <label htmlFor="body">Body:</label>
      <input
        type="number"
        name="body"
        id="body"          
        step="0.01"      
        min="0"
        max="10"
        value={formData.body}
        onChange={handleChange}
        required
      />

      <label htmlFor="acidity">Acidity:</label>
      <input
        type="number"
        name="acidity"
        id="acidity"        
        step="0.01"
        min="0"
        max="10"
        value={formData.acidity}
        onChange={handleChange}
        required
      />

      <label htmlFor="reviewNotes">Review Notes:</label>
      <textarea
        name="reviewNotes"
        id="reviewNotes"
        value={formData.reviewNotes}
        onChange={handleChange}
        required
      />

      <label>Brand Name:</label>
      <select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)} required>
        <option value="">Select Brand</option>
        {filteredBrands.map(brand => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>

      <label>Roast Name:</label>
      <select value={selectedRoast} onChange={e => setSelectedRoast(e.target.value)} required>
        <option value="">Select Roast</option>
        {filteredRoasts.map(roast => (
          <option key={roast} value={roast}>{roast}</option>
        ))}
      </select>

      <label>Brew Method:</label>
      <select
        name="brewMethodID"
        value={formData.brewMethodID}
        onChange={handleChange}
        required
      >
        <option value="">Select Brew Method</option>
        {brewMethods.map(method => (
          <option key={method["Brew Method ID"]} value={method["Brew Method ID"]}>
            {method["Brew Method Name"]}
          </option>
        ))}
      </select>

      <label>User:</label>
      <select
        name="userID"
        value={formData.userID}
        onChange={handleChange}
        required
      >
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user["User ID"]} value={user["User ID"]}>
            {user["Username"]}
          </option>
        ))}
      </select>

      <input type="submit" />
    </form>
  );
}

export default CreateCoffeeReviewForm;
