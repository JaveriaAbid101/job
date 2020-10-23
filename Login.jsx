import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {Button, Form, Grid, Header, Image, Message, Segment, Loader, Dimmer} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {loginAction} from "../../actions/authActions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false,
            isLoggedIn: false,
            token: this.getTokenFromUrl()
        };
    }

    getTokenFromUrl(){
        const query = new URLSearchParams(this.props.location.search);
        let token = query.get("token");
        if(token){
            return token;
        }
        return null;
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({submitted: true, loggingIn: true});
        const {email, password} = this.state;
        if (email && password) {
            this.props.loginAction(email, password);
        }
    }
    
    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src="tugage-logo.png"/> Log-in to your account
                    </Header>
                    {
                        this.state.token && <Message color='green'>Your password has been successfully updated</Message>
                    }
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                                onChange={e => this.setState({email: e.target.value})}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={this.password}
                                onChange={e => this.setState(({password: e.target.value}))}
                            />
                            <Button
                                color='teal'
                                fluid
                                size='large'
                                type='submit'
                                disabled={!this.state.email || !this.state.password}
                                onClick={this.handleSubmit}>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    {
                        !this.props.isLoggedIn && this.state.submitted &&
                        <Message color='red'>Incorrect email address or password</Message>
                    }
                    {
                        this.props.isLoggedIn && this.state.submitted && <Redirect to="/dashboard"/>
                        
                    }
                    
                    {
                        this.props.loading && <Dimmer active>
                            <Loader>Loading</Loader>
                        </Dimmer>
                    }
                    <Message>
                        New to us? <Link to='sign-up'>Sign Up</Link> OR <Link to='forgot-password'>Forgot Password?</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {isLoggedIn: state.user.isLoggedIn, loading: state.user.loading};
};

export const connectedLoginPage = connect(mapStateToProps, {loginAction})(Login);