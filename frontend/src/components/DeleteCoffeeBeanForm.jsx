/* Citation for use of AI Tools
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through", "n is not a function error", "preflight request sending 204 but 
receiving a 500 after for GET.", "In current code, is DeleteCoffeeBeanForm being bypassed? [code snippets]", "table row should not be specific to deleting coffee 
beans. it needs to scale to accomodate multiple delete forms.", "page not refreshing after successful delete"
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of AI Tools
Date: 6/6/2025
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code. 
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain
the dyanmic delete form but it's currently erroring out. provide debugging suggestions."
AI Source URL: https://chatgpt.com
*/

const DeleteCoffeeBeanForm = ({ rowObject, backendURL, refreshData }) => {

    const handleDelete = async (e) => {
        e.preventDefault();

        const payload = {
            delete_coffeeBeanID: rowObject["Coffee Bean ID"]
        };

        try {
            console.log('Deleting rowObject:', rowObject);
            const response = await fetch(`${backendURL}/coffeebeans/delete`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log(`Successfully deleted coffee bean ${payload.delete_coffeeBeanID}`);
                refreshData();
            } else {
                const errorText = await response.text();
                console.error("Failed to delete coffee bean:", errorText);
                alert("Error deleting coffee bean.");
            }
        } catch (error) {
            console.error("Error deleting brew method:", error);
            alert("Error deleting brew method.");
        }
    };

    return (
        <td>
            <form onSubmit={handleDelete}>
                <button type='submit'>Delete</button>
            </form>
        </td>
    );
};

export default DeleteCoffeeBeanForm;
