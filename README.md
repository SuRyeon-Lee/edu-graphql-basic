# ๐GraphQL๋ก ์ํ API ๋ง๋ค๊ธฐ
๋ธ๋ง๋์ฝ๋๋์ [GraphQL๋ก ์ํ API ๋ง๋ค๊ธฐ](https://nomadcoders.co/graphql-for-beginners/lobby)๋ฅผ ๋ณด๊ณ  ๋ฐ๋ผ๊ฐ๋ ์ค์๋๋ค. 

<br/><br/>

## ๐คwhat is api?
* api(Application Programming Interface)๋ ๋ค์ด๋ฐ๊ณ  ๊ทธ๋ฐ๊ฒ์ด ์๋๋ค.
* api๋ REST api, GraphQl api, Web api, Browser api, Twitter api, Amazon api ๋ฑ ์์ฒญ๋ ๋ค์ํ ์ข๋ฅ๊ฐ ์๋ค.
* Interface๋ ๋ฌด์ธ๊ฐ์ '์ํธ์์ฉ'ํ๋ ๋ฐฉ๋ฒ์ ๋งํ๋ค. (ํฐ๋น์ ์ํตํ๊ฒ ํด์ฃผ๋ ๋ฆฌ๋ชจ์ฝ, ์น์ฌ์ดํธ์ ์ํตํ  ์ ์๊ฒํ๋ ๋ฒํผ ๊ฐ์ ๊ฒ๋ค)
* ๋ธ๋ผ์ฐ์ ๋ ์์ฃผ ํฐ ๋ฆฌ๋ชจ์ฝ์ด๋ผ๊ณ  ์๊ฐํ์. ๋ง์ ๊ธฐ๋ฅ์ ์ง์ํ๋๋ฐ, ๊ทธ์ค ์ฌ๋ฐ๋ ๊ฒ์ด [๋ฐฐํฐ๋ฆฌ api](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API). ๋ธ๋ผ์ฐ์ ๊ฐ ๋ง๋ค์ด๋์ api๋ก ํด๋น ๊ธฐ๋ฅ์ ํ์ฉํ  ์ ์๋ค.
* ๋ฆฌ๋ชจ์ฝ(์ธํฐํ์ด์ค)์์ ๋ง๋ค์ด๋์ ๊ธฐ๋ฅ๋ง ์ฌ์ฉํ  ์ ์๋ค. 

<br/><br/>

## ๐ซฅRest api
* Rest api์ GraphQl api๋ ๋ฆฌ๋ชจ์ฝ์ ๋ฒํผ์ ์ด๋ป๊ฒ ์๊ฒผ๋์ง์ ์ฐจ์ด์ด๋ค.
* ์๋ฅผ ๋ค์ด ์ํ์ ๋ณด๋ฅผ ๊ฐ์ ธ์จ๋ค๊ณ  ํ ๋ Rest api๋ก๋ nomadmovies.co/api/movies์ด๋ฐ ์์ url๋ก request๋ฅผ ๋ณด๋ผ๊บผ๊ณ , ๊ทธ url์ ๋ค์ json๋ฐฐ์ด์ ๋ด์ค๋ค.
* nomadmovies.co/api/movies, nomadmovies.co/api/movies/1, nomadmovies.co/api/search?rating=9 ์ด๋ฐ์์ api๋ฅผ ํธ์ถํ๋ค.
* rest api๋ก ์ํ์ ๋ณด๋ค์ ๋๊ณ ์ค๋ [YTS api](https://yts.torrentbay.to/api)์ฌ๊ธฐ ๋ฌธ์์์ ๋์จ ๋งํฌ[๋งํฌ](https://yts.mx/api/v2/list_movies.json)๋ฅผ ์ฃผ์์ฐฝ์ ์๋ ฅํ๋ฉด ์ํ ์ ๋ณด๋ค์ด ์ซ๋ผ๋ฝ ์จ๋ค. 
* ์ด๋ ๋ฏ REST๋ ๊ทธ์  ๋ง์ url์ ๋ญ์น๋ค์ด๋ค.
* REST API๋ ๋์ฌ๋ฅผ ๋ฃ์ง์๊ณ , ํญ์ ๋ช์ฌ๋ฅผ ๋ฃ๋๋ค. ๋์ฌ๋ http ๋ฉ์๋๋ก ์ ์ํ๋ค.

<br/><br/>

## ๐ซขGraphQl api
* GraphQl์ ๋ค์ด๋ฐ๋๊ฒ ์๋๋ค ๊ทธ์  ํ๋์ '์์ด๋์ด'๋ฅผ ์ ์ '์ค๋ช์'์ด๋ค.
* ๊ทธ๋์ ์ฐ๋ฆฌ๋ ๊ทธ ์ค๋ช์๋ฅผ ์ฝ๊ณ , ๊ทธ ์ค๋ช์๋ฅผ ๋ค๋ฃฐ ์ ์๋ ์ฝ๋๋ฅผ ์ง๋๊ฒ์ด๋ค.
* GraphQl์ ๊ทธ ๊ด๋์ ์ค๋ช์๋ก ๋ํ๋ธ ๊ฒ์ด๊ณ , ๊ทธ๊ฑธ ์ด๋ค ์ธ์ด๋ก๋  ์ ์ฉ์ํค๋ฉด ๋๋ ๊ฒ์ด๋ผ์, ์ด๋ค ์ธ์ด์์๋ ์ฌ์ฉํ  ์ ์๋ค.
* ํ์ด์ค๋ถ์ด 2012๋๋ถํฐ ๋ง๋ค์ด์ ์ฌ์ฉํ๊ณ , 2015๋๋ถํฐ ์คํ๋จ
* GraphQl์ rest api์ ๋ํ ์ง์ ์ ์ธ ํด๊ฒฐ์ฑ์ด๋ค.
* GraphQl์ด ํด๊ฒฐํ rest api์ ๋ฌธ์ : over-fetching, under-fetching
* [Swapi GraphQl](https://graphql.org/swapi-graphql)์ GraphQl ์์ฒญ์ ์ฐ๊ณ  ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ค๋ ์ฐ์ต์ ํด๋ณผ ์ ์๋ค.

<br/><br/>

## ๐ซกApollo server
* ์คํ์์ค spec-compliant GraphQL server์ด๋ค. (๋ค์๋งํด, Apollo server๋ node.js server ๊ฐ์๊ฑด๋ฐ graphQl์ ์ดํดํ๋ ์๋ฒ์ด๋ค.)
* ๋ค๋ฅธ ์ข๋ฅ๋ก ๋ง๋ค์ด์ง ๋ฐฑ์๋์์ ์ํด๋ก ์๋ฒ๋ฅผ ์ฌ๋ฆด ์๋์๋ค. (express๋ก ๋ง๋ค์ด์ง rest api์ graphQl api๋ก ๋ฐ๊พธ๊ธฐ ์ํด์ server๋ฅผ ๋ง์ด ์์ ํ์ง ์๊ณ  ๋ฏธ๋ค์จ์ด๋ง ๋ฃ์ด์ฃผ๋ฉด ๋๋ค.)

<br/><br/>

## ๐ฉ๐ผโ๐คtweetql ์ค์ต
<br/>

#### ๐ ํ๊ฒฝ์ธํ
``` bash
npm i apollo-server graphql
npm i nodemon -D
```
* rest api๊ฐ ๋ง์ url๋ค์ ์งํฉ์ด๋ฏ, graphQl api๋ ๋ง์ type๋ค์ ์งํฉ์ด๋ค.
<br/>

#### ๐๋์ถฉ ์๋ฒ ์์ํ๊ธฐ
```js
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  # โ๏ธ schema definition language ์์ฑ
  type Query {
    text: String
    hello: String
  }
`

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`๐ Server ready at ${url}`);
})
```
* SDL(schema definition language)๋ฅผ ํ์ฉํ์ฌ ์คํค๋ง๋ก ๋ฐ์ดํฐ์ ๋ญ๊ฐ ์ด๋ป๊ฒ ๋ค์ด๊ฐ ๊ฑด์ง ์ ํด์ค์ผ ํ๋ค.
* SDL์ ์ต์์์ ๐ `type: Query`์ ๊ผญ ๋ง๋ค์ด์ค์ผ ํ๋ค. ํ์!
* ์ ์ ๊ฐ requestํ  ์ ์๋๋ก ๋ง๋ค ๋ชจ๋  ๊ฒ๋ค์  `type Query{ }` ์์ ์์ด์ผ ํ๋ค.
* `listen({port:4001})` ์ด๋ฐ์์ผ๋ก port๋ฒํธ๋ฅผ ์ง์ ํ  ์๋ ์๋ค. (์ง์ ํ์ง ์์ผ๋ฉด ๊ทธ๋ฅ 4000๋ฒ์ผ๋ก ์ผ์ง๋ค.)
* then์ผ๋ก url๊ณผ server ์ธ์คํด์ค ๋๊ฐ์ง๋ฅด ๋ฐ์ ์ ์๋ค.
* `listen()` ์ apollo-server ํจํค์ง๋ฅผ ์ํ ๋ฉ์๋ ์ด๋ฉฐ, apollo-server-express์ ๊ฐ์ ๋ค๋ฅธ ํจํค์ง๋ฅผ ์ฌ์ฉํ๋ฉด Node.js ๋ฏธ๋ค์จ์ด๋ก ๋ฐ๊ฟ์ผ ํ๋ค๊ณ  ํ๋ค. ๊ทธ๋ฐ๊ฒ๋ค์ `start`๋ `framework-specific middleware function`์ด ์๋ค๊ณ ...
* `type Query{ }` ์์ ๋ฃ๋ ์์์ด rest api์์  Get url๊ณผ ๊ฐ๋ค.
* `type Mutation{ }` ์์ ๋ฃ๋ ์์์ด rest api์์  Get์ด์ธ์ ๋ฉ์๋๋ค๊ณผ ๊ฐ๋ค.
* ์์ ์ค๋ช์ ๋ชจ๋ [๊ณต์๋ฌธ์](https://www.apollographql.com/docs/apollo-server/v3/api/apollo-server/#url)์ ๋์จ๋ค.
<br/>

#### โ๏ธ์ ์๋ฏธํ ์คํค๋ง ๋ง๋ค๊ธฐ
* ์คํํ graphQl server๋ฅผ ๋ธ๋ผ์ฐ์ ์ ์น๋ฉด graphQl์ด ์ ๊ณตํ๋ ๋๋ฉํ๋ฉด์ด ๋ฑ์ฅํ๋ค.
* ๋๋ฉํ๋ฉด์์ 'Query your server' ๋ฒํผ์ ๋๋ฅด๋ฉด ์ง๊ธ ์ด๋ฆฐ ์๋ฒ๋ฅผ listenํ๊ณ  ์๋ Explorer ํ์ด์ง๊ฐ ๋ณด์ธ๋ค. vscode์์ ์ง  ์๋ฒ ์ฝ๋๋ฅผ ui์์ ํธํ๊ฒ ์คํํด๋ณผ ์ ์๋ค.๐๐ป
* typeDefs์์ ์ ์ํ๋ type์ ์ข๋ฅ์๋ scalar type, non-scalar type, root type ๋ฑ ์ด ์๋ค. ์์ธํ ๋ด์ฉ์ [๋งํฌ](https://www.apollographql.com/docs/federation/v1/value-types/)์ฐธ์กฐ
* **scalar type**์ graphQl์ ๋ด์ฅ๋์ด ์๋ ํ์์ด๋ค. ์๋ฅผ ๋ค์ด *String, int, boolean, ID* ๋ฑ์ด ์๋ค.
* value์ !๋ฅผ ๋ถ์ด์ง ์์ผ๋ฉด ํด๋น ํ๋๋ nullable field๊ฐ ๋๋ค.
* !๋ graphql์์ ์ด๋ค๊ฒ์ด required๊ณ , ์ด๋ค๊ฒ์ด ์๋์ง ๊ตฌ๋ถํ๋ ๊ธฐ์ค์ด๋๋ค.
```js
const typeDefs = gql`
  # ์ค๋ต...
  type Query {
    tweet(id:ID): Tweet
    #id๋ ID||null์ด๋ค. ๋ง์ฝ ID ๊ฐ์ required ์ฒ๋ฆฌ๋ฅผ ํ๊ณ  ์ถ๋ค๋ฉด...
    #tweet(id:ID!)์ด๋ ๊ฒ ์ฒ๋ฆฌ๋ฅผ ํด์ค์ผํ๋ค.
    #๐์ด๋ ๊ฒํ๋ฉด gql์๊ฒ ๋ง์ฝ tweet ์ฟผ๋ฆฌ๋ฅผ ์ด์ฉํ๊ณ  ์ถ๋ค๋ฉด, ๋ฐ๋์ ID๋ฅผ argument๋ฅผ ๋ณด๋ด์ผํ๋ค๊ณ  ๋งํ๋ ๊ฑฐ๊ณผ ๊ฐ๋ค.
  }
`
// ์ด๋ ๊ฒ ์ค์ ํด ๋์ผ๋ฉด explorer์์ ์๋์ ์คํผ๋ ์ด์์ ๋๋ฆด์..
{
  tweet(id: "1") {
    text
  }
}
//์๋์ ๊ฐ์ ๊ฒฐ๊ณผ๊ฐ์ด ๋์จ๋ค.
{
  "data": {
    "tweet": null //null์ด ๋์์ค๊ณ  ์๋ค.
    //nullable field์ ์๋ต value๋ data||null ์ด๋ค.
    //ํด๋น ํ๋๊ฐ boolean์ ์๋ตํ๋ฉด value๋ boolean||null์ด ๋  ๊ฒ์ด๋ค.
  }
}
```
```js
//๋ฐํ๊ฐ์ด null์ด ์๋์ ๋ณด์ฅํ๊ธฐ ์ํด ์๋์ ๊ฐ์ด ๋ฐ๊พผ๋ค.
  type Query {
    tweet(id:ID!): Tweet
  }
  //1. tweet ์ฟผ๋ฆฌ๋ก tweet์ ๋ฐ์์ฌ๋ ๋ฐ๋์ id๋ฅผ ๋ณด๋ด์ผํ๋ค. (๊ทธ๋ ์ง ์์ null ๋ฐํ์ด์๋๋ผ ์๋ฌ๊ฐ ๋๋ค.)
  //2. tweet ์ฟผ๋ฆฌ๋ก id๋ฅผ ์ ๋ฌํ ๋, ํด๋น ์์ด๋์ ๋ง๋ Tweet์ด ์๋ค๋ฉด null์ ๋ฐ๊ณ , ์๋ค๋ฉด ๊ทธ Tweet์ ๋ฐ๋๋ค.
```
<br>

#### ๐ฎ์์ฒญ๋ณด๋ด๋ณด๊ธฐ(explorer๋ก ์ค์ต)
* `type Query{ }`๋ก get์์ฒญ์ ๋ณด๋ผ๋๋ ์๋์ ๊ฐ์ด ๋งจ ์์ query๋ฅผ ์๋ตํด๋ ๋๋ค.
```js
//get ์์ฒญ๋ณด๋ด๊ธฐ

query {
   allTweets{
     id
     text
  }
}

// ์๋ ์๋์ ๋์ผํ๋ค.

{
   allTweets{
     id
     text
  }
}
```
* ๐ `type Mutation{ }`์ผ๋ก get์ด์ธ์ ์์ฒญ์ ๋ณด๋ผ๋๋ ๊ผญ! mutation ํค์๋๋ฅผ ์ ์ด์ผ ํ๋ค.
```js
//get ์ด์ธ์ ์์ฒญ๋ณด๋ด๊ธฐ
mutation{
  postTweet(text:"Hello! first Tweet!",userId: "1") {
    text
  }
}

```

<br/><br/>

#### ๐resolver๋ง๋ค๊ธฐ
* resolvers๋ ๋๊ตฐ๊ฐ field๋ฅผ ์์ฒญํ์ ๋ ์ค์ ๋ก ํธ์ถ๋  ํจ์๋ฅผ ์ ์ํ๋ค.
* Apollo๊ฐ query์ tweet์ ์์ฒญํ๋ ๊ฒ์ ๋ณธ๋ค๋ฉด Apllo๊ฐ resolvers์ query๋ก ๊ฐ๊ฑฐ๊ณ , ํด๋นํ๋ resolvers ํ๋์ ํจ์๋ฅผ ์คํ์ํฌ ๊ฒ์ด๋ค. 
* ๐resolvers์ ์ ์๋ ์ฟผ๋ฆฌ ํ์๊ณผ ํ๋๋ฑ์ ๋ฐ๋์ typeDefs์ ์ ์๋ ๋๋ก ๋์ผํ๊ฒ ํด์ผํ๋ค.
* resolver์์ Query ์์ฒญ์ Queryํค๊ฐ์, Muation ์์ฒญ์ Mutation ํค๊ฐ์์ ์ฒ๋ฆฌํ๋ค.
```js
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Tweet {
      id: ID!
      text: String!
      author: User!
  }
  type Query {
    tweet(id:ID!): Tweet 
    ping: String!
  }
`

const resolvers = {
  Query: {
    tweet(){
      console.log("I'm called")
      return null; //์ฌ๊ธฐ์ ๋ฆฌํดํ๋ ๊ฐ์ typeDefs์์ ๋ฆฌํดํ๋ ๊ฒ๊ณผ ๊ฐ๋ค.
    },
    ping(){
      return 'pong' //typedefs์์ ์ ์ํ๋ ping ํ๋๋ฅผ ์์ฒญํ๋ฉด reslover์์ 'pong'์ ๋ด์ค๋ค.
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`๐ Server ready at ${url}`);
})

```
* ์ด๋ ๊ฒ resolver๋ด์์ Query resolver์ Mutation resolver์ผ๋ก ๋๋ ์ ์์ฒญ์ ์ฒ๋ฆฌํ๋ ๋ฐฉ๋ฒ ๋ง๊ณ ๋, ์ด๋ค ํ๋, ์ด๋ค ํ์์ด๋  ์๊ด์์ด ๊ด๋ฆฌํ๋ Type Resolver๋ ์กด์ฌํ๋ค.
* Type Resolvers๋ ๋ค์ด๋๋ฏน ํ๋๋ฅผ ์ด์ฉํ์ฌ ์์ฒญ๋ ์ ๋ณด๊ฐ ์กด์ฌํ์ง ์๋๋ค๋ฉด ์ธ๋ถ ํ๋์์ ์ ๋ณด์ ๋ถํฉํ๋ resolver๋ฅผ ์ฐพ์์ ์ ๋ณด๋ฅผ ๋ฃ์ด์ค๋ค.
์์๋ฅผ ๋ณด๋๊ฒ ๋น ๋ฅผ๋ฏ!!
```js
let users = [
  {
    id: "1",
    firstName: "suryeon",
    lastName: "lee"
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask"
  }
]

const typeDefs = gql`
  import { ApolloServer, gql } from "apollo-server";

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String! 
    #full name์ ์ค์ฌ user db์ ์๋ค. ๐จ gql์ ์ด๋ฐ ์ ๋ณด๊ฐ ์์๊ฑฐ์ผ ์๋ ค์คฌ๋๋ฐ ์ค์ฌ๋ก  ์์
    #์ด๋ด๋ ๋ฆฌ์กฐ๋ฒ์์ ํด๋น ์ ๋ณด๋ฅผ ์๊ตฌํ๋ฉด ์๋ฌ๊ฐ ๋ฌ๋ค.
    #๐ก์ด๋๊ฐ ๋ฐ๋ก dynamic field๊ฐ ํ์ํ  ๋!
  }
  type Tweet {
      id: ID!
      text: String!
      author: User
  }
  type Query {
    allTweets: [Tweet!]! 
    tweet(id:ID!): Tweet 
    allUsers: [User!]!
  }
  type Mutation {
    postTweet(text:String!, userId: ID!): Tweet!
    deleteTweet(id:ID!): Boolean!
  }

  const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(root, {id}){ #๐ก tweet(root, args)! ์ ์ ๊ฐ ๋ณด๋ธ ์ธ์๋ ํญ์ resolver์ ๋๋ฒ์งธ ์ธ์์ ๋ค์ด์จ๋ค!
      return tweets.find(tweet => tweet.id === id);
    },
    allUsers() {
      console.log("all users called!")
      return users
    }
  },
  Mutation: {
    postTweet(_,{text,userId}){
      const newTweet = {
        id:tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_, {id}){
      const tweet = tweets.find(tweet => tweet.id === id);
      if(!tweet) return false;
      tweets = tweets.filter(tweet => tweet.id !== id);
      return true;
    }
  },
  
  # typedefs์์ Mutation ํ์์์ ์ ์๊ฑธ resolver์์ mutation ์์ ๋ฃ์ด์ฃผ๊ณ 
  # Mutation ํ์์์ ์ ์๊ฑธ resolver์์ mutation ์์ ๋ฃ์ด์ฃผ๊ณ 
  # Query ํ์์์ ์ ์๊ฑธ ์ฟผ๋ฆฌ ํค๊ฐ์ ๋ฃ์ด์ค ์๋ฆฌ๋๋ก๋ผ๋ฉด!!
  # User ์์ฒด๋ฅผ ํค๊ฐ์ผ๋ก ๋ฃ์ด์ค ์ ์๊ฒ ๋ค? => ์ด๊ฒ ๋ค์ด๋๋ฏน ํ๋!!

  # ์๋์ ๊ฐ์ด ๋ค์ด๋๋ฏน ํ๋๋ฅผ ๋ง๋ค๊ณ  ๋๋ฉด
  # query AllUsers {
  # allUsers {
  #   id
  #   firstName
  #   lastName
  #   fullName
  #   }
  # } 
  # ๐ ์์ฒญ์ ์ค์ฌ๋ก  db์ ์๋ fullName ํ๋๊ฐ "hello"๋ก ์ฐํ๋ค.
  # gq์ ์๋๋ฐฉ์์ ๋ฐ๋ผ fullName์ ์ํ resolver๊ฐ ๋ฐ๊ฒฌ๋ ๊ฒ์ด๋ค.
  # ๊ทธ๋์ Query ํ๋์ ์๋ allUsers๊ฐ ๋ฐ๋ํ๋ฉด, fullName์ด๋ ๋ฐ์ดํฐ๊ฐ ์์ด๋,
  # User์ fullName์ ์ํ resolver๊ฐ ์์์ ์ธ์ํด์ ์๋ฌ์์ด ๊ฒฐ๊ณผ๋ฅผ ๋ณด์ฌ์ค๋ค.
  
  User: {
    fullName({firstName, lastName}){ #fullName(root)๋ก ๐ฒ์ฌ๊ธฐ์ root๋ฅผ ๊ฐ์ ธ์ค๋ฉด fullName์ ํธ์ถํ๋ User๋ฅผ ๋ณด๊ฒ ๋๋ค. 
      console.log("fullName called")
      # ์ฝ์์ ํตํด Query์ allUsers ๋ฆฌ์กฐ๋ฒ๊ฐ ์คํ๋๋ฉด 
      # ์ฐ๋ฌ์ Type Query ๋ฆฌ์กฐ๋ฒ๊ฐ ์คํ๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค.
      #console.log(root)
      
      # ํ์ง๋ง!! db์ user2๋ฅผ ์ถ๊ฐํด๋ณด๋ฉด...
      # ์ค์ฌ๋ก db์ fullName์ด ๋ค์ด๊ฐ ์๋ user2 ํ๋๊น์ง ๊ฐ์ด hello๋ก ๋ณ๊ฒฝ๋๋ค.
      # ์ฝ์์ allUsers resolver ์คํ ํ๋ฒ์ 
      # fullName resolver๊ฐ ๋๋ฒ ์คํ๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค.
      
      # ๐ก!!!
      # ์ํ!! ๊ทธ๋ผ ๋๋น์ ํด๋น ์ ๋ณด๋ ์์ง๋ง,
      # typedfs์ ์์ฑ์ด ๋์ด์์ด gql์์ฒญ์ด ๊ฐ๋ฅํ ๊ฒฝ์ฐ๊ฐ ์๋ค๋ฉด,
      # resolver์ type resolver๋ฅผ ์ด์ฉํด์ ๋ถ๊ฐ์ ์ผ๋ก ์ ๋ณด๋ฅผ ๋ผ์๋ฃ์ด์
      # ๋ฆฌํดํด ์ค ์ ์๊ตฌ๋!!
      # ํ๋ค์ = ์ฑ + ์ด๋ฆ ๋ ํ๋๋ฅผ ํฉ์ณ์ ๋ฆฌํดํด์ค ๊ฒ์ฒ๋ผ!!
      
      
      return `${firstName} ${lastName}` #root์์ ํ์ํ firstName, lastName์ ์ธ์๋ก ๋ฐ์์ฌ ์ ์๋ค.
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`๐ Server ready at ${url}`);
})
`
```

</br>
type resolver ์ฃผ์ ๋บธ ๊น๋๋ฒ์  ์ถ๊ฐ ๐งน

```js
let users = [
  {
    id: "1",
    firstName: "suryeon",
    lastName: "lee"
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask"
  }
]

const typeDefs = gql`
  import { ApolloServer, gql } from "apollo-server";

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String! 
  }
  type Tweet {
      id: ID!
      text: String!
      author: User
  }
  type Query {
    allTweets: [Tweet!]! 
    tweet(id:ID!): Tweet 
    allUsers: [User!]!
  }
  type Mutation {
    postTweet(text:String!, userId: ID!): Tweet!
    deleteTweet(id:ID!): Boolean!
  }

  const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(root, {id}){ 
      return tweets.find(tweet => tweet.id === id);
    },
    allUsers() {
      console.log("all users called!")
      return users
    }
  },
  Mutation: {
    postTweet(_,{text,userId}){
      const newTweet = {
        id:tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(_, {id}){
      const tweet = tweets.find(tweet => tweet.id === id);
      if(!tweet) return false;
      tweets = tweets.filter(tweet => tweet.id !== id);
      return true;
    }
  },
  
  User: {
    fullName({firstName, lastName}){ 
      console.log("fullName called")
      return `${firstName} ${lastName}`
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`๐ Server ready at ${url}`);
})
```

</br></br>

#### ๐ schema documentation
* (""")๊ธฐํธ๋ก ๊ฐ์ธ explorer ํ์ด์ง์ schema ํ์ ๋ณด์ด๊ฒํ  ์ฃผ์์ ๋ง๋ค ์ ์๋ค.
* ๋นํธ์ธ์ผ๋ก doc ๋ฌธ์๋ฅผ ๊น๋ํ๊ฒ ์์ฑํ  ์ ์์ด์ ๋๋ฌด ํธ๋ฆฌํจโจโจ
```js
const typeDefs = gql`
  # ๐ ์ฌ๊ธฐ ์ฃผ๋ชฉ
  """
  Tweet object represents a resource for a Tweet
  """
  type Tweet {
      id: ID!
      text: String!
      author: User
  }
  type Query {
    allTweets: [Tweet!]!
    tweet(id:ID!): Tweet #๐ฅ๊ผญ argument๋ฅผ ๋๊ฒจ์ค์ผํ๋ฉฐ ํด๋นํ๋๊ฒ ์์์ null์ ๋ฐ์ ์ ์๋ค.
    allUsers: [User!]!
  }
`

```
![์คํฌ๋ฆฐ์ท](./schema%20doc.png)
* [Altair GraphQl Client](https://altairgraphql.dev/)์ [์น ์๋น์ค](https://altair-gql.sirmuel.design/)๋ฅผ ์ด์ฉํ๋ฉด ์ด๋ค api ๋ฌธ์๋  ๋ณผ ์ ์๋ค. 
![์คํฌ๋ฆฐ์ท](./altair.png)

</br></br>

#### ๐ Migrating from REST to GraphQL 
์๋์ ๋ช๋ น์ด๋ก node-fetch๋ฅผ ๊น๊ณ  ์ํฌํธ ์ํค๋ฉด graphql API๋ก rest API๋ฅผ ๊ฐ์ธ์
๋ง์น graphql ์์ฒญ์๋ต์ฒ๋ผ ๋ณด๋ด๊ณ  ๋ฐ์ ์ ์๋ค.
```bash
npm install node-fetch
```
```js
import { ApolloServer, gql } from "apollo-server";
import fetch from "node-fetch";

const typeDefs = gql`
  type Query {
    allMovies: [Movie!]!
    movie(id:String!): Movie
  }
  type Movie {
    id:Int!
    url:String!
    imdb_code:String!
    title:String!
    title_english:String!
    title_long:String!
    slug:String!
    year:Int!
    rating:Float!
    runtime:Float!
    genres:[String]!
    summary:String!
    description_full:String!
    synopsis:String!
    yt_trailer_code:String!
    language:String!
    background_image:String!
    background_image_original:String!
    small_cover_image:String!
    medium_cover_image:String!
    large_cover_image:String!
  }
  const resolvers = {
  Query: {
      allTweets() {
        return tweets;
      },
      tweet(root, {id}){ //๐ก tweet(root, args)! ์ ์ ๊ฐ ๋ณด๋ธ  ์ธ์๋ ํญ์ resolver์ ๋๋ฒ์งธ ์ธ์์ ๋ค์ด์จ๋ค!
        return tweets.find(tweet => tweet.id === id);
      },
      allUsers() {
        console.log("all users called!")
        return users
      },
      allMovies(){
        return fetch("https://yts.mx/api/v2/list_movies.json")
        .then(r => r.json())
        .then(json => json.data.movies);
      },
      movie(_, {id}){
        return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=$ {id}`)
        .then(r => r.json())
        .then(json => json.data.movie);
      }
    }
  }
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`๐ Server ready at ${url}`);
  })
`
```
