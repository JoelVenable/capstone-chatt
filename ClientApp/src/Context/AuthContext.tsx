import * as React from 'react'



export const AuthContext: React.Context<IAuthContext> = React.createContext({
    status: {
        isAuthenticated: false,
        authResolving: true,
        userEmail: undefined
    },
    actions: {
        signIn: async (cred) => { },
        signUp: async (cred) => { },
        signOut: async () => { },
        changePassword: async (old, newp) => { }
    }
} as IAuthContext)

