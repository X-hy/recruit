import { HashRouter as Router, Route, Redirect ,Switch} from 'react-router-dom'
import React from 'react'
import App from '../App'
import Home from '../Views/Home'
import Society from '../Views/Society'
import Campus from '../Views/Campus'
import Ali from '../Views/Ali'
import Personal from '../Views/Personal'


const router = <Router>
    <App>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/society" component={Society} />
            <Route path="/campus" component={Campus} />
            <Route path="/ali" component={Ali} />
            <Route path="/personal" component={Personal} />
            <Redirect from='/' to='/home' />
        </Switch>
    </App>

</Router>

export default router;