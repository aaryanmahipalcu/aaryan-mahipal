# Spotify Integration Setup Guide

## Step 1: Create Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click "Create App"
4. Fill in the details:
   - **App name**: `Portfolio Player`
   - **App description**: `Custom music player for portfolio website`
   - **Website**: `http://localhost:3000`
   - **Redirect URI**: `http://localhost:3000/api/auth/spotify/callback` ⚠️ **Must be exact**
   - **API/SDKs**: Check "Web API" and "Web Playback SDK"
5. Save the app and note down your **Client ID** and **Client Secret**

**⚠️ Important**: The redirect URI must be exactly `http://localhost:3000/api/auth/spotify/callback` (no trailing slash, use http not https for localhost)

## Step 2: Environment Variables

Create a `.env.local` file in your project root with:

```env
# Spotify API Configuration
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/api/auth/spotify/callback

# Optional: JWT Secret for session management
JWT_SECRET=your_jwt_secret_here
```

Replace `your_spotify_client_id_here` and `your_spotify_client_secret_here` with the values from your Spotify app.

## Step 3: Spotify Premium Requirement

**Important**: The Spotify Web Playback SDK requires a **Spotify Premium account**. Free accounts cannot use this feature.

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Open your website
3. Click "Connect Spotify" in the vinyl player
4. You'll be redirected to Spotify to authorize
5. After authorization, you'll be redirected back to your site
6. The player should now be connected and ready to use!

## Features Available

Once connected, you'll have:
- ✅ Real-time track information
- ✅ Play/pause controls
- ✅ Skip to next/previous track
- ✅ Volume control
- ✅ Progress bar with time display
- ✅ Album art display
- ✅ Keyboard shortcuts (space, ⌘→, ⌘←, m)

## Troubleshooting

### "Authentication error" 
- Check your Client ID and Client Secret in `.env.local`
- Ensure your redirect URI matches exactly in Spotify app settings
- **Redirect URI must be exactly**: `http://localhost:3000/api/auth/spotify/callback`

### "Redirect URI not secure"
- For localhost, use `http://` (not `https://`)
- Make sure the URI matches exactly: `http://localhost:3000/api/auth/spotify/callback`
- No trailing slashes allowed

### "Account error"
- Make sure you have a Spotify Premium account
- Try logging out and back into Spotify

### "Initialization error"
- Check that your Spotify app has the correct permissions
- Ensure you're using HTTPS in production

### "No access token found"
- Clear your browser cookies and try again
- Check that the callback URL is working correctly

## Production Deployment

For production, update your environment variables:
- Change `NEXT_PUBLIC_SPOTIFY_REDIRECT_URI` to your production domain
- Update the redirect URI in your Spotify app settings
- Ensure you're using HTTPS (required for production)

## Security Notes

- Never commit your `.env.local` file to version control
- The access token is stored in HTTP-only cookies for security
- Tokens expire after 1 hour and require re-authentication 