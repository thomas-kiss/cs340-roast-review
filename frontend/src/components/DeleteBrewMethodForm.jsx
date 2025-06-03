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
