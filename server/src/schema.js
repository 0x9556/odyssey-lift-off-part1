const { gql } = require('apollo-server')

const typeDefs = gql`
    type Track{
        id:ID!
        titlle:String!
        author:Author!
        thumbnail:String
        length: Int
        modulesCount: Int
    }

    type Author{
        id:ID!
        name:String!
        photo:String!
    }

    type Query{
        trackForHome:[Track!]!
    }
`
module.exports = typeDefs