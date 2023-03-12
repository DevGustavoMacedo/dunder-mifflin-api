import { MongoClient, Db } from 'mongodb'

if (!process.env.DB_URI) {
  throw new Error('Missing env variable DB_URI')
}

const dbUri = process.env.DB_URI
const dbName = process.env.DB_NAME

let cachedClient: MongoClient
let cachedDb: Db

let client: MongoClient
let db: Db

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  client = await MongoClient.connect(dbUri, {})

  db = client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}
