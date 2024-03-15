<h1> Secure Blink Internship Task  </h1>

<h2> Ecommerce APP </a></h2>
Task : The objective is to create a secure user authentication and
authorization system using Express.js.

<h2>About this Project</h2>

- An Express.js application has been initialized.
- User registration and authentication have been implemented, including secure storage of user 
  information with password hashing using bcrypt. Additionally, user login functionality with 
  token-based authentication using JWT has been established, providing a JWT token upon 
  successful login
- Secure routes have been created, requiring a valid JWT token for access, and middleware for 
   JWT validation has been implemented to secure these routes.
- A basic role-based access control system has been integrated, with roles like "user" and "admin" established. Access to certain routes is restricted based on the user's role, with admins granted additional permissions.
- A "Forgot Password" feature has been implemented, enabling users to reset their passwords through a secure email-based process.
- Security measures have been implemented. A basic logging system has been put in place to record user activities and security-related events.
- Comprehensive test cases have been written to ensure that authentication, authorization, and security features are working as expected.
<h2>Run Locally</h2>

<h3>Clone the Project</h3>
<pre>git clone https://github.com/Bhanuprasadgantela14/Secure-Blink-Assignment.git</pre>

### If you are running the project locally

- Goto client folder
- Goto to Terminal
  <pre>npm install</pre>
- Again come to root folder

### Command for .env file for root folder
<pre>PORT = 8080
DEV_MODE = development
MONGO_URL = mongodb+srv://bhanugantela45:bhanu2002@mini-twi.aen5jei.mongodb.net/ecommerce
JWT_SECRET = HEJFOBNOFURNGFRNJFI</pre>

### command for .env file in client folder
<pre>REACT_APP_API = http://localhost:8080</pre>

<h3>Go to Terminal And give the Below Commands one by one</h3>
  <h4>Make sure you have added .env file gitub as restrictions so I can not upload it. But ininstructions I have given It</h4>
<pre>npm install</pre>
<pre>npm run dev</pre>

### Running locally
<h2> Working of the Website</h2>

- you will be taken to the cover page
- click on the Register Button by adding your details 
- Now you are redirected to the Home page
- Created a user dashboard and Admin dashboard seperately here there are some pages are restricted to user .
- Included a user-friendly interface.
- Here you can change your password and here good security authentication is made.

  <h1> DONE !!!</h1>
  <h1>Thank you For giving this Opportunity</h1>
