import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                // For now, we'll return a mock user to avoid build errors
                // In production, you would fetch the user from your database
                if (credentials?.email && credentials?.password) {
                    // Any object returned will be saved in `user` property of the JWT
                    return {
                        id: "1",
                        name: "Test User",
                        email: credentials.email,
                    };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        newUser: "/auth/signup",
    },
    // For development, set session strategy to JWT
    session: {
        strategy: "jwt",
    },
    // You can add more configuration here
});

export { handler as GET, handler as POST };
