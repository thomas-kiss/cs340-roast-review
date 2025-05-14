import { useState, useEffect } from 'react';
import TableRow from '../components/TableRow';
import CreateCoffeeReviewForm from '../components/CreateCoffeeReviewForm';
import UpdateCoffeeReviewForm from '../components/UpdateCoffeeReviewForm';

function CoffeeReviewPage({ backendURL }) {
  const [coffeeReviews, setCoffeeReviews] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`${backendURL}/coffee-reviews`);
      const data = await response.json();
      setCoffeeReviews(data.coffeeReviews);
    } catch (err) {
      console.error('Error fetching coffee reviews:', err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Coffee Reviews</h1>

      {coffeeReviews.length > 0 ? (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {Object.keys(coffeeReviews[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {coffeeReviews.map((review, index) => (
              <TableRow
                key={index}
                rowObject={review}
                backendURL={backendURL}
                refreshBrewMethods={getData}
                endpoint="coffee-reviews"
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No coffee reviews found.</p>
      )}

      <CreateCoffeeReviewForm backendURL={backendURL} refreshBrewMethods={getData} />
      <UpdateCoffeeReviewForm coffeeReviews={coffeeReviews} backendURL={backendURL} refreshBrewMethods={getData} />
    </>
  );
}

export default CoffeeReviewPage;
