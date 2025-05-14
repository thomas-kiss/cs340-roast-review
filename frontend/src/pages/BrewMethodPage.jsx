import { useState, useEffect } from 'react';  // Importing useState for managing state in the component
import TableRow from '../components/TableRow';
import CreateCoffeeBeanForm from '../components/CreateCoffeeBeanForm';
import UpdateCoffeeBeanForm from '../components/UpdateCoffeeBeanForm';


function CoffeeBeans({ backendURL }) {

    // Set up state variables to store coffee bean data
    const [coffeeBeans, setCoffeeBeans] = useState([]);
    
    // Function to fetch data from the backend
    const getData = async function () {
        let fetchedCoffeeBeans = [];

        try {
            // Make a GET request to the backend
            const response = await fetch(backendURL + '/coffeebeans');
            
            // Convert the response into JSON format
            const data = await response.json();
            
            // Extract coffee beans from the response
            fetchedCoffeeBeans = data.coffeeBeans;

        } catch (error) {
            // If the API call fails, print the error to the console
            console.log(error);
        }

        // Update the state with the fetched coffee beans
        setCoffeeBeans(fetchedCoffeeBeans);
    };

    // Load table on page load
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Coffee Beans</h1>

            <table>
                <thead>
                    <tr>
                        {/* Dynamically create table headers from the keys of the first coffee bean */}
                        {coffeeBeans.length > 0 && Object.keys(coffeeBeans[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th></th> {/* For action buttons */}
                    </tr>
                </thead>

                <tbody>
                    {/* Map through the coffee beans array and display each coffee bean in a table row */}
                    {coffeeBeans.map((coffeeBeans, index) => (
                        <TableRow
                            key={index}
                            rowObject={coffeeBeans}
                            backendURL={backendURL}
                            refreshCoffeeBeans={getData}
                        />
                    ))}
                </tbody>
            </table>
            <CreateCoffeeBeanForm backendURL={backendURL} refreshCoffeeBeans={getData} />
            <UpdateCoffeeBeanForm coffeeBeans={coffeeBeans} backendURL={backendURL} refreshCoffeeBeans={getData} />

        </>
    );
}

export default CoffeeBeans;
