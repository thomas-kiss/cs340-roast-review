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
NOTE: Often the same prompt was used for one page or form, then the team scaled this across multiple pages and forms. This means some of the citations are duplicative. 

</br>
**General Use** </br>
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
*/

**frontend/src/pages/BrewMethodPage.jsx** </br>
Date: 05/21/2025 </br>
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. </br>
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through" </br>
AI Source URL: https://chatgpt.com</br>
</br>
Date: 05/14/2025 </br>
Adapted from the ai adapted code in CoffeeBeans.jsx. See relevant citation under CoffeeBans.jsx section.</br>
</br>

Date: 6/6/2025</br>
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code.  </br>
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain the dyanmic delete form but it's currently erroring out. provide debugging suggestions."</br>
AI Source URL: https://chatgpt.com </br>
</br>

**frontend/src/pages/CoffeeBeanPage.jsx** </br>
Date: 05/14/2025 </br>
Prompts used to allow the Update form to show up dynamically, and to pass the record's details to the update form so that it can pre-populated. </br> 
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.</br>
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?” </br>
AI Source URL: https://chatgpt.com</br>
</br>
Date: 05/21/2025</br>
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. </br>
Code was attempted then fed into the AI for assistance. </br>
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through", "n is not a function error", "preflight request sending 204 but 
receiving a 500 after for GET.", "In current code, is DeleteCoffeeBeanForm being bypassed? [code snippets]", "table row should not be specific to deleting coffee 
beans. it needs to scale to accomodate multiple delete forms.", "page not refreshing after successful delete" </br>
AI Source URL: https://chatgpt.com </br>
</br>
Date: 6/6/2025</br>
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code.  </br>
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain
the dyanmic delete form but it's currently erroring out. provide debugging suggestions." </br>
AI Source URL: https://chatgpt.com </br>
</br>
**frontend/src/pages/CoffeeBeanVarietalPage.jsx** </br>
Date: 05/21/2025
Scope: Code was copied and modified for CoffeeBeansVarietalPage, CreateCoffeeBeanVarietalForm, and UpdateCoffeeBeanVarietalForm.
Prompts used for the CoffeeBeansVarietalsPage and its Create and Update forms: 
"Within these existing drop downs, I want to pipe in the dynamic data for the coffee beans and varietals. how
can I modify the code? [code snippet]", "the data pulling in is all null but has the number of data points needed. troubleshooting
steps" "how to prevent the drop downs from loading before we receive the data" "how can I select only DISTINCT values"
AI Source URL: https://chatgpt.com
</br>
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
</br>
Date: 05/14/2025
Prompts used to allow the Update form to show up dynamically, and to pass the record's details to the update form so that it can pre-populated. 
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
</br>
Citation for use of AI Tools
Date: 6/6/2025
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code. 
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain
the dyanmic delete form but it's currently erroring out. provide debugging suggestions."
AI Source URL: https://chatgpt.com
</br>

**frontend/src/pages/CoffeeBeanReviewPage.jsx** </br>
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
</br>
Date: 05/21/2025
Scope: Code was adapted from code solutions provided for the CoffeeBeansVarietalsPage and respective 
Create and Update forms
Prompts used for the CoffeeBeansVarietalsPage and its Create and Update forms: 
"Within these existing drop downs, I want to pipe in the dynamic data for the coffee beans and varietals. how
can I modify the code? [code snippet]", "the data pulling in is all null but has the number of data points needed. troubleshooting
steps" "how to prevent the drop downs from loading before we receive the data" "how can I select only DISTINCT values"
AI Source URL: https://chatgpt.com
</br>
Date: 05/15/2025
SCope: adapted from AI Code
Prompt: “refactor to match format and functionality of existing CoffeeBeans page in React”
AI Source URL: https://chatgpt.com
</br>
Date: 05/14/2025 </br>
Adapted from the ai adapted code in CoffeeBeans.jsx. See relevant citation under CoffeeBans.jsx section.</br>
</br>
Date: 05/14/2025
Prompts used to allow the Update form to show up dynamically, and to pass the record's details to the update form so that it can pre-populated. 
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
</br>
Date: 6/6/2025
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code. 
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain
the dyanmic delete form but it's currently erroring out. provide debugging suggestions."
AI Source URL: https://chatgpt.com
</br>
**frontend/src/pages/UserPage.jsx** </br>
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
</br>
Date: 05/14/2025 </br>
Adapted from the ai adapted code in CoffeeBeans.jsx. See relevant citation under CoffeeBans.jsx section.</br>
</br>
Date: 05/14/2025
Prompts used to allow the Update form to show up dynamically, and to pass the record's details to the update form so that it can pre-populated. 
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
</br>
Date: 6/6/2025
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code. 
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain
the dyanmic delete form but it's currently erroring out. provide debugging suggestions."
AI Source URL: https://chatgpt.com
</br>
**frontend/src/pages/UserPage.jsx** </br>
Date: 05/21/2025
Scope: Modified code from AI tools to enable the delete button to dynamically grab the relevant delete form. 
Code was attempted then fed into the AI for assistance. 
Prompts: "previously this code hard-coded the delete form. I am trying to make it dynamic with props but it's not yet working [code snippet]",
"here's how I updated code, but delete button isn't showing. troubleshooting walk through"
AI Source URL: https://chatgpt.com
</br>
Date: 05/14/2025
Prompts used to allow the Update form to show up dynamically, and to pass the record's details to the update form so that it can pre-populated. 
Note: This was done after the update button was already added to the Table row, but not dynamic nor attached to the form.
“how to create an update button that would dynamically open a form and pass along relevant details”
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebean Form, and a CoffeeBeans page where the table and form exist”
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.” 
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?”
AI Source URL: https://chatgpt.com
</br>
Date: 6/6/2025
Scope: Modified existing code to accommodate Delete CUD operation. Code was adapted from AI code. 
Prompts: "Using React, I have a tablerow component, multiple delete forms, and multiple pages that show table data. I want the table row to contain
the dyanmic delete form but it's currently erroring out. provide debugging suggestions."
AI Source URL: https://chatgpt.com


**backend/server.js** </br>
Date: 06/07/25
Adapted from AI Code 
Scope: CREATE coffeebeansvarietals, READ CoffeeBeansVarietals - BrandName, READ CoffeeBeansVarietals - RoastName
Prompts: "I have this existing working code, but I'd like to modify it to make brandname and roastname dynamic
based on selecting roast or brand. User can select in either order. The dropdown not 
selected should update to the applicable brand or roast names. [code snippet]", "I don't want the frontend to query for the FKs, 
can we adjust to be in the PROC instead?", "if I need to query all roast names and sometimes a filtered list, how would I adjust my server file?",
"500 error, debugging help. procedure is functional, confirm with sql queries", ""
Source URL: https://chatgpt.com













**Citation for use of AI Tools** </br>
Date: 05/07/2025 </br>
Description of prompts used to help generate the Coffee Reviews page and component .jsx files (this was done after a working project containing the Users and Brew Methods pages/components was completed): </br>
Asked the model to hold responses while providing the following: DDL.sql file, the Users and Brew Methods pages/components, and server.jsx file) </br>
“How should I  approach creation of the Coffee Reviews files based on the existing User and Brew Methods files” </br>
“For a better UX I would like to allow the user to select the roastName, BrewMethods.name, and Users.userName instead of the IDs. It will be difficult to tell what the IDs correspond to without these names” </br>
“I would like the user to select these values from a drop down” </br>
“How can we leverage these to populate the IDs when adding or updating a coffee review. Be sure to consider the DDL provided earlier”  </br>
AI source URL: https://chatgpt.com/ </br>

 </br>
Citation for use of AI Tools </br>

Date: 05/14/2025 </br>
Prompts used to help make the Update button dynamically display the UpdateCoffeeBeansForm on the CoffeeBeans page, and pre-populate the values within the input boxes:  </br>
 </br>
Note: This was done after the CoffeeBeans page and UpdateCoffeeBeansForm was created, and after the Update button was worked into the table component </br>
“how to create an update button that would dynamically open a form and pass along relevant details” </br>
“I currently have a tablerow component that houses the record and the update button, an updatecoffeebeans Form, and a CoffeeBeans page where the table and form exist” </br>
“I want the form to look the same as my current form, but I want it to dynamically pop up on the page pre-populated once I select a row and hit the update button.”  </br>
“selectedCoffeeBean is being passed to the form but nothing is showing up for the deconstructed variables and nothing is pre-populating.What could be wrong? What are some debugging options?” </br>
AI Source URL: https://chatgpt.com </br>
 </br>
Citation for use of AI Tools </br>
Date: 05/15/2025 </br>
Prompts used to help make the Update button dynamically display the UpdateCoffeeReviewsForm on the CoffeeReviewsPage, and pre-populate the values within the input boxes:  </br>
 </br>
Note: This was done after after using the UpdateCoffeeBeansPage code (above citation) as a base for the code in CoffeeReviewsPage. The non-working code was provided to AI and the following prompts were used
“refactor to match format and functionality of existing CoffeeBeans page in React” </br>
Several followup debugging statements and questions were used to get things to function properly. </br>
AI Source URL: https://chatgpt.com </br>
 </br>
