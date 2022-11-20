import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const uri = `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/test`;
console.log(uri);
const client = new MongoClient(uri);

export async function runMongoClient() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
    } catch (error) {
        await client.close();
    }
}


