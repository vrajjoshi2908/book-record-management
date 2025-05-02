//  DTO = Data Transfer Object

class IssuedBook{
    _id;
    name;
    genre;
    price;
    publisher;
    issuedBy;
    issuedDate;
    returnDate;
    
    constructor(user){
        this._id=user.IssuedBook._id;
        this.name=user.IssuedBook.name; 
        this.genre=user.IssuedBook.genre;
        this.price=user.IssuedBook.price;
        this.publisher=user.IssuedBook.publisher;
        this.issuedBy=user.issuedBook.issuedBy;
        this.issuedDate=user.issuedBook.issuedDate;
        this.returnDate=user.issuedBook.returnDate;
    }
}

module.exports = IssuedBook;