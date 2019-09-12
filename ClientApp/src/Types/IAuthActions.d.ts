interface IAuthActions {
  signIn(credentials: IUserCredentials): Promise<IActionResult>;
  signUp(credentials: IUserRegistration): Promise<IActionResult>;
  signOut(): Promise<IActionResult>;
  changePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<IActionResult>;
}
