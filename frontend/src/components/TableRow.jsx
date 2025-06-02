/* Citation for use of AI Tools
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
*/

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

/*Citation for use of AI Tools
Date: 05/21/2025
Prompts used to modify the DeleteForm reference
"How to modify existing code to route dynamically to different Delete forms [code snippet]" "I have multiple 
pages and multiple delete forms. Will this proposed option work at that scale?"
AI Source URL: https://chatgpt.com
*/

/*
Citation for use of CS340 Starter Code 
Date: 05/07/2036
Adapted from CS340 Starter App Code
Source URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
*/

const TableRow = ({ rowObject, onUpdateClick, onDeleteClick }) => {
  return (
    <tr>
      {Object.values(rowObject).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
      <td>
        <button onClick={() => onUpdateClick(rowObject)}>Update</button>
      </td>
      <td>
        <button onClick={() => onDeleteClick(rowObject)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
