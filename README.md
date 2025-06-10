# CS340_Team2
Team Members: Katlin Hopkins, Thomas Kiss </br>
Team Name: Team 2 </br>
Course: CS340 </br>
Date/Term: Spring 2025 </br>

**Citations**
 </br></br>
 
**Citations for use of CS340 Starter Code** </br>


Code within frontend/main.jsx, frontend/index.css, frontend/App.css was copied from the CS340 Starter Code </br>
Safonte, D., Curry, M. (May 2025) CS 340 Starter Code (Version 1.0) [Source code] https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948 </br>
 </br>

Code within frontend and backend folders, with the exception of the specific files above, were adapted and modified from the 
CS340 Starter Code.</br>
Safonte, D., Curry, M. (May 2025) CS 340 Starter Code (Version 1.0) [Source code] https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948 </br>
 </br>
 
CUD operations within the PL.SQL file were adapted based on the CS340 Starter Code. </br>
Safonte, D., Curry, M. (May 2025) CS 340 Starter Code (Version 1.0) [Source code] https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968 </br>
 </br>


PL/SQL Wrapper within the DDL.sql file were copied from the canvas code. The contents inside of that PL/SQL Wrapper is original code, with the exception of the SET statements as mentioned below.  </br>
Safonte, D., Curry, M. (May 2025) CS 340 Starter Code (Version 1.0) [Source code] https://canvas.oregonstate.edu/courses/1999601/assignments/10006390?module_item_id=25352972 </br>

SET statements in the DDL.sql file were copied from the canvas code. </br>
Safonte, D., Curry, M. (May 2025) CS 340 Starter Code (Version 1.0) [Source code] 
https://canvas.oregonstate.edu/courses/1999601/assignments/10006385?module_item_id=25352941


 
**Citations for use of AI Tools**  </br>
NOTE: Often the same prompt was used for one page or form, then the team scaled this across multiple pages and forms. This means some of the citations are duplicative. </br>
</br>
**General Use**  </br>
Date: 05/08/2025  </br>
Prompts used to troubleshoot the forever process for production build:  </br>
“Npm run production stopping, how to get error logs”  </br>
“How to debug TypeError: Missing parameter name at 1: https://git.new/pathToRegexpError” </br> 
“Route issues with path-to-regexp” </br>
“Dependencies check for path-to-regexp errors”  </br>
AI source URL: https://chatgpt.com/ </br>
</br>

**PL.SQL** </br>
Date: 06/07/25 </br>
Adapted from AI Code </br> 
Scope: Within PL.SQL. Adapted the sp_CreateCoffeeBeanVarietal proc based on AI Code.  </br>
Prompts: "I have this existing working code, but I'd like to modify it to make brandname and roastname dynamic
based on selecting roast or brand. User can select in either order. The dropdown not 
selected should update to the applicable brand or roast names. [code snippet]", "I don't want the frontend to query for the FKs, 
can we adjust to be in the PROC instead?", "if I need to query all roast names and sometimes a filtered list, how would I adjust my server file?",
"500 error, debugging help. procedure is functional, confirm with sql queries" </br>
Source URL: https://chatgpt.com </br>
</br>
**DDL.SQL**</br>
Date: 05/01/25</br>
Scope: Data for Messenger Coffee Co coffee Beans extracted from source URL and used in insert statement.</br>
Source URL: https://messengercoffee.co/products</br>
</br>
Date: 05/01/25</br>
Scope: Data for Cafe Britt coffee beans extracted from source URL and used in insert statement.</br>
Source URL: https://www.cafebritt.com/collections/gourmet-coffee/products/costa-rican-tres-rios-valdivia-coffee</br>
</br>

**BrewMethodPage.jsx, CoffeeBeanPage.jsx, CoffeeBeanVarietalPage.jsx, CoffeeReviewPage.jsx, UserPage.jsx, VarietalPage.jsx in frontend/srcp/pages**
</br>
Date: 6/6/2025 </br>
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code. </br>
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain the dyanmic delete form but it's currently erroring out. provide debugging suggestions."</br>
AI Source URL: https://chatgpt.com</br>
</br>
Date: 05/21/2025</br>
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. Code was attempted then fed into the AI for assistance. </br>
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]","here's how I updated code, but delete button isn't showing. troubleshooting walk through" </br>
AI Source URL: https://chatgpt.com</br>
</br>
Date: 05/14/2025</br>
Prompts used to allow the Update form to show up dynamically, and to pass the record's details to the update form so that it can pre-populated. </br>
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.</br>
“how to create an update button that would dynamically open a form and pass along relevant details” “I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist” “I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” “selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”</br>
AI Source URL: https://chatgpt.com</br>
</br>

**CoffeeBeanVarietalPage.jsx and CoffeeReviewPage.jsx in frontend/src/pages/** </br>
Date: 05/21/2025</br>
Scope: Code was copied and modified for CoffeeBeansVarietalPage, CreateCoffeeBeanVarietalForm, and UpdateCoffeeBeanVarietalForm. </br>
Prompts used for the CoffeeBeansVarietalsPage and its Create and Update forms: "Within these existing drop downs, I want to pipe in the dynamic data for the coffee beans and varietals. how can I modify the code? [code snippet]", "the data pulling in is all null but has the number of data points needed. troubleshooting steps" "how to prevent the drop downs from loading before we receive the data" "how can I select only DISTINCT values" </br>
AI Source URL: https://chatgpt.com</br>
</br>

**frontend/src/pages/CoffeeBeanReviewPage.jsx** </br>
Date: 05/15/2025</br>
Scope: adapted from AI Code </br>
Prompt: “refactor to match format and functionality of existing CoffeeBeans page in React” </br>
AI Source URL: https://chatgpt.com </br>
</br>

**frontend/src/components/CreateCoffeeBeanVarietalForm.jsx** </br>
Date: 06/07/25 </br>
Adapted from AI Code </br> 
Scope: Copied from AI Code as indicated with in-line comments.</br>
Prompts: "I have this existing working code, but I'd like to modify it to make brandname and roastname dynamic based on selecting roast or brand. User can select in either order. The dropdown not 
selected should update to the applicable brand or roast names. [code snippet]", "I don't want the frontend to query for the FKs, 
can we adjust to be in the PROC instead?", "if I need to query all roast names and sometimes a filtered list, how would I adjust my server file?",
"500 error, debugging help. procedure is functional, confirm with sql queries" </br>
Source URL: https://chatgpt.com </br>
</br>

**frontend/src/components/CreateCoffeeBeanReviewForm.jsx** </br>
Date: 06/05/2025</br>
Scope: Code copied from AI tool to allow for the Create form drop downs</br>
Prompts: "I need to implement CREATE functionality that populates the dynamic drop downs Brand Name, Roast Name, Brew Method and User. Note that 
the brand name and roast name must be filter (in both directions). If brand A is chosen only display roast names of brand A. If roast A is chosen only display
brands of roast A"</br>
AI Source URL: https://chatgpt.com</br>
</br>

**CreateCoffeeBeanVarietalForm.jsx and CreateCoffeeReviewForm.jsx in frontend/src/components/** </br>
Date: 05/21/2025 </br>
Scope: Code was copied and modified for CoffeeBeansVarietalPage, CreateCoffeeBeanVarietalForm, and UpdateCoffeeBeanVarietalForm.</br>
Prompts used for the CoffeeBeansVarietalsPage and its Create and Update forms: 
"Within these existing drop downs, I want to pipe in the dynamic data for the coffee beans and varietals. how
can I modify the code? [code snippet]", "the data pulling in is all null but has the number of data points needed. troubleshooting
steps" "how to prevent the drop downs from loading before we receive the data" "how can I select only DISTINCT values"</br>
AI Source URL: https://chatgpt.com</br>

**DeleteBrewMethodForm.jsx, DeleteCoffeeBeanForm.jsx, DeleteCoffeeBeanVarietal.jsx, DeleteCoffeeReview.jsx, DeleteUserForm.jsx, DeleteVarietalForm.jsx, TableRow.jsx in frontend/src/components** 
Date: 05/21/2025 </br>
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. </br>
Code was attempted then fed into the AI for assistance. </br>
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through", "n is not a function error", "preflight request sending 204 but 
receiving a 500 after for GET.", "In current code, is DeleteCoffeeBeanForm being bypassed? [code snippets]", "table row should not be specific to deleting coffee 
beans. it needs to scale to accomodate multiple delete forms.", "page not refreshing after successful delete"</br>
AI Source URL: https://chatgpt.com</br>
</br>
**frontend/src/compoents/DeleteUserForm.jsx**</br>
Date: 05/30/2025</br>
Prompts used to rewrite the DeleteUserForm to match clean style with minimal UI for deletion only
AI Source URL: https://chatgpt.com
*/

**frontend/src/components/Navigation.jsx**</br>
Date: 05/21/2025</br>
Adapted React Native code:</br>
Source URL: https://reactnative.dev/docs/button</br>
</br>
**frontend/src/components/TableRow.jsx**</br>
Date: 05/21/2025</br>
Prompts used to modify the DeleteForm reference</br>
"How to modify existing code to route dynamically to different Delete forms [code snippet]" "I have multiple 
pages and multiple delete forms. Will this proposed option work at that scale?"</br>
AI Source URL: https://chatgpt.com</br>
</br>

Date: 05/14/2025</br>
Prompts used to modify the Update button
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.</br>
Prompts: “how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist” “I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” “selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?” </br>
AI Source URL: https://chatgpt.com </br>
</br>

**UpdateBrewMethodForm.jsx, UpdateCoffeeBeanForm.jsx, UpdateCoffeeBeanVarietal.jsx, UpdateCoffeeReview.jsx, UpdateUserForm.jsx, UpdateVarietalForm.jsx in frontend/src/components** </br>
Date: 05/14/2025 </br>
Prompts used to dynamically pre-populate the UpdateCoffeeBeanForm </br>
Note: This was done after the CoffeeBeans page and UpdateCoffeeBeanForm was created, and after the Update button was worked into the table component</br>
Prompts: “how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist” “I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” “selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”</br>
AI Source URL: https://chatgpt.com</br>
</br>
**frontend/src/components/UpdateVarietalForm.jsx**</br>
Date: 05/30/2025</br>
Prompts used to adjust the UpdateVarietalsForm and debug code issues</br>
"I udpated the code for the udpate varietal form so that the data could actually be updated via the stored procedure on the backend database, but nothing is populating in the boxes like it did before [old code snippet] [new code snippet]", "500 error on submit, debugging steps"</br>

**frontend/src/components/UpdateCoffeeReviewForm.jsx**</br>
Date: 06/08/2025</br>
Scope: Code copied from AI tool to allow for the Update form drop downs and update functionality
Prompts: "I need to implement UPDATE functionality that populates the form with the review data. Brew Method , Coffee Bean and User
must be dynamic drop downs. Note that Coffee Beans should be a combination of the brand name - roast name so that you can select the correct choice when there are multiple beans with the same roast name."</br>
AI Source URL: https://chatgpt.com</br>
</br>
Date: 05/21/2025</br>
Scope: Code was adapted from code solutions provided for the CoffeeBeansVarietalsPage and respective 
Create and Update forms </br>
Prompts used for the CoffeeBeansVarietalsPage and its Create and Update forms: 
"Within these existing drop downs, I want to pipe in the dynamic data for the coffee beans and varietals. how
can I modify the code? [code snippet]", "the data pulling in is all null but has the number of data points needed. troubleshooting
steps" "how to prevent the drop downs from loading before we receive the data" "how can I select only DISTINCT values"</br>
AI Source URL: https://chatgpt.com</br>

**frontend/src/components/UpdateCoffeeBeanVarietalForm.jsx**</br>
Date: 06/07/25</br>
Adapted from AI Code </br>
Scope: Copied from AI Code as indicated with in-line comments.</br>
Prompts: "I have this existing working code, but I'd like to modify it to make brandname and roastname dynamic
based on selecting roast or brand. User can select in either order. The dropdown not 
selected should update to the applicable brand or roast names. [code snippet]", "I don't want the frontend to query for the FKs, 
can we adjust to be in the PROC instead?", "if I need to query all roast names and sometimes a filtered list, how would I adjust my server file?","500 error, debugging help. procedure is functional, confirm with sql queries" </br>
Source URL: https://chatgpt.com </br>
</br>
Date: 05/22/2025</br>
Scope: Code copied from AI tool to allow for the Update form drop downs to default to the value of the selected Row. Drop downs were already coded and populating with 
options, but the default value was null. </br>
Prompts: "my update form is populating the selectedRow, and the dropdowns are populated with the database names, but the value for the Names are not being auto selected at the first value [code snippet]"
"troubleshooting errors, defaults aren't piping in","console log shows values, still not populating" </br>
AI Source URL: https://chatgpt.com</br>
</br>
**backend/server.js** </br>
Date: 06/08/2025</br>
Scope: Procedure Order </br>
Prompts: "How can I troubleshoot - the Review Delete is not working after I added review update procedure. The front end and PL statement
are verified working correctly. I belive it is a back end issue"</br>
AI Source URL: https://chatgpt.com</br>
</br>
Date: 06/07/25</br>
Adapted from AI Code </br>
Scope: CREATE coffeebeansvarietals, READ CoffeeBeansVarietals - BrandName, READ CoffeeBeansVarietals - RoastName</br>
Prompts: "I have this existing working code, but I'd like to modify it to make brandname and roastname dynamic
based on selecting roast or brand. User can select in either order. The dropdown not 
selected should update to the applicable brand or roast names. [code snippet]", "I don't want the frontend to query for the FKs, 
can we adjust to be in the PROC instead?", "if I need to query all roast names and sometimes a filtered list, how would I adjust my server file?", "500 error, debugging help. procedure is functional, confirm with sql queries"</br>
Source URL: https://chatgpt.com</br>
</br>
