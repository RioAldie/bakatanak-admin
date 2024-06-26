import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './authconfig';
import { Admin, User } from './lib/models';
import { connectToDb } from './lib/utils';
import bcrypt from 'bcrypt';

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await Admin.findOne({
      username: credentials.username,
    });

    // if (!user || !user.isAdmin) throw new Error('Wrong credentials!');

    // console.log(user.password === credentials.password);
    // const isPasswordCorrect = await bcrypt.compare(
    //   credentials.password,
    //   user.password
    // );

    const isPasswordCorrect = user.password === credentials.password;

    // console.log(credentials.password, user.password);
    if (!isPasswordCorrect) throw new Error('Wrong password!');

    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to login!');
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
