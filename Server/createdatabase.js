const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
MongoClient.connect(url).then((client)=>{
    console.log('DataBase Created!');
    const db = client.db("mydata");
    db.createCollection("quiry");
})