import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth( {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
})



export { handler as GET, handler as POST }

// we are not direct exporting the default NextAuth handler
// but rather named exports for the GET and POST methods
// because we want to handle these methods separately
// actually in next auth it is RESTful
// so they handle the requests based on the HTTP method
// and we can define different logic for each method if needed