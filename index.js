
const express = require('express');

//  import DB connection file
const DbConnection = require ("./databaseConnection");

// import DB

const dotenv = require("dotenv");


// import routes

const usersRouter = require('./routes/users.js');
const booksRouter = require('./routes/books.js');


dotenv.config();

const app = express();

DbConnection();

const port = 8081;

app.use(express.json());


// npm i nodemon --save-dev
//const data = ["Vraj","dev"];
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is running successfully"
    });
});

app.use("/users",usersRouter);
app.use("/books",booksRouter);


app.get("*", (req, res) => {
    res.status(404).json({
        message: "This route is not found",
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
