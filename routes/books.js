const express = require('express');
const {getSingleById,
    getAllIssuedBooks,
    addNewBook,updateBookbyId,
}= require('../controllers/book-controller');

const { books } = require('../data/books.json');
const{ users } = require('../data/users.json');
// const { users } = require("./users");

const {UserModel, BookModel} = require("../models");
const { get } = require('mongoose');
const { getAllBooks } = require('../controllers/book-controller');

const router = express.Router();

/*  
route : /books
method : GET
description : get all the books
access : public
parameters : none
*/

router.get("/", getAllBooks);


/*  
route : /books/:id
method : GET
description : get the books by their id
access : public
parameters : id
*/
router.get("/:id",getSingleById);

/*  
route : /books/issued
method : GET
description : get all issued books
access : public
parameters : none
*/

router.get('/issued',getAllIssuedBooks);
    
    
/*  
route : /books
method : POST
description :Create a new book
access : public
parameters : none
*/

router.post('/', addNewBook);


/*route : /books/:id
method : POST
description :Updating a new book
access : public
parameters : none
*/

router.put('/:id',updateBookbyId);



module.exports = router;



