// podcast
import podcast from '@/db/podcast'

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

  const data = await podcast({}, projection)

  if (data.length === 0) {
    return res.status(404).json({ error: 'Data not found' })
  }

  return res.status(200).json(data)
}
