const express = require('express');
const { users } = require('../data/users.json');
 
const {UserModel, BookModel} = require("../models");

const { getAllUsers,
        getSingleUserById , 
        deleteUser , 
        updateUserById,
        createNewUser,
        getSubscriptionDetailsById
    } = require('../controllers/user-controller');


    const router = express.Router();


/*  
route : /users
method : GET
description : get all users
access : public
parameters : none
*/

router.get('/', getAllUsers);

/*  
route : /users/:id
/users/2
method : GET
description : get all users
access : public
parameters : none
*/

router.get('/:id',getSingleUserById ) ;

/*  
route : /users
method : POST
description : Create a new User
access : public
parameters : none
*/

router.post('/',createNewUser);

/*  
route : /users/:id
method : PUT
description : Updating a new User
access : public
parameters : id
*/

router.put('/:id',updateUserById);

 /*  
route : /users/:id
method : DELETE
description : Updating a new User
access : public
parameters : id
*/ 

router.delete('/:id',deleteUser);



router.get("/subscription-details/:id",getSubscriptionDetailsById);
    

//default export
module.exports = router;