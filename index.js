
// const { MongoClient, Timestamp } = require('mongodb');
const { ApolloServer } = require('apollo/server')
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const MongoDB = "mongodb+srv://malaithong:m28274555@forum.aavlchv.mongodb.net/";

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MongoDB, {useNewUrlParser: true})
.then(() => {
    console.log("MongoDB connected");
    return server.listen({port: 5000});
})
.then((res) => {
    console.log(`Server running at ${res.url}`)
})

// async function createCollection() {
//   const uri = 'mongodb://localhost:27017';
//   const client = new MongoClient(uri);

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();

//     // If the connection is successful, log a message
//     console.log('Connected to MongoDB');

//     // Access a specific database
//     const db = client.db('mydb');

//     // Create a new collection

//     // await db.createCollection('forum');
//     // console.log('Collection created successfully');

//     // Get a reference to your collection
//     const collection = db.collection('forum');

//     // Data to be inserted
//     const dataToInsert = {
//       id: '00004',
//       topic: 'hi',
//       writer: 'admin1',
//       create_date: new Date(),
//       last_update: new Date(),
//     };

//     try {
//         const result = await collection.insertOne(dataToInsert);
//         console.log('Data inserted successfully');
//       } catch (err) {
//         if (err.code === 11000) {
//           console.log('Duplicate key error. Data insertion failed.');
//         } else {
//           console.error('Error:', err);
//         }
//       }
      

//   } catch (err) {
//     console.error('Error:', err);
//   } finally {
//     await client.close();
//   }
// }

// createCollection();
