import { NextRequest, NextResponse } from 'next/server'
import { getSpotifyAccessToken } from '@/lib/spotify-utils'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.redirect(
      new URL(`/?error=${encodeURIComponent(error)}`, request.url)
    )
  }

  if (!code) {
    return NextResponse.redirect(
      new URL('/?error=No authorization code received', request.url)
    )
  }

  try {
    // Exchange code for access token
    const accessToken = await getSpotifyAccessToken(code)
    
    // Create response with token in cookies
    const response = NextResponse.redirect(new URL('/?success=true', request.url))
    
    // Set the access token in an HTTP-only cookie
    response.cookies.set('spotify_access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3600, // 1 hour
      path: '/'
    })

    return response
  } catch (error) {
    console.error('Spotify token exchange error:', error)
    return NextResponse.redirect(
      new URL(`/?error=${encodeURIComponent('Failed to authenticate with Spotify')}`, request.url)
    )
  }
} 