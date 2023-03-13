// characters
import characters from '@/db/characters'

// utils
import rateLimit from '@/utils/rateLimit'

// types
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await rateLimit.check(res)
  } catch {
    return res.status(429).json({ error: 'Requests limit exceeded' })
  }

  const find = req.query.find?.toString().replace(/([a-z])([A-Z])/, '$1 $2')

  const data = await characters({ name: find }, req.query)

  if (data.length === 0) {
    return res.status(404).json({ error: 'Name not found' })
  }

  return res.status(200).json(data)
}
