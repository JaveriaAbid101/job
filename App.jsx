import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Login, Signup, ForgotPassword } from './Auth';
import Dashboard from "./Dashboard/Dashboard";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import { getToken } from '../utils'

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => {
                    if (getToken() !== null) {
                        return children;
                    }
                    else {
                        return <Redirect to={{ pathname: "/", state: { from: location } }} />
                    }
                }
            }
        />
    );
}

function App(props) {
    return (
        <Grid style={{ margin: "20px" }}>
            <Router>
                <GridRow>
                    <GridColumn>
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route exact path='/sign-up' component={Signup} />
                            <Route exact path='/forgot-password' component={ForgotPassword} />
                            <PrivateRoute path='/dashboard'><Dashboard /></PrivateRoute>
                        </Switch>
                    </GridColumn>
                </GridRow>
            </Router>
        </Grid>
    )
}

export default App;