const {gql} = require("apollo-server");

module.exports = gql`
type User {
    id: ID!
    username: String!
    email: String!
    posts: [Post!]!
  }
  
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
  }
  
  type Comment {
    id: ID!
    content: String!
    author: User!
    post: Post!
  }
  
  type Query {
    getUser(id: ID!): User
    getPost(id: ID!): Post
  }
  
  type Mutation {
    createUser(username: String!, email: String!): User
    createPost(title: String!, content: String!, authorId: ID!): Post
    createComment(content: String!, authorId: ID!, postId: ID!): Comment
  }
  
  schema {
    query: Query
    mutation: Mutation
  }
  
`;