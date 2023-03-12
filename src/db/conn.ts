import { MongoClient, Db } from 'mongodb'

if (!process.env.DB_URI) {
  throw new Error('Missing env variable DB_URI')
}

let cachedClient: MongoClient
let cachedDb: Db

let client: MongoClient
let db: Db

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  client = await MongoClient.connect(process.env.DB_URI, {})

  db = client.db(process.env.DB_NAME)

  cachedClient = client
  cachedDb = db

  return { client, db }
}
