# Task by Brikli

* *Date Created*: 18 DECEMBER 2024
* *Last Modification Date*: 19 DECEMBER 2024
* *GitHub URL*: <https://github.com/TheAvadh/AuthTask.git>


## Author

* Avadh Rakholiya (avadhrakholiya@gmail.com)



## Built With

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
* [Axios](https://axios-http.com/docs/intro) - For making HTTP requests
* [React Router](https://reactrouter.com/) - For routing between pages
* [Tailwind CSS](https://tailwindcss.com/) - For styling
* [npm](https://docs.npmjs.com//) - Dependency Management
* [MongoDB](https://www.mongodb.com/) - NoSql Database

## Testing Credentials
All the emails are dummy!

Landlord: landlord@gmail.com   
Property Manager: propertymanager@gmail.com  
Tenant: tenant@gmail.com

Password for all: tester123

## Work Done

I am assigned with the following tasks which I implemented successfully:


* ⁠DB must include a field for name, email, password and role.
* ⁠Roles are : landlord, property managers, tenants.
* ⁠Once logged in, they should see their name + role.
* ⁠Should be secure, but no need for encryption.
* ⁠Tech stack : React, NodeJS and JSON to get data any package you deem necessary.
* ⁠No need for any UI/UX. Just want to see the bare bone process.

I implented a fully-functional website for the same. Below is the detailed description of each tasks:

* ### Sign Up
    In the sign up process, the website asks for the role (drop down), first name, last name, email and password from the user. Email and Passoword fields include validation of the inputed data. The password must be atleast 8 character long and it should include atleast a number or a special character. Website also checks for the confirmation of the password which is again validated field which will compare it with the above entered password. Once the user clicks Sign Up button, an alert will be generated stating "Sign Up successful".

* ### Login
    In the login process, the website will take email and password as an input. Both the fields are validated and hence it takes the same minimum criteria to successfully login. Once the user inputs valid credentials and press Login, it will redirect to the respective dashboard.

* ### Dashboard
    Landlord and Tenant shares the dashboard (same URL) and the content on the dashboard changes dynamically based on the role of the user. Property Manager has a different dashboard on separate URL. It was done so as the task did not specify a particular way so done both.



## Sources Used


### tailwind css installation

Install Tailwind CSS with Create React App 
<a href="https://tailwindcss.com/docs/guides/create-react-app">Official Documentation</a>

### assests/images
Landlord image <a href="https://www.flaticon.com/free-icons/landlord" title="landlord icons">Landlord icons created by Eucalyp - Flaticon</a>
Property Manager <a href="https://www.flaticon.com/free-icons/lender" title="lender icons">Lender icons created by pojok d - Flaticon</a>
Tenent Image <a href="https://www.flaticon.com/free-icons/tenant" title="tenant icons">Tenant icons created by Freepik - Flaticon</a>

## Acknowledgments

* I am grateful for the opportunity and would love to keep learning!!
