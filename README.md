# GraphQL로 영화 API 만들기
노마드코더님의 [GraphQL로 영화 API 만들기](https://nomadcoders.co/graphql-for-beginners/lobby)를 보고 따라가는 중입니다.

<br/><br/>

## what is api?
* api(Application Programming Interface)는 REST api나  Graph api가 아니다.
* api는 REST api, GraphQl api, Web api, Browser api, Twitter api, Amazon api 등 엄청난 다양한 종류가 있다.
* Interface는 무언가와 '상호작용'하는 방법을 말한다. (티비와 소통하게 해주는 리모콘, 웹사이트와 소통할 수 있게하는 버튼 같은 것들)
* 브라우저는 아주 큰 리모콘이라고 생각하자. 많은 기능을 지원하는데, 그중 재밌는 것이 [배터리 api](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API). 브라우저가 만들어놓은 api로 해당 기능을 활용할 수 있다.
* 리모콘(인터페이스)에서 만들어놓은 기능만 사용할 수 있다.

<br/><br/>

## Rest api
* Rest api와 GraphQl api는 리모콘의 버튼을 어떻게 생겼는지의 차이이다.
* 예를 들어 영화정보를 가져온다고 할때 Rest api로는 nomadmovies.co/api/movies이런 식의 url로 request를 보낼꺼고, 그 url은 다시 json배열을 내준다.
* nomadmovies.co/api/movies, nomadmovies.co/api/movies/1, nomadmovies.co/api/search?rating=9 이런식의 api를 호출한다.
* rest api로 영화정보들을 끌고오는 [YTS api](https://yts.torrentbay.to/api)여기 문서에서 나온 링크[링크](https://yts.mx/api/v2/list_movies.json)를 주소창에 입력하면 영화 정보들이 쫘라락 온다. 
* 이렇듯 REST는 그저 많은 url의 뭉치들이다.
* REST API는 동사를 넣지않고, 항상 명사를 넣는다. 동사는 http 메소드로 정의한다.

<br/><br/>

## GraphQl api
* GraphQl은 다운받는게 아니다 그저 하나의 '아이디어'를 적은 '설명서'이다.
* 그래서 우리는 그 설명서를 읽고, 그 설명서를 다룰 수 있는 코드를 짜는것이다.
* GraphQl은 그 관념을 설명서로 나타낸 것이고, 그걸 어떤 언어로든 적용시키면 되는 것이라서, 어떤 언어에서도 사용할 수 있다.
* 페이스북이 2012년부터 만들어서 사용하고, 2015년부터 오픈됨
* GraphQl은 rest api에 대한 직접적인 해결책이다.
* GraphQl이 해결한 rest api의 문제: over-fetching, under-fetching
* [Swapi GraphQl](https://graphql.org/swapi-graphql)은 GraphQl 요청을 쓰고 데이터를 받아오는 연습을 해볼 수 있다.
<br/><br/>

## Apollo server
* 오픈소스 spec-compliant GraphQL server이다. (다시말해, Apollo server는 node.js server 같은건데 graphQl을 이해하는 서버이다.)
* 다른 종류로 만들어진 백엔드위에 아폴로 서버를 올릴 수도있다. (express로 만들어진 rest api을 graphQl api로 바꾸기 위해서 server를 많이 수정하지 않고 미들웨어만 넣어주면 된다.)
<br/><br/>

## tweetql 실습
<br/>

#### 환경세팅
``` bash
npm i apollo-server graphql
npm i nodemon -D
```
* rest api가 많은 url들의 집합이듯, graphQl api는 많은 type들의 집합이다.
<br/>

#### 대충 서버 시작하기
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
* 위의 설명은 모두 [공식문서](https://www.apollographql.com/docs/apollo-server/v3/api/apollo-server/#url)에 나온다.
<br/>

#### 유의미한 스키마 만들기
* 오픈한 graphQl server를 브라우저에 치면 graphQl이 제공하는 랜딩화면이 등장한다.
* 랜딩화면에서 'Query your server' 버튼을 누르면 지금 열린 서버를 listen하고 있는 Explorer 페이지가 보인다. vscode에서 짠 서버 코드를 ui에서 편하게 실험해볼 수 있다.👍🏻
* typeDefs에서 정의하는 type의 종류에는 scalar type, non-scalar type, root type 등 이 있다. 자세한 내용은 [링크](https://www.apollographql.com/docs/federation/v1/value-types/)참조
* **scalar type**은 graphQl에 내장되어 있는 타입이다. 예를 들어 *String, int, boolean, ID* 등이 있다.