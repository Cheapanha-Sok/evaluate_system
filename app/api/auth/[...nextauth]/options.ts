import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your_email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials , req) {
        // const {email , password} = credentials as any;
        // const url = "Api_end_point";
        // const res = await fetch(url, {
        //   method: "POST",
        //   headers: {"Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     email,
        //     password,
        //   }),
        // });
        // const user = await res.json();
        // if (res.ok && user) {
        //   return user;
        // }
        // return null;
        const user = {
          id: "42",
          email: "SethtyVitra@gmail.com",
          password: "nextauth",
          role: "community",
          accesstoken : "hfdgfjgsdhfjgshdf"
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            return ({...token,...user})
        },
        // If you want to use the role in client components
        async session({ session, token ,user}) {
          session.user = token as any;
          return session
        },
      },

  pages: {
    signIn: "/login",
    signOut: "/signout",
  },
};
