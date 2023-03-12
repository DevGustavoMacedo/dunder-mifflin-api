// db
import { connectToDatabase } from '@/db/conn'

// types
import TCharacter from '@/types/characters'

const characters =  async (find: object, projection: object) => {
  const { db } = await connectToDatabase()

  const data: TCharacter[] = await db
    .collection<TCharacter>('characters')
    .find(find, { projection })
    .toArray()

  return data
}

export default characters