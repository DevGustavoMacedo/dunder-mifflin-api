// characters
import characters from '@/db/characters'

// rateLimit
import rateLimit from '@/utils/rateLimit'

// types
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await rateLimit.check(res)
  } catch {
    return res.status(429).json({ error: 'Requests limit exceeded' })
  }

  const data = await characters({}, req.query)

  if (data.length === 0) {
    return res.status(404).json({ error: 'Data not found' })
  }

  return res.status(200).json(data)
}
