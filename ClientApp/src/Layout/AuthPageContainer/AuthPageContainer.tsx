import * as React from 'react'
import { Container } from '@material-ui/core'
import { WelcomeBanner } from '../WelcomeBanner/WelcomeBanner'

interface Props {
    children?: React.ReactChildren
}

const AuthPageContainer: React.FC<Props> = ({ children }: Props) => (
    <div>
        <WelcomeBanner />
        <Container maxWidth="xs" style={{ marginTop: '2rem' }}>
            {children}
        </Container>
    </div>
)

export { AuthPageContainer } 
