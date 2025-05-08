import { useState } from 'react';

function CreateCoffeeReviewForm({ backendURL, refreshBrewMethods }) {
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

      refreshBrewMethods();
    } catch (err) {
      console.error('Error creating review:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Coffee Review</h2>
      {Object.keys(formData).map((field, i) => (
        <div key={i}>
          <label>{field}</label>
          <input type="text" name={field} value={formData[field]} onChange={handleChange} required />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateCoffeeReviewForm;
