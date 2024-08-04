# Book-Store-App

Technologies used are

<li>**MongoDB** for Database Management System</li>
<li>**Express JS** for Server Side Rendering </li>
<li>**React JS** for Frontend</li>
<li>**Node JS** for backend</li>



## Libraries Used

### For Backend

1. **Mongoose** for creating models and connecting with the database.
2. **Express** for creating the server, middlewares which include parsing JSON payloads, and defining routes.
3. **Cors (Cross-Origin Resource Sharing)** for allowing secure cross-origin requests from the frontend.
4. **dotenv** for bringing environment variables from the `.env` file to ensure sensitive information is securely managed.

### For Frontend

1. **React-router-dom** for defining routes.
2. **Daisy UI** for building components.
3. **Toast** for beautiful React notifications.
4. **Axios** for handling API requests from the frontend to the backend.


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

