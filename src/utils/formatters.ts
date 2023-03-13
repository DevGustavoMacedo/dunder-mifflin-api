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

const arrToStr = (find: string[] | string | undefined ): string => {
  if(find) {
    if(Array.isArray(find)) {
      return find[0] 
    } else {
      return find
    }
  }

  return ''
}

export { cleanParams, attributesMongo, arrToStr }
