import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";

import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";

export const authOptions = {
    providers: [
        // OAuth authentication providers...
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true
            if (account.provider === 'github') {
                //connect to the data base
                const client = await mongoose.connect(process.env.MONGO_URI)

                //check if the user already exists
                const currentUser = await User.findOne({ email: profile.email })
                if (!currentUser) {
                    //create a new user
                    const newUser = await User.create({

                        email: profile.email,
                        username: profile.email ? profile.email.split('@')[0] : 'user',

                    })
                    await newUser.save()
                    user.name = newUser.username
                }
                return true;
            }    
            if (account.provider === 'google') {
                //connect to the data base
                const client = await mongoose.connect(process.env.MONGO_URI)

                //check if the user already exists
                const currentUser = await User.findOne({ email: profile.email })
                if (!currentUser) {
                    //create a new user
                    const newUser = await User.create({
                        email: profile.email,
                        username: profile.email ? profile.email.split('@')[0] : 'user',
                    })
                    await newUser.save()
                    user.name = newUser.username
                }
                return true;
            }
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            const dbuser = await User.findOne({ email: session.user.email })
            // console.log("DB User:", dbuser)
            session.user.name = dbuser.username
            session.user.email = dbuser.email

            return session
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }