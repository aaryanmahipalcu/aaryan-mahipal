import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const token = request.cookies.get('spotify_access_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'No access token found' }, { status: 401 })
  }

  return NextResponse.json({ access_token: token })
} 