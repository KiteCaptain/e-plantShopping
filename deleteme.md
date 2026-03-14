

1
Final Project: Paradise Nursery Shopping Application

2
Important notice about this lab environment

3
Setting up your environment in GitHub

4
Create your React project

5
Updating the Readme.md file

6
Task 1: ProductList component Layout

7
Task 2: State management using Redux

8
Task 3: CartItems component

9
Task 4: Integrate Redux functionality in your components

10
Task 5: Import details to store.js

11
Task 6: Set up the global store

12
Project Completion

13
Checklist for Submission
Task 1: ProductList component Layout
The product page will allow your users to shop for the different plants you sell. Each plant will display on its own "card" with its related data stored in the plant object. You will store the plant objects in an array. Follow these steps for the array and plant objects.

Display the Plant Array
Navigate to the ProductList.jsx component and you will see an array named plantsArray with the plants details.
Each plant object contains the categories, properties name, image URL, description, and cost.
Display Plant Details within div tag with class name product-grid.
Utilize array methods to map over the plant array.

Hint: use the map() method to iterate array.

Render each plant's details on the page, including name, image, description, and cost.

Display an Add to Cart button for each plant.
Display plants and add to cart button solution
Include above code within class name product-grid.
Create one variable named addedToCart for state management using the useState hook to track which products are added to the cart.
Sample solution for useState hook
Add to Cart Functionality
Create the handleAddToCart function to implement the functionality for adding a plant to the cart when the user selects the Add to Cart button. This function should take one parameter that contains the information of the selected plant. This information should then be dispatched to the addItem inside the function component CartSlice.

Additionally, reflect the product has been added to the cart. Update the setAddedToCart state to by setting the product name as a key and its value to true.

Sample solution for add to cart
Note: Make sure that you import the addItem reducer from CartSlice.jsx

The handleAddToCart() function will carry the details of that plant which user want to add in the cart. And the plant details to the cart at a global level using CartSlice.jsx.

Make sure that you save these changes by pushing your code to your GitHub repository.


============================