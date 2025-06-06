const DeleteCoffeeBeanForm = ({ rowObject, backendURL, refreshData }) => {

    const handleDelete = async (e) => {
        e.preventDefault();

        const payload = {
            delete_coffeeBeanID: rowObject["Coffee Bean ID"]
        };

        try {
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
