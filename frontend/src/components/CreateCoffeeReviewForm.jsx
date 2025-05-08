import { useState, useEffect } from 'react';

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

  // Add an effect to check if the data is available
  useEffect(() => {
    if (!coffeeBeans || !brewMethods || !users) {
      console.error('Missing required data (coffeeBeans, brewMethods, or users)');
    }
  }, [coffeeBeans, brewMethods, users]);

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
        {coffeeBeans && coffeeBeans.length > 0 ? (
          coffeeBeans.map(bean => (
            <option key={bean.coffeeBeanID} value={bean.coffeeBeanID}>
              {bean.name}
            </option>
          ))
        ) : (
          <option value="">Loading Coffee Beans...</option>
        )}
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
        {brewMethods && brewMethods.length > 0 ? (
          brewMethods.map(method => (
            <option key={method.brewMethodID} value={method.brewMethodID}>
              {method.name}
            </option>
          ))
        ) : (
          <option value="">Loading Brew Methods...</option>
        )}
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
        {users && users.length > 0 ? (
          users.map(user => (
            <option key={user.userID} value={user.userID}>
              {user.username}
            </option>
          ))
        ) : (
          <option value="">Loading Users...</option>
        )}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateCoffeeReviewForm;
