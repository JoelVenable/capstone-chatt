import * as React from 'react'
import { IAuthContext } from '../Interfaces/IAuthContext'
import { IUserCredentials } from '../Interfaces/IUserCredentials'



export const AuthContext: React.Context<IAuthContext> = React.createContext({
    status: {
        isAuthenticated: false,
        authResolving: true,
        userEmail: undefined
    },
    actions: {
        signIn: (credentials: IUserCredentials): Promise<void> => { },
        signUp: (credentials: IUserCredentials): Promise<void> => { },
        signOut: () => { },
        changePassword: (oldPassword, newPassword) => { }
    }
} as IAuthContext)

