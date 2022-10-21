import { ApolloServer, gql } from "apollo-server";
import fetch from "node-fetch";

let tweets = [
  {
    id: "1",
    text: "first one!",
    userId: "2"
  },
  {
    id: "2",
    text: "second one!",
    userId: "1"
  },
]

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
  # ✏️ schema definition language 작성
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    """
    Is the sum of firstName + lastName as a String
    """
    fullName: String! 
    #full name은 실재 user db에 없다. 😨 gq에 이런 정보가 있을거야 알려줬는데 실재론 없음
    #이럴떄 리조버에서 해당 정보를 요구하면 에러가 뜬다.
    #💡이때가 바로 dynamic field가 필요할 때!
  }
  # 📝 schema에 설명을 추가할 수 있다!! (explorer에서 schema들어가면 설명까지 보이도록 가능)
  """
  Tweet object represents a resource for a Tweet
  """
  type Tweet {
      id: ID!
      text: String!
      author: User
  }
  type Query {
    # 이경우에 scalar type(tring, int, boolean, ID)으로 원하는 자료를 줄 수 없다.
    # 이럴 땐 새로운 타입(Tweet)의 list type을 return 하도록 한다.
    # 이렇게 함으로써 어떠한 타입이든 생성하고 연결할 수 있어진다.
    # explorer 창에서 {allTweets{id text}} 로 조회해불 수 있다.
    allTweets: [Tweet!]! #🔥하나의 list를 무조건 줄거고, 그 안에 Tweet만이 들어갈 수 있다.null은 못들어감
    #[Tweet,null,Tweet]❌ [Tweet,Tweet,Tweet]⭕️ []⭕️ 빈배열은 null은 아니기 떄문에 가능
    # 하나의 트윗만 받기위한 필드 tweet을 만들땐, 어떤 유저의 Tweet을 받을지를 argument로 정의해야한다.
    tweet(id:ID!): Tweet #🔥꼭 argument를 넘겨줘야하며 해당하는게 없을시 null을 받을 수 있다.
    allUsers: [User!]!

    allMovies: [Movie!]!
    movie(id:String!): Movie
  }
  #user가 rest api의 post,delete,create,patch와 같이 데이터를 변경하는 요청을 보낼 수 있도록 하는 경우
  #모든 변화가 일어나는 작업(get을 제외한 다른 작업)들은 mutaion에 넣어야한다.
  type Mutation {
    postTweet(text:String!, userId: ID!): Tweet!
    """
    Deletes a Tweet if found, else returns false
    """
    deleteTweet(id:ID!): Boolean!
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
    summary:String
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
`

/* 
🛑 위에서 정의한 typeDefs는 어떤 언어에서 통용되지만, 
앞으로 정의할 resolver는 언어마다 다르게 구현된다.

-⭐️ resolvers에 정의된 쿼리 타입과 필드등은 반드시 typeDefs에 정의된 대로 동일하게 해야한다.

-Apollo가 query의 tweet을 요청하는 것을 본다면 Apllo가 resolvers의 query로 갈거고, 
해당하는 resolvers 필드의 함수를 실행시킬 것이다. 

-⭐️ 한마디로 resolvers는 누군가 field를 요청했을 때 실제로 호출될 함수를 정의한다.
*/
const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(root, {id}){ //💡 tweet(root, args)! 유저가 보낸 인자는 항상 resolver의 두번째 인자에 들어온다!
      return tweets.find(tweet => tweet.id === id);
    },
    allUsers() {
      console.log("all users called!")
      return users
    },
    allMovies(){
      // 내 서버가 다른 서버로 request를 보내고 
      // 그 서버가 답을 하면, 내 서버가 graph Query에 답을 준것
      // graphql이 이미 typeDefs에 정의된대로 type을 알고 있으니까 원하는 답이 온것
      return fetch(`https://yts.mx/api/v2/list_movies.json`)
      .then(r => r.json())
      .then(json => json.data.movies);
    },
    movie(_, {id}){
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(r => r.json())
      .then(json => json.data.movie);
    }
  },
  Mutation: {
    postTweet(_,{text,userId}){
      /*
      💪🏻 코드챌린지
      트윗 생성 전에 user 데이터베이스에 userId에 해당하는 유저가 존재하는지 체크 후, 없다면 에러를 띄우거나 트윗을 생성하지 않도록 하기
      */
      const check = users.find(user => user.id === userId);
      if(check){
        const newTweet = {
          id:tweets.length + 1,
          text,
        };
        tweets.push(newTweet);
        return newTweet;
      }else{
        return;
      }      
    },
    deleteTweet(_, {id}){
      const tweet = tweets.find(tweet => tweet.id === id);
      if(!tweet) return false;
      tweets = tweets.filter(tweet => tweet.id !== id);
      return true;
    }
  },
  /* 
  typedefs에서 Mutation 타입안에 적은걸 resolver에서 mutation 안에 넣어주고
  Mutation 타입안에 적은걸 resolver에서 mutation 안에 넣어주고
  Query 타입안에 적은걸 쿼리 키값에 넣어준 원리대로라면!!
  User 자체를 키값으로 넣어줄 수 있겠네? => 이게 다이나믹 필드!!

  아래와 같이 다이나믹 필드를 만들고 나면
  query AllUsers {
  allUsers {
    id
    firstName
    lastName
    fullName
  }
  } 📌 요청에 실재론 db에 없는 fullName 필드가 "hello"로 찍힌다.
  gq의 작동방식에 따라 fullName을 위한 resolver가 발견된 것이다.
  그래서 Query 필드에 있는 allUsers가 발동하면, fullName이란 데이터가 없어도,
  User의 fullName을 위한 resolver가 있음을 인식해서 에러없이 결과를 보여준다.
  */
  User: {
    firstName({firstName}){
      return firstName;
    },
    fullName({firstName, lastName}){ //fullName(root)로 🌲여기서 root를 가져오면 fullName을 호출하는 User를 보게 된다. 
      //즉, root는 return 되고 있는 boject의 data를 준다.
      console.log("fullName called")
      /*콘솔을 통해 Query의 allUsers 리조버가 실행되면 
      연달아 Type Query 리조버가 실행된 것을 확인할 수 있다.*/
      // console.log(root)
      /*
      하지만!! db에 user2를 추가해보면...
      실재로 db에 fullName이 들어가 있는 user2 필드까지 같이 hello로 변경된다.
      콘솔엔 allUsers resolver 실행 한번에 
      fullName resolver가 두번 실행된 것을 확인할 수 있다.
      
      💡!!!
      아하!! 그럼 디비에 해당 정보는 없지만,
      typedfs에 작성이 되어있어 gql요청이 가능한 경우가 있다면,
      resolver에 type resolver를 이용해서 부가적으로 정보를 끼워넣어서
      리턴해 줄 수 있구나!!
      풀네임 = 성 + 이름 두 필드를 합쳐서 리턴해준 것처럼!!
      
      */
      return `${firstName} ${lastName}` //root에서 필요한 firstName, lastName을 인자로 받아올 수 있다.
    }
  },
  // join과 비슷한 기능을 resolver에서 구현
  // tweet db의 userId 에 연결된 아이디로 user db에서 동일 ID 찾아서 반환해준다.
  //query Query($tweetId: ID!) {
  // tweet(id: "$tweetId") {
  //   text
  //   id
  //   author {
  //     fullName
  //   }
  // }
  // }
  //위처럼 요청했을 때 author요청에서 해당되는 db 필드가 없으므로 
  //아래의 type resolver가 실행되고 users에서 해당 Id 값과 동일한 type User를 찾아서 리턴한다.
  //그럼 또 type User로 가서 fullName도 db도 없어서 또 위의 User의 fullName 리조버를 찾는다.
  //그리고 마침내 풀네임을 정상적으로 리턴한다.
  Tweet:{
    author({userId}){
      return users.find(user => user.id === userId)
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})