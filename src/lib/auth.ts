import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import { nanoid } from "nanoid"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "signin",
        signOut: "signout",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async session({ token, session, user }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.picture = token.picture
                session.user.username = token.username
            }

            return session;
        },
        async jwt({ token, user }) {
            const dbUser = db.user.findFirst({
                where: {
                    email: token.email
                }
            });

            if (!dbUser) {
                token.id = user!.id
                return token;
            }

            if (!dbUser.username) {
                await db.user.update({
                    where: {
                        id: db.user.id,
                    },
                    data: {
                        username: nanoid(10),
                    }
                })
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.picture,
                username: db.username
            }
        },
        redirect() {
            return "/"
        }
    }
} satisfies NextAuthOptions;