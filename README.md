# 🎞GraphQL로 영화 API 만들기
노마드코더님의 [GraphQL로 영화 API 만들기](https://nomadcoders.co/graphql-for-beginners/lobby)를 보고 따라가는 중입니다.

<br/><br/>

## 🤔what is api?
* api(Application Programming Interface)는 다운받고 그런것이 아니다.
* api는 REST api, GraphQl api, Web api, Browser api, Twitter api, Amazon api 등 엄청난 다양한 종류가 있다.
* Interface는 무언가와 '상호작용'하는 방법을 말한다. (티비와 소통하게 해주는 리모콘, 웹사이트와 소통할 수 있게하는 버튼 같은 것들)
* 브라우저는 아주 큰 리모콘이라고 생각하자. 많은 기능을 지원하는데, 그중 재밌는 것이 [배터리 api](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API). 브라우저가 만들어놓은 api로 해당 기능을 활용할 수 있다.
* 리모콘(인터페이스)에서 만들어놓은 기능만 사용할 수 있다.

<br/><br/>

## 🫥Rest api
* Rest api와 GraphQl api는 리모콘의 버튼을 어떻게 생겼는지의 차이이다.
* 예를 들어 영화정보를 가져온다고 할때 Rest api로는 nomadmovies.co/api/movies이런 식의 url로 request를 보낼꺼고, 그 url은 다시 json배열을 내준다.
* nomadmovies.co/api/movies, nomadmovies.co/api/movies/1, nomadmovies.co/api/search?rating=9 이런식의 api를 호출한다.
* rest api로 영화정보들을 끌고오는 [YTS api](https://yts.torrentbay.to/api)여기 문서에서 나온 링크[링크](https://yts.mx/api/v2/list_movies.json)를 주소창에 입력하면 영화 정보들이 쫘라락 온다. 
* 이렇듯 REST는 그저 많은 url의 뭉치들이다.
* REST API는 동사를 넣지않고, 항상 명사를 넣는다. 동사는 http 메소드로 정의한다.

<br/><br/>

## 🫢GraphQl api
* GraphQl은 다운받는게 아니다 그저 하나의 '아이디어'를 적은 '설명서'이다.
* 그래서 우리는 그 설명서를 읽고, 그 설명서를 다룰 수 있는 코드를 짜는것이다.
* GraphQl은 그 관념을 설명서로 나타낸 것이고, 그걸 어떤 언어로든 적용시키면 되는 것이라서, 어떤 언어에서도 사용할 수 있다.
* 페이스북이 2012년부터 만들어서 사용하고, 2015년부터 오픈됨
* GraphQl은 rest api에 대한 직접적인 해결책이다.
* GraphQl이 해결한 rest api의 문제: over-fetching, under-fetching
* [Swapi GraphQl](https://graphql.org/swapi-graphql)은 GraphQl 요청을 쓰고 데이터를 받아오는 연습을 해볼 수 있다.

<br/><br/>

## 🫡Apollo server
* 오픈소스 spec-compliant GraphQL server이다. (다시말해, Apollo server는 node.js server 같은건데 graphQl을 이해하는 서버이다.)
* 다른 종류로 만들어진 백엔드위에 아폴로 서버를 올릴 수도있다. (express로 만들어진 rest api을 graphQl api로 바꾸기 위해서 server를 많이 수정하지 않고 미들웨어만 넣어주면 된다.)

<br/><br/>

## 👩🏼‍🎤tweetql 실습
<br/>

#### 🛠환경세팅
``` bash
npm i apollo-server graphql
npm i nodemon -D
```
* rest api가 많은 url들의 집합이듯, graphQl api는 많은 type들의 집합이다.
<br/>

#### 🚀대충 서버 시작하기
```js
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  # ✏️ schema definition language 작성
  type Query {
    text: String
    hello: String
  }
`

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
```
* SDL(schema definition language)를 활용하여 스키마로 데이터에 뭐가 어떻게 들어갈 건지 정해줘야 한다.
* SDL의 최상위엔 📌 `type: Query`을 꼭 만들어줘야 한다. 필수!
* 유저가 request할 수 있도록 만들 모든 것들은  `type Query{ }` 안에 있어야 한다.
* `listen({port:4001})` 이런식으로 port번호를 지정할 수도 있다. (지정하지 않으면 그냥 4000번으로 켜진다.)
* then으로 url과 server 인스턴스 두가지르 받을 수 있다.
* `listen()` 은 apollo-server 패키지를 위한 메소드 이며, apollo-server-express와 같은 다른 패키지를 사용하면 Node.js 미들웨어로 바꿔야 한다고 한다. 그런것들에 `start`나 `framework-specific middleware function`이 있다고...
* `type Query{ }` 안에 넣는 작업이 rest api에선 Get url과 같다.
* `type Mutation{ }` 안에 넣는 작업이 rest api에선 Get이외의 메소드들과 같다.
* 위의 설명은 모두 [공식문서](https://www.apollographql.com/docs/apollo-server/v3/api/apollo-server/#url)에 나온다.
<br/>

#### ✏️유의미한 스키마 만들기
* 오픈한 graphQl server를 브라우저에 치면 graphQl이 제공하는 랜딩화면이 등장한다.
* 랜딩화면에서 'Query your server' 버튼을 누르면 지금 열린 서버를 listen하고 있는 Explorer 페이지가 보인다. vscode에서 짠 서버 코드를 ui에서 편하게 실험해볼 수 있다.👍🏻
* typeDefs에서 정의하는 type의 종류에는 scalar type, non-scalar type, root type 등 이 있다. 자세한 내용은 [링크](https://www.apollographql.com/docs/federation/v1/value-types/)참조
* **scalar type**은 graphQl에 내장되어 있는 타입이다. 예를 들어 *String, int, boolean, ID* 등이 있다.
* value에 !를 붙이지 않으면 해당 필드는 nullable field가 된다.
* !는 graphql에서 어떤것이 required고, 어떤것이 아닌지 구분하는 기준이된다.
```js
const typeDefs = gql`
  # 중략...
  type Query {
    tweet(id:ID): Tweet
    #id는 ID||null이다. 만약 ID 값을 required 처리를 하고 싶다면...
    #tweet(id:ID!)이렇게 처리를 해줘야한다.
    #🛑이렇게하면 gql에게 만약 tweet 쿼리를 이용하고 싶다면, 반드시 ID를 argument를 보내야한다고 말하는 거과 같다.
  }
`
// 이렇게 설정해 놓으면 explorer에서 아래의 오퍼레이션을 돌릴시..
{
  tweet(id: "1") {
    text
  }
}
//아래와 같은 결과값이 나온다.
{
  "data": {
    "tweet": null //null이 돌아오고 있다.
    //nullable field의 응답 value는 data||null 이다.
    //해당 필드가 boolean을 응답하면 value는 boolean||null이 될 것이다.
  }
}
```
```js
//반환값이 null이 아님을 보장하기 위해 아래와 같이 바꾼다.
  type Query {
    tweet(id:ID!): Tweet
  }
  //1. tweet 쿼리로 tweet을 받아올때 반드시 id를 보내야한다. (그렇지 않음 null 반환이아니라 에러가 난다.)
  //2. tweet 쿼리로 id를 전달할때, 해당 아이디에 맞는 Tweet이 없다면 null을 받고, 있다면 그 Tweet을 받는다.
```
<br>

#### 📮요청보내보기(explorer로 실습)
* `type Query{ }`로 get요청을 보낼때는 아래와 같이 맨 앞에 query를 생략해도 된다.
```js
//get 요청보내기

query {
   allTweets{
     id
     text
  }
}

// 위는 아래와 동일하다.

{
   allTweets{
     id
     text
  }
}
```
* 🛑 `type Mutation{ }`으로 get이외의 요청을 보낼때는 꼭! mutation 키워드를 적어야 한다.
```js
//get 이외의 요청보내기
mutation{
  postTweet(text:"Hello! first Tweet!",userId: "1") {
    text
  }
}

```

<br/><br/>

#### 🕊resolver만들기
* resolvers는 누군가 field를 요청했을 때 실제로 호출될 함수를 정의한다.
* Apollo가 query의 tweet을 요청하는 것을 본다면 Apllo가 resolvers의 query로 갈거고, 해당하는 resolvers 필드의 함수를 실행시킬 것이다. 
* 🛑resolvers에 정의된 쿼리 타입과 필드등은 반드시 typeDefs에 정의된 대로 동일하게 해야한다.
* resolver에서 Query 요청은 Query키값에, Muation 요청은 Mutation 키값에서 처리한다.
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
      return null; //여기서 리턴하는 값은 typeDefs에서 리턴하는 것과 같다.
    },
    ping(){
      return 'pong' //typedefs에서 정의했던 ping 필드를 요청하면 reslover에서 'pong'을 내준다.
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})

```
* 이렇게 resolver내에서 Query resolver와 Mutation resolver으로 나눠서 요청을 처리하는 방법 말고도, 어떤 필드, 어떤 타입이든 상관없이 관리하는 Type Resolver도 존재한다.
* Type Resolvers는 다이나믹 필드를 이용하여 요청된 정보가 존재하지 않는다면 외부 필드에서 정보에 부합하는 resolver를 찾아서 정보를 넣어준다.
예시를 보는게 빠를듯!!
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
    #full name은 실재 user db에 없다. 😨 gql에 이런 정보가 있을거야 알려줬는데 실재론 없음
    #이럴떄 리조버에서 해당 정보를 요구하면 에러가 뜬다.
    #💡이때가 바로 dynamic field가 필요할 때!
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
    tweet(root, {id}){ #💡 tweet(root, args)! 유저가 보낸 인자는 항상 resolver의 두번째 인자에 들어온다!
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
  
  # typedefs에서 Mutation 타입안에 적은걸 resolver에서 mutation 안에 넣어주고
  # Mutation 타입안에 적은걸 resolver에서 mutation 안에 넣어주고
  # Query 타입안에 적은걸 쿼리 키값에 넣어준 원리대로라면!!
  # User 자체를 키값으로 넣어줄 수 있겠네? => 이게 다이나믹 필드!!

  # 아래와 같이 다이나믹 필드를 만들고 나면
  # query AllUsers {
  # allUsers {
  #   id
  #   firstName
  #   lastName
  #   fullName
  #   }
  # } 
  # 📌 요청에 실재론 db에 없는 fullName 필드가 "hello"로 찍힌다.
  # gq의 작동방식에 따라 fullName을 위한 resolver가 발견된 것이다.
  # 그래서 Query 필드에 있는 allUsers가 발동하면, fullName이란 데이터가 없어도,
  # User의 fullName을 위한 resolver가 있음을 인식해서 에러없이 결과를 보여준다.
  
  User: {
    fullName({firstName, lastName}){ #fullName(root)로 🌲여기서 root를 가져오면 fullName을 호출하는 User를 보게 된다. 
      console.log("fullName called")
      # 콘솔을 통해 Query의 allUsers 리조버가 실행되면 
      # 연달아 Type Query 리조버가 실행된 것을 확인할 수 있다.
      #console.log(root)
      
      # 하지만!! db에 user2를 추가해보면...
      # 실재로 db에 fullName이 들어가 있는 user2 필드까지 같이 hello로 변경된다.
      # 콘솔엔 allUsers resolver 실행 한번에 
      # fullName resolver가 두번 실행된 것을 확인할 수 있다.
      
      # 💡!!!
      # 아하!! 그럼 디비에 해당 정보는 없지만,
      # typedfs에 작성이 되어있어 gql요청이 가능한 경우가 있다면,
      # resolver에 type resolver를 이용해서 부가적으로 정보를 끼워넣어서
      # 리턴해 줄 수 있구나!!
      # 풀네임 = 성 + 이름 두 필드를 합쳐서 리턴해준 것처럼!!
      
      
      return `${firstName} ${lastName}` #root에서 필요한 firstName, lastName을 인자로 받아올 수 있다.
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
`
```