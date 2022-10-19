import { ApolloServer, gql } from "apollo-server";

const tweets = [
  {
    id: "1",
    text: "first one!",
  },
  {
    id: "2",
    text: "second one!",
  },
]

const typeDefs = gql`
  # ✏️ schema definition language 작성
  type User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String!
  }
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
  }
  #user가 rest api의 post,delete,create,patch와 같이 데이터를 변경하는 요청을 보낼 수 있도록 하는 경우
  #모든 변화가 일어나는 작업(get을 제외한 다른 작업)들은 mutaion에 넣어야한다.
  type Mutation {
    postTweet(text:String!, userId: ID!): Tweet!
    deleteTweet(id:ID!): Boolean!
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
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})