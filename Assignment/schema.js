const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
        hotel_id: Int!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
   }

   type Book {
        hotel_id: Int!
        user_id: Int!
        booking_date: String!
        booking_start: String!
        booking_end: String!
    }

    type User {
        user_id: ID!
        username: String!
        password: String!
        email: String!
    }

   type Query {
        getHotel: [Hotel]
        getHotelByID(id: ID!): Hotel
        getHotelByCity(city: String!): [Hotel]
        getHotelByName(name: String!): [Hotel]
        getUser: [User]
        getUserByID(id: ID!): User
        getBook: [Book]
        getBookByID(id: ID!): Book
   }

   type Mutation {
        addHotel(hotel_id: Int!
            hotel_name: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!): Hotel

        updateHotel(hotel_id: String!,
            hotel_name: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!): Hotel

        deleteHotel(id: ID!): Hotel

        addUser(user_id: Int!
            username: String!
            password: String!
            email: String!): User

        addBook(hotel_id: Int!
            user_id: Int!
            booking_date: String!
            booking_start: String!
            booking_end: String!): Book
   }
`