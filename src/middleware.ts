// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// types
import { Props as typeCharacters } from '@/types/characters'
import { Props as typePodcast  } from '@/types/podcast'

// formatters
import formatters from '@/utils/formatters'

// checkers
import checkers from '@/utils/checkers'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const path = url.pathname
  const params = url.searchParams
  let attributes: string[] 
  const find = params.get('find') || ''

  if (!checkers.isPathAll(path)) {
    if (checkers.isFindEmpty(find)) {
      return formatters.error
    }
  }

  if(path.startsWith('/api/characters')) {
    attributes = Object.keys(typeCharacters)
  } else {
    attributes = Object.keys(typePodcast)
  }

  formatters.cleanParams(params, attributes)

  if (checkers.isObjectEmpty(params)) {
    attributes.forEach((item) => params.set(item, ''))
  }

  if (!checkers.isPathAll(path)) {
    params.set('find', find)
  }

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    '/api/characters/all',
    '/api/characters/one',
    '/api/characters/season',
    '/api/characters/brand',
    '/api/characters/staff',
    '/api/podcast/all',
    '/api/podcast/one',
  ],
}
