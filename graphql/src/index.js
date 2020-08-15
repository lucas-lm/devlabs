const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    hello: String
  }
`
const resolvers = {
  Query: {
    hello: () => 'Hello, world!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const start = async () => {
  const { url } = await server.listen()
  console.log(`Up and running at ${url}`)
}

start()
