// db
import { connectToDatabase } from '@/db/conn'

// types
import TPodcast from '@/types/podcast'

const podcast =  async (find: object, projection: object) => {
  const { db } = await connectToDatabase()

  const data: TPodcast[] = await db
    .collection<TPodcast>('podcast')
    .find(find, { projection })
    .toArray()

  return data
}

export default podcast