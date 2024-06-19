import { UserRole } from '@prisma/client';
import NextAuth, { type DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
};

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: ExtendedUser;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role?: UserRole;
    isTwoFactorEnabled: boolean;
  }
}
