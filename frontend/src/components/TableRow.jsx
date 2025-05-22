/*Citation for use of AI Tools
Date: 05/14/2025
Prompts used to modify the Update button
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of CS340 Starter Code 
Date: 05/07/2036
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/

const TableRow = ({
  rowObject,
  backendURL,
  refreshData,
  onUpdateClick,
  DeleteFormComponent,  // pass delete form component as a prop
}) => {
  return (
    <tr>
      {Object.values(rowObject).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
      <td>
        <button onClick={() => onUpdateClick(rowObject)}>Update</button>
      </td>
      <td>
        {DeleteFormComponent && (
          <DeleteFormComponent
            rowObject={rowObject}
            backendURL={backendURL}
            refreshData={refreshData}
          />
        )}
      </td>
    </tr>
  );
};

export default TableRow;