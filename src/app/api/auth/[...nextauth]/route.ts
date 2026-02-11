import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Mock authentication - in production, verify against database
        if (credentials?.email === 'admin@creative.com' && credentials?.password === 'password123') {
          return {
            id: '1',
            email: 'admin@creative.com',
            name: 'Admin User',
            role: 'admin'
          }
        }
        return null
      }
    }),
    // Temporarily comment out Google provider if CORS issues persist
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || 'demo-client-id',
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'demo-client-secret',
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code"
    //     }
    //   }
    // })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
