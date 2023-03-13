// db
import { connectToDatabase } from '@/db/conn'

// types
import TPodcast from '@/types/podcast'

// formatters
import { attributesMongo } from '@/utils/formatters'

const podcast =  async (find: object, attributes: object) => {
  const { db } = await connectToDatabase()

  const projection = attributesMongo(attributes)

  const data: TPodcast[] = await db
    .collection<TPodcast>('podcast')
    .find(find, { projection })
    .toArray()

  return data
}

export default podcast