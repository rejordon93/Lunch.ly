# Lunch.ly Reservation System

The Lunch.ly Reservation System is a server-side templated application built with Express.js. It allows users to manage customers, reservations, and search for customers by name. Additionally, it provides functionality to display the top 10 customers based on the number of reservations they have made.

Table of Contents
Installation
Usage
Features
Contributing
License
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/lunchly-reservation-system.git
Navigate to the project directory:

bash
Copy code
cd lunchly-reservation-system
Install the required dependencies:

bash
Copy code
npm install
Create a database named lunchly and import the sample data from data.sql.

Start the server:

bash
Copy code
npm start
Visit http://localhost:3000 in your browser to access the Lunch.ly Reservation System.

Usage
The Lunch.ly Reservation System provides the following functionality:

View a list of customers
View detailed information about a specific customer
Add a new customer
Search for a customer by name
Display the top 10 customers based on reservations made
To use these features, navigate through the user interface provided by the application.

Features
Class (Static) Methods
The Lunch.ly Reservation System utilizes static methods in the model classes to perform database operations. These static methods, such as Customer.get(id), allow for creating new instances of objects or looking up records in the database.

For more information, refer to the MDN documentation on static methods.

Templating with Nunjucks
The Lunch.ly Reservation System uses the Nunjucks library, which is an implementation of the Jinja2 templating language in JavaScript. Express.js is used to render complete HTML pages using Nunjucks templates located in the /templates/ directory.

Saving Reservations
The application includes a .save() method for customers, which adds a new customer or updates the existing record if there are any changes. However, there is no equivalent method for reservations. You will need to implement a similar .save() method for reservations to enable saving reservations.

Search Functionality
To improve user experience, a search form is added to the bootstrap navigation bar. This allows users to search for a customer by name. The application abstracts the database operations to the model classes, ensuring that the routes do not directly interact with the database.

Best Customers
A new route is added to display the top 10 customers based on the number of reservations they have made. This functionality is implemented in the model class, performing the necessary counting work in the database rather than in JavaScript.

Contributing
Contributions to the Lunch.ly Reservation System are welcome! If you want to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes.
Commit your changes and provide a descriptive commit message.
Push your changes to your forked repository.
Submit a pull request describing your changes.
For major changes or significant features, it's recommended to open an issue first to discuss the proposed changes.

License
The Lunch.ly Reservation System is licensed under the MIT License. See the [LICENSE](
