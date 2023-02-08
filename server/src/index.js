const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const mocks = require('./mocks')
const server = new ApolloServer({
  typeDefs,
  mocks
})

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `)
})


// server.listen().then(req => {
//   console.log(req)
// }) 