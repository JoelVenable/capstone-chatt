import { IAuthStatus } from './IAuthStatus'
import { IAuthActions } from './IAuthActions'

export interface IAuthContext {
    status: IAuthStatus
    actions: IAuthActions
}