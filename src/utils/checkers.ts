const isFindEmpty = (find: string) => (find ? false : true)

const isPathAll = (path: string) => 
            path === '/api/characters/all' || 
            path === '/api/podcast/all'

export {
  isFindEmpty,
  isPathAll,
}
