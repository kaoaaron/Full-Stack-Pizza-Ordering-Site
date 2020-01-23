# Full Stack Pizza Ordering Website

## Description
This project was created in order to test my ability to create a basic full stack application using the MERN stack.

This site allows you to order pizza which stores the data in a NoSQL database.
The orders info is stored in an api. The content then gets pulled for the pizza owner/administrators to view and search for order info.

### Routes

`http://localhost:3000/` & `http://localhost:3000/order` - order form
`http://localhost:3000/order` - order details after form submission
`http://localhost:3000/orderslist` - search/view orders
**Search orders searches for exact matches for first or last name, and phone number**
`http://localhost:3001/api/orders` - display api data in json
`http://localhost:3000/*anything else*` - error page

## How to Run Application
1. run `npm install` directly inside the folder, but also inside the client folder
**This app is created using React as the front end so it runs on a different port.**
2. connect to MongoDB with the default settings (default port on localhost)
3. change your directory back to the top level directory and run `npm start`