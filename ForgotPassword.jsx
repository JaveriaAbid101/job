import React from "react";
import {Button, Dimmer, Grid, Header, Image, Loader, Message, Segment} from "semantic-ui-react";
import {Form} from 'formsy-semantic-ui-react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {forgotPasswordAction} from "../../actions/authActions";

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isFormValid: false,
            submitted: false
        };
    }

    enableSubmitButton = () => {
        this.setState({isFormValid: true});
    }

    disableSubmitButton = () => {
        this.setState({isFormValid: false});
    }

    submit = (passwordResetForm) => {
        this.setState({submitted: true});
        this.props.forgotPasswordAction(passwordResetForm.email);
    }

    mapInputs = (inputs) => {
        return {
            'email': inputs.email,
        }
    }

    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src="tugage-logo.png"/>
                        Enter your email to reset your password
                    </Header>
                    <Form size='large' onValidSubmit={this.submit} mapping={this.mapInputs}
                          onInvalid={this.disableSubmitButton}
                          onValid={this.enableSubmitButton}>
                        <Segment stacked>
                            <Form.Input validations="isEmail" required
                                        validationErrors={{isEmail: 'Email not valid'}}
                                        errorLabel={this.errorLabel} name="email" fluid icon='user' iconPosition='left'
                                        placeholder='E-mail Address'/>
                            <Button
                                color='teal'
                                fluid
                                size='large'
                                type='submit'
                                disabled={!this.state.isFormValid}>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    {
                        !this.props.isPasswordChangeRequestSuccessful && this.state.submitted &&
                        <Message color='red'>It seems like no user with the given email exists in our system</Message>
                    }
                    {
                        this.props.isPasswordChangeRequestSuccessful && this.state.submitted &&
                        <Message color='green'>We have sent you an email to reset your password. Please follow
                            instructions in the email.</Message>
                    }
                    {
                        this.props.loading &&
                        <Dimmer active>
                            <Loader>Loading</Loader>
                        </Dimmer>
                    }
                    <Message>
                        New to us? <Link to='/sign-up'>Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        isPasswordChangeRequestSuccessful: state.user.isPasswordChangeRequestSuccessful,
        loading: state.user.loading
    };
};

export const connectedForgotPasswordPage = connect(mapStateToProps, {forgotPasswordAction})(ForgotPassword);