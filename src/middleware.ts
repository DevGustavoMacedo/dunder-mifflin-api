// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// types
import { Props as typeCharacters } from '@/types/characters'
import { Props as typePodcast  } from '@/types/podcast'

// formatters
import { cleanParams } from '@/utils/formatters'

// checkers
import { isFindEmpty, isPathAll } from '@/utils/checkers'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const path = url.pathname
  const params = url.searchParams
  let attributes: string[] 
  const find = params.get('find') || ''

  if (!isPathAll(path)) {
    if (isFindEmpty(find)) {
      return new NextResponse(JSON.stringify({ error: 'Fill parameter {find}' }), {
        status: 422,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  }

  if(path.startsWith('/api/characters')) {
    attributes = Object.keys(typeCharacters)
  } else {
    attributes = Object.keys(typePodcast)
  }

  if (!isPathAll(path)) {
    attributes.push(find)
  }
  
  cleanParams(params, attributes)
  
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
