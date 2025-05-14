import DeleteCoffeeBeanForm from './DeleteCoffeeBeanForm';

const TableRow = ({ rowObject, backendURL, refreshCoffeeBean }) => {
    return (
        <tr>
            {Object.values(rowObject).map((value, index) => (
                <td key={index}>{value}</td>
            ))}
            <button type="submit" > Update </button>
            <DeleteCoffeeBeanForm rowObject={rowObject} backendURL={backendURL} refreshCoffeeBeans={refreshCoffeeBean} />
        </tr>
    );
};

export default TableRow;
