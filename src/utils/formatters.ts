import { NextResponse } from 'next/server'
import DynamicKey from '@/types/dynamicKey'

const cleanParams = (params: URLSearchParams, attributes: string[]) => {
  for (const key in Object.fromEntries(params)) {
    if (attributes.includes(key)) {
      params.set(key, '')
    } else {
      params.delete(key)
    }
  }
}

const attributesMongo = (query: object) => {
  const obj: DynamicKey<number> = {}

  for (const key in query) {
    if (key !== 'find') {
      obj[key] = 1
    }
  }

  obj._id = 0

  return obj
}

const error = new NextResponse(JSON.stringify({ error: 'Fill parameter {find}' }), {
  status: 422,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  cleanParams,
  attributesMongo,
  error
}
