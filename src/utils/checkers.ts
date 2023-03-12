const isObjectEmpty = (params: URLSearchParams) => {
  if (!params.toString()) {
    return true
  } else {
    return false
  }
}

const isFindEmpty = (find: string) => (find ? false : true)

const isPathAll = (path: string) => 
            path === '/api/characters/all' || 
            path === '/api/podcast/all'

export default {
  isObjectEmpty,
  isFindEmpty,
  isPathAll,
}
