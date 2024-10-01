import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const auth_pass =
  "$2b$10$tPnWIdzgbncRMw4bGZmxM.bRbDJ/KbWu9NjGKGaH47.y5GIsUX.cK";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        password: {},
      },
      async authorize(credentials, req) {
        console.log("authorising");
        //get the credentials from the request
        const { password } = credentials;
        console.log(password)

        const user = {
          name: "dev",
        };

        //use bcrypt to compare the provided password against the stored password
        const passwordsMatch = await bcrypt.compare(password, auth_pass);
        console.log(passwordsMatch)
        //return the basic user object if they match
        if (passwordsMatch) return user;

        //otherwise, return null and do not authorise
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user = {
        name: token.user.name,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
