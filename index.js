
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');

// init app & middleware
const app = express();

const password = encodeURIComponent("C@ke%2022");
const uri = `mongodb+srv://sathira:${password}@cluster0.6mxuoqr.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// routes
app.get('/books', (req, res) => {
  res.json({mssg: "welcome to the api"});
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});