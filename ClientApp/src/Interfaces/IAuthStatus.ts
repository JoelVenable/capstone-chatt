

export interface IAuthStatus {
    isAuthenticated: boolean
    authResolving: boolean,
    userEmail: string | undefined
}