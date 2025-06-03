/*
Citation for us of CS340 Starter Code 
Date: 06/02/2025
Adapted from provided canvas code:
Implementing CUD operations in your app
Source URL:https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968
*/

/*Citation for use of CS340 Starter Code 
Date: 05/07/2025
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/


const DeleteBrewMethodForm = ({ rowObject, backendURL, refreshBrewMethods }) => {

    const handleDelete = async (e) => {
        e.preventDefault();

        const payload = {
            delete_brew_method_id: rowObject["Brew Method ID"]
        };

        try {
            const response = await fetch(`${backendURL}/brew-methods/delete`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log(`Successfully deleted brew method ID ${payload.delete_brew_method_id}`);
                refreshBrewMethods();
            } else {
                const errorText = await response.text();
                console.error("Failed to delete brew method:", errorText);
                alert("Error deleting brew method.");
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

export default DeleteBrewMethodForm;
