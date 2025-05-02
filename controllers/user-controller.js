const {UserModel,BookModel} = require('../models');

exports.getAllUsers = async (req, res) => {
   
    const users = await UserModel.find();

    if (users.length === 0) {
        return res.status(404).json({
            users: false,
            message: "No Users found",
        });
        res.status(200).json({
            users: true,
            data: users,
        });
     };
};

exports.getSingleUserById = async (req, res) => {
    const {id} = req.params;

const user = await UserModel.findById({_id: id});

    if(!user) {
        return res.status(404).json({
            Success: false,
            message: "User not found",
        });
    }
    return res.status(200).json({
        Success: true,
        message: "User found",
        data: user,
    });
};

exports.deleteUser = async (req, res) => {
const {id} = req.params;

const user = await UserModel.deleteOne({_id: id});

if(!user) {
    return res.status(404).json({
        Success: false,
        message: "User not found"
    });
}

return res.status(200).json({Success: true,message: "User deleted successfully"});

};

exports.updateUserById =async (req ,res) => { 
    const {id} = req.params;
    const data = req.body;

const updateUserByData = await UserModel.findOneAndUpdate({
    _id: id
},  {
    $set:{
        ...data,
    },
  },{  
    new: true,
})

    return res.status(200).json({
        Success: true,
        data: updateUserByData,
        
    });
};

exports.createNewUser =async (req ,res) => {

    const {id, name, surname, email, subscriptionType, subscriptionDate} = req.body;
        const newUser = await UserModel.create({
            name,
            surname,
            email,
            subscriptionType,
            subscriptionDate,
        })
            return res.status(201).json({
                Success: true,
                data: newUser,
                
              });
};

exports.getSubscriptionDetailsById = async (req, res) => {
    const { id } = req.params;

    const user = await UserModel.findById({ _id: id });

    if (!user) 
        return res.status(404).json({
            Success: false,
            message: "User not found",
        });

        const getDateInDay = (data = "") => {
            let date;
            if(data === "") {
                // current date
                date = new Date();
            }else{
                // gete date on the basis of variable
                date = new Date(data);
            }
            let days = Math.floor(data / (1000 * 60 * 60 * 24));
            return days;
    };
    const subscriptionType = (date) =>{
        if (user.subscriptionType === "Basic") {
            date = date +90;
        }else if (user.subscriptionType === "Standard") {
            date = date + 180;
        } else if (user.subscriptionType === "Premium") {
            date = date + 365;
        }
        return date;
    };
    
    let returnDate = getDateInDay(user.returnDate);
    let currentDate = getDateInDay();
    let subscriptionDate = getDateInDay(user.subscriptionDate);
    let subscriptionExpiration = subscriptionType(subscriptionDate);
    
    const data = {
        ...user,
        subscriptionExpired: subscriptionExpiration < currentDate,
        daysLeftForExpiration: subscriptionExpiration <= currentDate ?
         0 
         : subscriptionExpiration - currentDate,
        fine:
         returnDate < currentDate 
         ? subscriptionExpiration <=
         currentDate? 200 : 100 : 0,
};
return res.status(200).json({
    Success: true,
    data});
};
