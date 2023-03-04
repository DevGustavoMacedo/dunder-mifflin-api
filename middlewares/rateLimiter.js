const { rateLimit } = require('express-rate-limit')

const rateLimiter = rateLimit({
  windowMs: 1 * 60000, // 1 minute in milliseconds
  max: 10,
  keyGenerator: (req) => req.ip,
  handler: (req, res) => res.status(429).json({ error: 'Limit of Requests achieved, wait a minute...' })
})

module.exports = rateLimiter
