# Google Sign-In Setup Guide

## ✅ Google OAuth Setup Complete!

Your application is now configured for Google Sign-In. Follow these steps to get your credentials:

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API"
   - Click "Enable"

## Step 2: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application"
4. Configure:
   - **Name**: Studio Sinners App (or your app name)
   - **Authorized JavaScript origins**:
     ```
     http://localhost:3000
     https://yourdomain.com (for production)
     ```
   - **Authorized redirect URIs**:
     ```
     http://localhost:3000/api/auth/callback/google
     https://yourdomain.com/api/auth/callback/google (for production)
     ```
5. Click "Create"
6. Copy your **Client ID** and **Client Secret**

## Step 3: Update Environment Variables

Open `.env.local` file and update:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-actual-google-client-id-here
GOOGLE_CLIENT_SECRET=your-actual-google-client-secret-here
```

### Generate NEXTAUTH_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use this online tool: https://generate-secret.vercel.app/32

## Step 4: Test Google Sign-In

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to: http://localhost:3000/login

3. Click "Google_OIDC" button

4. Sign in with your Google account

## Features Enabled

✅ Google OAuth Sign-In  
✅ Credentials (Email/Password) Sign-In  
✅ Session Management  
✅ Protected Routes (/add-item, /profile)  
✅ Automatic Redirect after Login  

## Login Page Features

- **Google Sign-In Button**: "Google_OIDC" button
- **Email/Password Login**: For testing (admin@creative.com / password123)
- **Modern UI**: Cyberpunk/tech aesthetic
- **Error Handling**: Clear error messages
- **Loading States**: Visual feedback during authentication

## Production Deployment

When deploying to production:

1. Update `NEXTAUTH_URL` in `.env.local`:
   ```env
   NEXTAUTH_URL=https://yourdomain.com
   ```

2. Add production redirect URI in Google Console:
   ```
   https://yourdomain.com/api/auth/callback/google
   ```

3. Update environment variables in your hosting platform (Vercel, Netlify, etc.)

## Troubleshooting

### Error: "redirect_uri_mismatch"
- Make sure the redirect URI in Google Console matches exactly
- Format: `http://localhost:3000/api/auth/callback/google`

### Error: "Access blocked: This app's request is invalid"
- Enable Google+ API in Google Cloud Console
- Wait a few minutes for changes to propagate

### Error: "NEXTAUTH_URL is not set"
- Make sure `.env.local` file exists in root directory
- Restart your development server after adding environment variables

## Security Notes

⚠️ **Never commit `.env.local` to Git!**  
⚠️ Change `NEXTAUTH_SECRET` in production  
⚠️ Use HTTPS in production  
⚠️ Keep your Google Client Secret secure  

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts          # NextAuth configuration
│   ├── login/
│   │   └── page.tsx                  # Login page with Google button
│   └── ClientRoot.tsx                # SessionProvider wrapper
└── middleware.ts                      # Protected routes
```

## Need Help?

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Setup Date**: February 11, 2026  
**Status**: ✅ Ready for Testing
