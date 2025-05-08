import { useState, useEffect } from 'react';  
import TableRow from '../components/TableRow';
import CreateUserForm from '../components/CreateUserForm';
import UpdateUserForm from '../components/UpdateUserForm';

function UserPage({ backendURL }) {

    const [users, setUsers] = useState([]);
    
    const getData = async function () {
        let fetchedUsers = [];

        try {
            const response = await fetch(backendURL + '/users');
            
            const data = await response.json();
            
            fetchedUsers = data.users;

        } catch (error) {
            console.log(error);
        }

        setUsers(fetchedUsers);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Users</h1>

            <table>
                <thead>
                    <tr>
                        {users.length > 0 && Object.keys(users[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th></th> 
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <TableRow
                            key={index}
                            rowObject={user}
                            backendURL={backendURL}
                            refreshUsers={getData}
                        />
                    ))}
                </tbody>
            </table>

            <CreateUserForm backendURL={backendURL} refreshUsers={getData} />
            <UpdateUserForm users={users} backendURL={backendURL} refreshUsers={getData} />
        </>
    );
}

export default UserPage;
