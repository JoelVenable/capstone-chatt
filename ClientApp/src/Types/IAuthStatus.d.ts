interface IAuthStatus {
  isAuthenticated: boolean;
  authResolving: boolean;
  userEmail: string | undefined;
  userId: string | undefined;
  userHandle: string | undefined;
}
