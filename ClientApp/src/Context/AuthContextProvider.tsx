import * as React from 'react';
import { AuthContext } from './AuthContext';
import { IAuthActions } from '../Interfaces/IAuthActions';
import { IAuthStatus } from '../Interfaces/IAuthStatus';
import { IAction } from '../Interfaces/IAction';



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
        signIn: (cred) => { },
        signUp: (cred) => { },
        signOut: () => { },
        changePassword: (old, newp) => { }
    }), []);





    return (
        <AuthContext.Provider value={{ status, actions }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider }