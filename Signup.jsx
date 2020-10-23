import React from "react";
import {Button, Grid, Header, Message, Segment, Label, Image, Dimmer, Loader,}  from "semantic-ui-react";
import {Form} from 'formsy-semantic-ui-react';
import {addValidationRule} from 'formsy-react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {signupAction} from "../../actions/authActions";






addValidationRule('isSame', function (values, value, otherField) {
    return value === values[otherField];
});



class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            isFormValid: false,
            submitted: false,
            
        };
    }
    
    submit = (userInfoInForm,) => {
        
this.setState({submitted: true});
        this.props.signupAction(userInfoInForm);
    }

    mapInputs = (inputs) => {
        return {
            'firstName': inputs.firstName,
            'lastName': inputs.lastName,
            'email': inputs.email,
            'password': inputs.password,
            'confirmPassword': inputs.confirmPassword
        }
    }

    render() {
        const errorLabel = <Label color="red" pointing prompt/>;

        return (

            
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src="tugage-logo.png"/>Register With Tugage
                    </Header>

                    {
                        !this.props.isRegistered &&
                        <Form size='large' onValidSubmit={this.submit} mapping={this.mapInputs}  >
                            <Segment stacked>
                                
                                <Form.Input name="firstName"
                                            validations={{minLength: 3}}  required errorLabel={errorLabel}
                                            validationErrors={{minLength: 'Minimum 3 characters allowed ',
                                            isDefaultRequiredValue: 'Email is Required'}}
                                             fluid icon='address card outline' iconPosition='left'
                                            placeholder='First Name'/>

                                <Form.Input name="lastName"
                                            validations={{minLength: 3}}  required errorLabel={errorLabel}
                                            validationErrors={{minLength: 'Minimum 3 characters allowed ',
                                            isDefaultRequiredValue: 'Last name is Required'}}
                                             fluid icon='address card outline' iconPosition='left'
                                            placeholder='Last name'/>

                                <Form.Input validations="isEmail"  required 
                                            validationErrors={{isEmail: 'Please Enter you email',
                                            isDefaultRequiredValue: 'Email is Required'}}
                                            errorLabel={ errorLabel } name="email" fluid icon='user'
                                            iconPosition='left' placeholder='E-mail Address'/>

                                <Form.Input name="password"  required
                                            validations={{minLength: 6}}
                                            errorLabel={ errorLabel }
                                            validationErrors={{minLength: 'Minimum 6 characters allowed ',
                                            isDefaultRequiredValue: 'Password is Required'}}
                                            fluid icon='lock' iconPosition='left' placeholder='Password'
                                            type="password"/>

                                <Form.Input name="confirmPassword" fluid icon='keyboard outline' iconPosition='left'
                                            placeholder='Re-type Password' required
                                            errorLabel={ errorLabel }
                                            validations={{minLength: 6, isSame: "password"}}
                                            validationErrors={{minLength: 'Minimum 6 characters allowed ',
                                            isDefaultRequiredValue: 'Password is Required'}}
                                            type="password"/>
                                <Button
                                    color='teal'
                                    fluid
                                    size='large'
                                    type='submit'>
                                    Register
                                </Button>

                            </Segment>
                        </Form>
                    }
                    {
                        !this.props.isRegistered && this.state.submitted &&
                        <Message color='red'>User with this email already exists</Message>
                    }
                    {
                        this.props.loading &&
                        <Dimmer active>
                            <Loader>Loading</Loader>
                        </Dimmer>
                    }
                    {
                        !this.props.isRegistered &&
                        <Message>If Already Registered <Link to='/'> Sign In</Link></Message>
                    }

                    {
                        this.props.isRegistered && <Message>Pleaes Login<Link to='/'> Sign In</Link></Message>
                    }
                     
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {isRegistered: state.user.isRegistered, loading: state.user.loading};
};

export const connectedSignupPage = connect(mapStateToProps, {signupAction})(Signup);
