import { useState, useEffect } from 'react';

function UpdateCoffeeReviewForm({ coffeeReviews, backendURL, refreshCoffeeReviews }) {
  const [selectedID, setSelectedID] = useState('');
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Check for required data and update loading state
  useEffect(() => {
    if (coffeeReviews && coffeeReviews.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [coffeeReviews]);

  const handleSelect = e => {
    const selected = coffeeReviews.find(r => r.coffeeReviewID == e.target.value);
    if (selected) {
      setSelectedID(selected.coffeeReviewID);
      setFormData({ ...selected });
    }
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

      refreshCoffeeReviews();
    } catch (err) {
      console.error('Error updating review:', err);
    }
  };

  if (isLoading) {
    return <p>Loading Coffee Reviews...</p>;
  }

  return (
    <>
      <h2>Update Coffee Review</h2>
      <form className='cuForm' onSubmit={handleSubmit}>
        <label htmlFor="reviewID">Select Review to Update: </label>
        <select name="reviewID" id="reviewID" onChange={handleSelect} required>
          <option value="">Select a Review</option>
          {coffeeReviews.map(r => (
            <option key={r.coffeeReviewID} value={r.coffeeReviewID}>
              Review #{r.coffeeReviewID}
            </option>
          ))}
        </select>

        {selectedID && (
          <>
            <label htmlFor="coffeeBeanID">Coffee Bean: </label>
            <input
              type="text"
              name="coffeeBeanID"
              id="coffeeBeanID"
              value={formData.roastName}
              onChange={handleChange}
              required
            />

            <label htmlFor="brewMethodID">Brew Method: </label>
            <input
              type="text"
              name="brewMethodID"
              id="brewMethodID"
              value={formData.brewMethodName}
              onChange={handleChange}
              required
            />

            <label htmlFor="userID">User: </label>
            <input
              type="text"
              name="userID"
              id="userID"
              value={formData.userName}
              onChange={handleChange}
              required
            />

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

            <label htmlFor="afterTaste">After Taste: </label>
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
              required
            />

            <input type="submit" value="Update Review" />
          </>
        )}
      </form>
    </>
  );
}

export default UpdateCoffeeReviewForm;
