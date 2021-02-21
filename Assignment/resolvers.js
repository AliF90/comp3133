const User = require('./models/User');
const Hotel = require('./models/Hotel');
const Book = require('./models/Book');

exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return await Hotel.find({});
        },
        getHotelByID: async (parent, args) => {
            return await Hotel.findById(args.id);
        },
        getHotelByCity: async (parent, args) => {
            return await Hotel.find({"city" : args.city});
        },
        getHotelByName: async (parent, args) => {
            return await Hotel.find({"hotel_name" : args.name});
        },
        getUser: async (parent, args) => {
            return await User.find({});
        },
        getUserByID: async (parent, args) => {
            return await User.findById(args.id);
        },
        getBook: async (parent, args) => {
            return await Book.find({});
        },
        getBookByID: async (parent, args) => {
            return await Book.findById(args.id);
        },
    },
    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
            
            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newHotel = new Hotel({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
            });
            return await newHotel.save();
        },
        updateHotel: async (parent, args) => {
            console.log(args)
            if (!args.id){
                return;
            }
            return await Hotel.findOneAndUpdate(
                {
                    hotel_id: args.id
                },
                {
                    $set: {
                        hotel_id: args.hotel_id,
                        hotel_name: args.hotel_name,
                        street: args.street,
                        city: args.city,
                        postal_code: args.postal_code,
                        price: args.price,
                        email: args.email,
                    }
                }, {new: true}, (err, hotel) => {
                    if (err) 
                    {
                        console.log('Something went wrong when updating the hotel');
                    } else 
                    {
                        return employee
                    }
                }
            );
        },
        deleteHotel: async (parent, args) => {
            console.log(args)
            if (!args.id){
                return JSON.stringify({status: false, "message" : "No ID found"});
            }
            return await Hotel.findByIdAndDelete(args.id)
        },
        addUser: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
            
            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newUser = new User({
                user_id: args.user_id,
                email: args.email,
                username: args.username,
                password: args.password,
            });
            return await newUser.save();
        },
        addBook: async (parent, args) => {
            console.log(args)

            let newBook = new Book({
                hotel_id: args.hotel_id,
                user_id: args.user_id,
                booking_date: Date.parse(args.booking_date),
                booking_start: Date.parse(args.booking_start),
                booking_end: Date.parse(args.booking_end),
            });
            return await newBook.save();
        },
    }
}