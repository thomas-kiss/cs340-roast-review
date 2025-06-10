/*
Citation for use of AI Tools
Date: 6/6/2025
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code. 
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain
the dyanmic delete form but it's currently erroring out. provide debugging suggestions."
AI Source URL: https://chatgpt.com
*/

/* Citation for use of AI Tools
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of AI Tools
Date: 05/21/2025
Scope: Code was adapted from code solutions provided for the CoffeeBeansVarietalsPage and respective 
Create and Update forms
Prompts used for the CoffeeBeansVarietalsPage and its Create and Update forms: 
"Within these existing drop downs, I want to pipe in the dynamic data for the coffee beans and varietals. how
can I modify the code? [code snippet]", "the data pulling in is all null but has the number of data points needed. troubleshooting
steps" "how to prevent the drop downs from loading before we receive the data" "how can I select only DISTINCT values"
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of AI Tools
Date: 05/15/2025
Prompt: “refactor to match format and functionality of existing CoffeeBeans page in React”
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of AI Tools 
Date: 05/14/2025
Adapted from the ai-adpated code in CoffeeBeanPage.jsx.
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
import DeleteCoffeeReviewForm from '../components/DeleteCoffeeReviewForm';

function Reviews({ backendURL }) {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const [brewMethods, setBrewMethods] = useState([]);
    const [users, setUsers] = useState([]);
    const [coffeeBeans, setCoffeeBeans] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(`${backendURL}/coffee-reviews`);
            const data = await response.json();
            setReviews(data.coffeeReviews || []);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const getUsersData = async () => {
        try {
            const response = await fetch(`${backendURL}/users`);
            const data = await response.json();
            setUsers(data.users || []);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const getBrewMethodData = async () => {
        try {
            const response = await fetch(`${backendURL}/brew-methods`);
            const data = await response.json();
            setBrewMethods(data.brewMethods || []);
        } catch (error) {
            console.error('Error fetching brew methods:', error);
        }
    };

    const getCoffeeBeansData = async () => {
        try {
            const response = await fetch(`${backendURL}/coffeebeans`);
            const data = await response.json();
            setCoffeeBeans(data.coffeeBeans || []);
        } catch (error) {
            console.error('Error fetching coffee beans:', error);
        }
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

    const handleCloseUpdateForm = () => {
        setSelectedReview(null);
        setShowUpdateForm(false);
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
                            refreshData={getData}
                            onUpdateClick={handleOpenUpdateForm}
                            DeleteFormComponent={DeleteCoffeeReviewForm}
                        />
                    ))}
                </tbody>
            </table>

            {coffeeBeans.length > 0 && brewMethods.length > 0 && users.length > 0 && (
                <CreateCoffeeReviewForm
                    backendURL={backendURL}
                    refreshCoffeeReviews={getData}
                    coffeeBeans={coffeeBeans}
                    brewMethods={brewMethods}
                    users={users}
                />
            )}

            {showUpdateForm && selectedReview && (
                <UpdateCoffeeReviewForm
                    selectedCoffeeReview={selectedReview}
                    backendURL={backendURL}
                    refreshReviews={getData}
                    onClose={handleCloseUpdateForm}
                />
            )}
        </>
    );
}

export default Reviews;