
interface IAuthActions {
    signIn(credentials: IUserCredentials): Promise<void> 
    signUp(credentials: IUserCredentials): Promise<void> 
    signOut(): Promise<void>
    changePassword(oldPassword: string, newPassword: string): Promise<void>
}