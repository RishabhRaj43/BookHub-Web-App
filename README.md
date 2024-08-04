# Book-Store-App

Technologies used are

<li>**MongoDB** for Database Management System</li>
<li>**Express JS** for Server Side Rendering </li>
<li>**React JS** for Frontend</li>
<li>**Node JS** for backend</li>



Libraries used are

<h3>For Backend</h3>
<ul>1) Mongoose for creating model and connecting with database. </ul>
<ul>2) Express for creating server, middlewares which includes parsing JSON payloads and defining routes. </ul>
<ul>3) Cors (Cross-Origin Resource Sharing) for allowing secure cross-origin requests from the frontend.</ul>
<ul>4) dotenv for bringing environment variables from '.env' file to ensure sensitive information is securely managed.</ul>


<h3>For Frontend</h3>
<ul>1) React-router-dom for defining routes. </ul>
<ul>2) Daisy UI for building components. </ul>
<ul>3) Toast for beautiful React notifications. </ul>
<ul>4) Axios for making HTTP requests from frontend to backend basically for handling API requests. </ul>


# **Clone the Repository**

### To clone the above project follow these commands-

1) ***Open your terminal and run the following command:***

```
git clone https://github.com/your-username/book-store-app.git
```

2) ***Navigate to Project Directories***

```
cd book-store-app
```

3) ***Install Dependencies***

-For Backend

```
cd backend
npm install mongoose express cors dotenv
```

-For Frontend

```
cd ../frontend
npm install react-router-dom daisyui react-toastify axios
```

4) ***Setup environment variables***

```env
PORT = 5000
MongoDBUrl = #write your actual MongoDB url
```

