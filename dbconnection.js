const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admins@cluster0.fztjadr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  client.connect();

module.exports = client;