interface IAuthActions {
  signIn(credentials: IUserCredentials): Promise<IActionResult>;
  signUp(credentials: IUserCredentials): Promise<IActionResult>;
  signOut(): Promise<IActionResult>;
  changePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<IActionResult>;
}
