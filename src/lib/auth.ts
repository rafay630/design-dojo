import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // TODO: Verify against DB
        // For now, allow any non-empty login
        if (credentials?.email && credentials?.password) {
            return {
                id: "1",
                name: "Test User",
                email: String(credentials.email),
                role: "STUDENT" // hardcoded for now
            }
        }
        return null
      },
    }),
  ],
})
