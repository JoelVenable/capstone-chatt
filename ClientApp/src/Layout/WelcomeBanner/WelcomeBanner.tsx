import * as React from 'react'
import { Typography } from '@material-ui/core'

const WelcomeBanner: React.FC = () => (
    <Typography variant="h1" style={{ marginTop: '2rem' }} align="center">
        Welcome to Chatt
    </Typography>
)

export { WelcomeBanner }
