// characters
import characters from '@/db/characters'

// utils
import formatters from '@/utils/formatters'
import rateLimit from '@/utils/rateLimit'

// types
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await rateLimit.check(res)
  } catch {
    return res.status(429).json({ error: 'Requests limit exceeded' })
  }

  const projection = formatters.attributesMongo(req.query)
  
  const find = req.query.find

  const data = await characters({ staff: find }, projection)

  if (data.length === 0) {
    return res.status(404).json({ error: 'Staff not found' })
  }

  return res.status(200).json(data)
}
