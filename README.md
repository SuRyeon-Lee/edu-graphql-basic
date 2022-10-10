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
