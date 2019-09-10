﻿import * as React from 'react'
import { TextField } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'



import validateEmail from '../../Utility/validateEmail'

import { IUserCredentials } from '../../Interfaces/IUserCredentials'
import { AuthContext } from '../../Context/AuthContext'

const LoginView = withRouter(({ history }) => {
    const { actions } = React.useContext(AuthContext)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [disabled, setDisabled] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    const validateForm = (): boolean =>
        validateEmail(email) && password.length > 0

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.currentTarget
        if (id === 'email') setEmail(value)
        if (id === 'password') setPassword(value)

        const isInvalid = !validateForm()
        if (disabled !== isInvalid) setDisabled(isInvalid)
    }

    const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault()
        setLoading(true)
        const credentials: IUserCredentials = { username: email, password }
        const result = await actions.signIn(credentials)

        if (result === 'SUCCESS') history.push('/')

        setLoading(false)
    }

    return (
        <AuthPageContainer>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    required
                    fullWidth
                    value={email}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    fullWidth
                    value={password}
                    onChange={handleChange}
                    margin="normal"
                />
                <CenteredButton
                    color="primary"
                    variant="contained"
                    style={{ fontSize: '1.3rem' }}
                    disabled={disabled || loading}
                    type="submit"
                >
                    Sign In
        </CenteredButton>
                <CenteredButton
                    style={{ fontSize: '1.3rem' }}
                    component={Link}
                    to="/signup"
                >
                    Register
        </CenteredButton>
                <CenteredButton component={Link} to="/recover">
                    Forgot Password?
        </CenteredButton>
            </form>
        </AuthPageContainer>
    )
})

export default LoginView
