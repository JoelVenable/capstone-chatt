import * as React from 'react';
import { AuthContext } from './AuthContext';



interface Props {
    children: React.ReactNode | React.ReactNodeArray
}


const AuthContextProvider: React.FC<Props> = ({ children }: Props) => {

    const reducer: React.Reducer<IAuthStatus, IAction> = (state, actions) => {


        return state
    }

    const [status, setStatus] = React.useReducer(reducer, {
        isAuthenticated: false,
        authResolving: true,
        userEmail: undefined
    })



    React.useEffect(() => {
        //  resolve auth
    }, [])




    const actions = React.useMemo<IAuthActions>(() => ({
        signIn: async (cred): Promise<void> => {

        },
        signUp: async (cred): Promise<void> => { },
        signOut: async (): Promise<void> => { },
        changePassword: async (old, newp): Promise<void> => { }
    }), []);





    return (
        <AuthContext.Provider value={{ status, actions }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider }