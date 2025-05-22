/*
Citation for use of AI Tools
Date: 05/15/2025
Prompt: “refactor to match format and functionality of existing CoffeeBeans page in React”
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of AI Tools 
Date: 05/14/2025
Adapted from the code in CoffeeBeans.jsx (see below citation)
*/

/*Citation for use of AI Tools
Date: 05/14/2025
Prompts used to allow the Update form to show up dynamically, and to pass the record's details to the update form so that it can pre-populated. 
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of CS340 Starter Code 
Date: 05/07/2025
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/


import { useState, useEffect } from 'react';
import TableRow from '../components/TableRow';
import CreateCoffeeReviewForm from '../components/CreateCoffeeReviewForm';
import UpdateCoffeeReviewForm from '../components/UpdateCoffeeReviewForm';
import DeleteCoffeeReviewForm from '../components/DeleteCoffeeBeanForm';


function Reviews({ backendURL }) {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [brewMethods, setBrewMethods] = useState([]);
    const [users, setUsers] = useState([]);
    const [coffeeBeans, setCoffeeBeans] = useState([]);

    const getData = async function () {
        let fetchedReviews = [];

        try {
            const response = await fetch(backendURL + '/coffee-reviews');
            const data = await response.json();
            fetchedReviews = data.coffeeReviews || [];  // <-- Correct property from backend response
        } catch (error) {
            console.log(error);
        }

        setReviews(fetchedReviews);
    };

        const getCoffeeBeansData = async function () {
        let fetchedCoffeeBeans = [];

        try {
            const response = await fetch(backendURL + '/coffeebeans');
            const data = await response.json();
            fetchedCoffeeBeans = data.coffeeBeans || [];  // <-- Correct property from backend response
        } catch (error) {
            console.log(error);
        }

        setCoffeeBeans(fetchedCoffeeBeans);
    };

    const getUsersData = async function () {
        let fetchedUsers = [];

        try {
            const response = await fetch(backendURL + '/users');
            const data = await response.json();
            fetchedUsers = data.users || [];  // <-- Correct property from backend response
        } catch (error) {
            console.log(error);
        }

        setUsers(fetchedUsers);
    };

    const getBrewMethodData = async function () {
        let fetchedBrewMethods = [];

        try {
            const response = await fetch(backendURL + '/brew-methods');
            const data = await response.json();
            fetchedBrewMethods = data.brewMethods || [];  // <-- Correct property from backend response
        } catch (error) {
            console.log(error);
        }

        setBrewMethods(fetchedBrewMethods);
    };

    useEffect(() => {
        getData();
        getUsersData();
        getBrewMethodData();
        getCoffeeBeansData();
    }, []);

    const handleOpenUpdateForm = (review) => {
        setSelectedReview(review);
        setShowUpdateForm(true);
    };

    return (
        <>
            <h1>Coffee Reviews</h1>

            <table>
                <thead>
                    <tr>
                        {reviews.length > 0 &&
                            Object.keys(reviews[0]).map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review, index) => (
                        <TableRow
                            key={index}
                            rowObject={review}
                            backendURL={backendURL}
                            refreshCoffeeBeans={getData}
                            onUpdateClick={handleOpenUpdateForm}
                            DeleteForm={DeleteCoffeeReviewForm}
                        />
                    ))}
                </tbody>
            </table>
             {coffeeBeans.length>0 && brewMethods.length>0 && users.length>0 && (
            <CreateCoffeeReviewForm backendURL={backendURL} refreshCoffeeReviews={getData}
            roastNameList ={[...new Set(coffeeBeans.map(bean => bean["Roast Name"]))]}
            brewMethodList={brewMethods.map(brews => brews["Brew Method Name"])}
            userList={users.map(user => user["Username"])}
             />
            )}

            {showUpdateForm && selectedReview && (
                <div className="update-form">
                    <UpdateCoffeeReviewForm
                        selectedReview={selectedReview}
                        backendURL={backendURL}
                        refreshCoffeeBeans={getData}
                    />
                </div>
            )}
        </>
    );
}

export default Reviews;