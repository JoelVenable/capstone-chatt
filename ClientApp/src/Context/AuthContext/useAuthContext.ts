import { useContext } from 'react'
import { AuthContext } from './AuthContext'

export const useAuthContext = (): IAuthContext => {
        return useContext(AuthContext)
}