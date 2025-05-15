import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import TableRow from '../components/TableRow';
import CreateCoffeeBeanVarietalForm from '../components/CreateCoffeeBeanVarietalForm';
import UpdateCoffeeBeanVarietalForm from '../components/UpdateCoffeeBeanVarietalForm';

function CoffeeBeansVarietals({ backendURL }) {

    // Set up state variables to store coffeebeansvarietals data
    const [coffeebeansvarietals, setCoffeeBeansVarietals] = useState([]);
    
    // Function to fetch data from the backend
    const getData = async function () {
        let fetchedCoffeeBeansVarietals = [];

        try {
            // Make a GET request to the backend
            const response = await fetch(backendURL + '/coffeebeansvarietals');
            
            // Convert the response into JSON format
            const data = await response.json();
            
            // Extract coffeebeansvarietals from the response
            fetchedCoffeeBeansVarietals = data.coffeebeansvarietals;

        } catch (error) {
            // If the API call fails, print the error to the console
            console.log(error);
        }

        // Update the state with the fetched coffeebeansvarietals
        setCoffeeBeansVarietals(fetchedCoffeeBeansVarietals);
    };

    // Load table on page load
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Coffee Beans by Varietals</h1>

            <table>
                <thead>
                    <tr>
                        {/* Dynamically create table headers from the keys of the first coffeebeanvarietal */}
                        {coffeebeansvarietals.length > 0 && Object.keys(coffeebeansvarietals[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th>Update</th> 
                        <th>Delete</th> 
                    </tr>
                </thead>

                <tbody>
                    {/* Map through the coffeebeansvarietals array and display each coffeebeanvarietal in a table row */}
                    {coffeebeansvarietals.map((coffeebeanvarietal, index) => (
                        <TableRow
                            key={index}
                            rowObject={coffeebeanvarietal}
                            backendURL={backendURL}
                            refreshedCoffeeBeansVarietals={getData}
                        />
                    ))}
                </tbody>
            </table>

            <CreateCoffeeBeanVarietalForm backendURL={backendURL} refreshCoffeeBeansVarietals={getData} />
            <UpdateCoffeeBeanVarietalForm coffeebeansvarietals={coffeebeansvarietals} backendURL={backendURL} refreshedCoffeeBeansVarietals={getData} />
        </>
    );
}

export default CoffeeBeansVarietals;