import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (credentials?.email === 'admin@creative.com' && credentials?.password === 'password123') {
          return {
            id: '1',
            email: 'admin@creative.com',
            name: 'Admin User',
            role: 'admin' // Credentials-er khetre role 'admin'
          }
        }
        return null
      }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
  async signIn({ user, account }) {
    if (account?.provider === "google") {
      try {
        const response = await fetch("https://server-1-1-6g3a.onrender.com/sinner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user", 
            googleId: user.id,
          }),
        });

        // Screenshot onujayi data post hochhe, kintu response handling e error thakte pare
        if (response.ok) {
          try {
            const data = await response.json();
            (user as any).role = data?.role || "user";
          } catch (e) {
            // Jodi backend JSON na pathaye shudhu success status pathaye
            (user as any).role = "user";
          }
        } else {
          // Backend fail korleo login hote din
          (user as any).role = "user";
        }
      } catch (error) {
        console.error("Post Error:", error);
        (user as any).role = "user";
      }
    }
    return true; // Ekhon r 'Access Denied' ashbe na, true mane login allowed
  },

  async jwt({ token, user }) {
    if (user) {
      token.role = (user as any).role || "user"; 
    }
    return token;
  },

  async session({ session, token }) {
    if (session.user) {
      (session.user as any).role = token.role; 
    }
    return session;
  },
},
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
  debug: true
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }