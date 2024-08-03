import express from "express";
import dotenv from "dotenv";
import connect from "./MongoDB/mongoDB.connect.js";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

connect();

const app = express();
app.use(cors());
app.use(express.json());

const mongoUrl = process.env.MongoDBUrl;


app.use("/book", bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
