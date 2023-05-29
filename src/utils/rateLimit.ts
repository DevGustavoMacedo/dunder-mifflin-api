import type { NextApiResponse } from 'next'
import LRU from 'lru-cache'

const rateLimit = {
  tokenCache: new LRU({
    max: 500, // max 500 users per second
    ttl: 60000, // 1 minute interval
  }),
  check: (res: NextApiResponse) =>
    new Promise<void>((resolve, reject) => {
      const limit = 60 // requests limit
      const token = 'CACHE_TOKEN'

      const tokenCount = (rateLimit.tokenCache.get(token) as number[]) || [0]

      if (tokenCount[0] === 0) {
        rateLimit.tokenCache.set(token, tokenCount)
      }
      tokenCount[0] += 1

      const currentUsage = tokenCount[0]
      const isRateLimited = currentUsage >= limit
      res.setHeader('X-RateLimit-Limit', limit)
      res.setHeader('X-RateLimit-Remaining', isRateLimited ? 0 : limit - currentUsage)
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      )

      return isRateLimited ? reject() : resolve()
    }),
}

export default rateLimit
