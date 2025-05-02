const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({ 
        name: {
            type: String,
            required: true,
              },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        issuedBook: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
            required: false,
        },
        returnDate: {
            type: String,
            required: false,
        },
        subscriptionType: {
            type: String,
            required: true,
        },
        subscriptionDate: {
            type: Date,
            default: Date.now,
        },
    },

   {
     timestamps: true,
    }
);

    module.exports = mongoose.model("User", userSchema);