import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  # ✏️ schema definition language 작성
  type User {
    id: ID
    username: String
  }
  type Tweet {
      id: ID
      text: String
      author: User 
  }
  type Query {
    # 이경우에 scalar type(tring, int, boolean, ID)으로 원하는 자료를 줄 수 없다.
    # 이럴 땐 새로운 타입(Tweet)의 list type을 return 하도록 한다.
    # 이렇게 함으로써 어떠한 타입이든 생성하고 연결할 수 있어진다.
    # explorer 창에서 {allTweets{id text}} 로 조회해불 수 있다.
    allTweets: [Tweet]
    # 하나의 트윗만 받기위한 필드 tweet을 만들땐, 어떤 유저의 Tweet을 받을지를 argument로 정의해야한다.
    tweet(id:ID): Tweet
  }
  #user가 rest api의 post,delete,create,patch와 같이 데이터를 변경하는 요청을 보낼 수 있도록 하는 경우
  #모든 변화가 일어나는 작업(get을 제외한 다른 작업)들은 mutaion에 넣어야한다.
  type Mutation {
    postTweet(text:String, userId: ID): Tweet
    deleteTweet(id:ID): Boolean
  }
`

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})