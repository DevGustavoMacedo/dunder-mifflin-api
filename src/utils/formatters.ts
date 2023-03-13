import DynamicKey from '@/types/dynamicKey'

const cleanParams = (params: URLSearchParams, attributes: string[]) => {
  for (const key in Object.fromEntries(params)) {
    if (attributes.includes(key)) {
      params.append(key, '')
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

export { cleanParams, attributesMongo }
