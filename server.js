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
`

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})