import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import TableRow from '../components/TableRow';
import CreateVarietalForm from '../components/CreateVarietalForm';
import UpdateVarietalsForm from '../components/UpdateVarietalsForm';

function Varietals({ backendURL }) {

    // Set up state variables to store user data
    const [varietals, setVarietals] = useState([]);
    
    // Function to fetch data from the backend
    const getData = async function () {
        let fetchedVarietals = [];

        try {
            // Make a GET request to the backend
            const response = await fetch(backendURL + '/varietals');
            
            // Convert the response into JSON format
            const data = await response.json();
            
            // Extract users from the response
            fetchedVarietals = data.varietals;

        } catch (error) {
            // If the API call fails, print the error to the console
            console.log(error);
        }

        // Update the state with the fetched users
        setVarietals(fetchedVarietals);
    };

    // Load table on page load
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Varietals</h1>

            <table>
                <thead>
                    <tr>
                        {/* Dynamically create table headers from the keys of the first user */}
                        {varietals.length > 0 && Object.keys(varietals[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Map through the users array and display each user in a table row */}
                    {varietals.map((varietals, index) => (
                        <TableRow
                            key={index}
                            rowObject={varietals}
                            backendURL={backendURL}
                            refreshVarietals={getData}
                        />
                    ))}
                </tbody>
            </table>

            <CreateVarietalForm backendURL={backendURL} refreshVarietals={getData} />
            <UpdateVarietalsForm varietals={varietals} backendURL={backendURL} refreshVarietals={getData} />
        </>
    );
}

export default Varietals;
