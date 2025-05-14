import DeleteCoffeeBeanForm from './DeleteCoffeeBeanForm';

const TableRow = ({ rowObject, backendURL, refreshCoffeeBean }) => {
    return (
        <tr>
            {Object.values(rowObject).map((value, index) => (
                <td key={index}>{value}</td>
            ))}
            
            <DeleteCoffeeBeanForm rowObject={rowObject} backendURL={backendURL} refreshCoffeeBeans={refreshCoffeeBean} />
        </tr>
    );
};

export default TableRow;
