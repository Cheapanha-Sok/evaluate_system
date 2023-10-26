import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your_email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // const {email , password} = credentials as any;
        // const url = "https://api.publicapis.org/entries";
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
          email: "SethyVitra@gmail.com",
          password: "nextauth",
          role: "manager",
          accesstoken: "hfdgfjgsdhfjgshdf",
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
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    callbacks: {
      jwt({ token, user }) {
        if (user) token.role = user.role;
        return token;
      },
      session({ session, token }) {
        if(session?.user) session.user.role = token.role;
        return session;
      },
    }
};