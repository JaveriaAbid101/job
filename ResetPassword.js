import React from "react";
import {Button, Dimmer, Grid, Header, Image, Loader, Message, Segment} from "semantic-ui-react";
import {Form} from 'formsy-semantic-ui-react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {resetPasswordAction} from "../../actions/authActions";
import {Redirect} from "react-router-dom";

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
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

    submit = (newPasswordForm) => {
        const query = new URLSearchParams(this.props.location.search);
        let token = query.get("token");
        let password = newPasswordForm.password;
        this.setState({submitted: true});
        this.props.resetPasswordAction(password,token);
    }

    mapInputs = (inputs) => {
        return {
            'password': inputs.password,
        }
    }

    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src="tugage-logo.png"/>
                        Type in new password
                    </Header>
                    <Form size='large' onValidSubmit={this.submit} mapping={this.mapInputs}
                          onInvalid={this.disableSubmitButton}
                          onValid={this.enableSubmitButton}>
                        <Segment stacked>
                            <Form.Input name="password"
                                        required
                                        validations={{minLength: 6}}
                                        validationErrors={{minLength: "Password should be at least 6 characters long"}}
                                        fluid icon='lock' iconPosition='left' placeholder='Password' type="password"/>
                            <Button
                                color='teal'
                                fluid
                                size='large'
                                type='submit'
                                disabled={!this.state.isFormValid}>
                                Reset Password
                            </Button>
                        </Segment>
                    </Form>
                    {
                        !this.props.hasResetPassword && this.state.submitted &&
                        <Message color='red'>Could not reset password. Something went wrong while resetting your
                            password. </Message>
                    }
                    {
                        this.props.hasResetPassword && this.state.submitted && <Redirect to="/?token=1235" />
                    }
                    {
                        this.props.loading &&
                        <Dimmer active>
                            <Loader>Loading</Loader>
                        </Dimmer>
                    }
                    <Message>
                        <Link to='/sign-in'>Login to Tugage</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {hasResetPassword: state.user.hasResetPassword, loading: state.user.loading};
};

export const connectedResetPasswordPage = connect(mapStateToProps, {resetPasswordAction})(ResetPassword);