// db
import { connectToDatabase } from '@/db/conn'

// types
import TCharacter from '@/types/characters'

// formatters
import { attributesMongo } from '@/utils/formatters'

const characters =  async (find: object, attributes: object) => {
  const { db } = await connectToDatabase()

  const projection = attributesMongo(attributes)

  const data: TCharacter[] = await db
    .collection<TCharacter>('characters')
    .find(find, { projection })
    .toArray()

  return data
}

export default characters