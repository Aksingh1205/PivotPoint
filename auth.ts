import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"; // Import Google provider
import { AUTHOR_BY_GITHUB_ID_QUERY, AUTHOR_BY_GOOGLE_ID_QUERY } from "@/sanity/lib/queries"; // Ensure you have a query for Google ID
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID, // Use environment variable for Client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Use environment variable for Client Secret
    }),
  ],
  callbacks: {
    async signIn({ user: { name, email, image }, profile }) {
      const id = profile?.id || profile?.sub; // Use profile id for Google
      const provider = profile?.provider; // Determine the provider (GitHub or Google)

      // Check for existing user based on the provider
      const existingUser  = provider === 'github'
        ? await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id })
        : await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id });

      if (!existingUser ) {
        await writeClient.create({
          _type: 'author',
          id,
          name,
          username: profile?.login || " ", // Use login for GitHub, email for Google
          email,
          image,
          bio: profile?.bio || "",
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      const id = profile?.id || profile?.sub; // Use profile id for Google
      if (account && profile) {
        const provider = profile?.provider; // Determine the provider (GitHub or Google)
        const user = provider === 'github'
          ? await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id })
          : await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id });

        token.id = user?._id;
      }
      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    }
  }
});