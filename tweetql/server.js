import { ApolloServer, gql } from "apollo-server-express";

const server = new ApolloServer({})

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
})
/*
여기까지 작성하면 에러남
Error: Apollo Server requires either an existing schema, modules or typeDefs
*/