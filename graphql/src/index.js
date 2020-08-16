const { ApolloServer, gql } = require('apollo-server')

const users = [
  {_id: '1', email: 'lucas-m@outlook.com', name: 'Lucas', active: true},
  {_id: '2', email: 'noreply@noreply.no', name: 'No', active: false}
]

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String): User!
  }

  type Mutation {
    createUser(email: String!): User!
  }
`
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    users: () => users,
    getUserByEmail: (_, { email }) => users.find(user => email === user.email)
  },

  Mutation: {
    createUser: (_, args) => {
      const newUser = {_id: String(Math.random()*1000), active: true, name: '', email: args.email}
      users.push(newUser)
      return newUser
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const start = async () => {
  const { url } = await server.listen()
  console.log(`Up and running at ${url}`)
}

start()
