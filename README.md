# Book-Store-App

## **Technologies used are**

- **MongoDB** for Database Management System
- **Express JS** for Server Side Rendering
- **React JS** for Frontend
- **Node JS** for backend



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


## **Clone the Repository**

### Installation Steps

```mathematica
1. Clone the Repository
2. Navigate to the Project Directory
3. Install Backend Dependencies
4. Install Frontend Dependencies
5. Set Up Environment Variables
6. Run the Backend Server
7. Run the Frontend Application
8. Access the Application
```

### To clone the above project follow these commands-

1) ***Open your terminal and run the following command:***

```bash
git clone https://github.com/your-username/book-store-app.git
```

2) ***Navigate to Project Directories***

```bash
cd book-store-app
```

3) ***Install Dependencies***

- For Backend

```bash
cd backend
npm install mongoose express cors dotenv
```

- For Frontend

```bash
cd ../frontend
npm install react-router-dom daisyui react-toastify axios
```

4) ***Setup environment variables***

```env
PORT = 5000
MongoDBUrl = #write your actual MongoDB url
```

5. ***Run Server***

- Backend

```bash
cd backend
npm run server
```

- Frontend

```bash
cd frontend
npm run dev
```

> **_Happy Coding!_** 🎉
