import { useState } from 'react';

function UpdateCoffeeReviewForm({ coffeeReviews, backendURL, refreshBrewMethods }) {
  const [selectedID, setSelectedID] = useState('');
  const [formData, setFormData] = useState({});

  const handleSelect = e => {
    const selected = coffeeReviews.find(r => r.coffeeReviewID == e.target.value);
    setSelectedID(selected.coffeeReviewID);
    setFormData({ ...selected });
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch(`${backendURL}/coffee-reviews/${selectedID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      refreshBrewMethods();
    } catch (err) {
      console.error('Error updating review:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Coffee Review</h2>
      <select onChange={handleSelect}>
        <option value="">-- Select Review --</option>
        {coffeeReviews.map(r => (
          <option key={r.coffeeReviewID} value={r.coffeeReviewID}>
            Review #{r.coffeeReviewID}
          </option>
        ))}
      </select>

      {selectedID && (
        <>
          {Object.keys(formData).map((field, i) => (
            <div key={i}>
              <label>{field}</label>
              <input type="text" name={field} value={formData[field]} onChange={handleChange} required />
            </div>
          ))}
          <button type="submit">Update</button>
        </>
      )}
    </form>
  );
}

export default UpdateCoffeeReviewForm;
