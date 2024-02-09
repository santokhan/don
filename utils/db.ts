import { MongoClient, Db } from 'mongodb';

const uri: string = 'mongodb+srv://donsyahalom2:BRB123abc@cluster0.hd21hkj.mongodb.net/';
// const uri: string = 'mongodb+srv://santokhan:726865426@cluster0.eau2v.mongodb.net/';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let client: MongoClient;
let database: Db;

export async function connectDatabase(): Promise<void> {
    client = await MongoClient.connect(uri, {});
    console.log({ client });
    // database = client.db('mydb');
}

export function getDatabase(): Db {
    return database;
}

export async function disconnectDatabase(): Promise<void> {
    await client.close();
}