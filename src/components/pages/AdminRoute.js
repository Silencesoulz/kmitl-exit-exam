import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';


function AdminRoute() {
    return (
        <>
            <Router>
                <Switch>
                <Route path='/dashboard' component={AdminDashboard} />
                </Switch>
            </Router>    

        </>
    )
}

export default AdminRoute
