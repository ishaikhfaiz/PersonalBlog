import { MongoClient } from 'mongodb'

let db;

async function connectToDb(cb){
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@faizblogcluster.f64ljfp.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();
    db = client.db('blog-db');
    cb();
}

export {
    db,
    connectToDb
};