import * as React from 'react'
import { AppBar, Theme, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { AuthContext } from '../../Context/AuthContext'


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: { flexGrow: 1 }
    })
)



const Navbar: React.FC = () => {
    const classes = useStyles({})
    const { status: { isAuthenticated }, actions } = React.useContext(AuthContext)

    return (
        <div className={classes.root}>

            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>Chatt</Typography>
                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </div>

    )
}


export default Navbar