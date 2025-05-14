import { useState, useEffect } from 'react';  
import TableRow from '../components/TableRow';
import CreateBrewMethodForm from '../components/CreateBrewMethodForm';
import UpdateBrewMethodForm from '../components/UpdateBrewMethodForm';

function BrewMethodPage({ backendURL }) {

    const [brewMethods, setBrewMethods] = useState([]);
    
    const getData = async function () {
        let fetchedBrewMethods = [];

        try {
            const response = await fetch(backendURL + '/brew-methods');
            
            const data = await response.json();
            
            fetchedBrewMethods = data.brewMethods;

        } catch (error) {
            console.log(error);
        }

        setBrewMethods(fetchedBrewMethods);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Brew Methods</h1>

            <table>
                <thead>
                    <tr>
                        {brewMethods.length > 0 && Object.keys(brewMethods[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th>Update</th> 
                        <th>Delete</th> 
                    </tr>
                </thead>

                <tbody>
                    {brewMethods.map((brewMethod, index) => (
                        <TableRow
                            key={index}
                            rowObject={brewMethod}
                            backendURL={backendURL}
                            refreshUsers={getData}
                        />
                    ))}
                </tbody>
            </table>

            <CreateBrewMethodForm backendURL={backendURL} refreshUsers={getData} />
            <UpdateBrewMethodForm brewMethods={brewMethods} backendURL={backendURL} refreshBrewMethods={getData} />
        </>
    );
}

export default BrewMethodPage;
