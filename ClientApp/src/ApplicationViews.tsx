import * as React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import AuthenticatedRoute from './Components/Auth/AuthenticatedRoute'
import Homepage from './Views/Homepage/Index'


export const ApplicationViews: React.FC = () => {


    return (
        
            <Route path="/" component={Homepage} />
            

    )
}