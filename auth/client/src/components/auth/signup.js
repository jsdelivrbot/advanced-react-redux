import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/index';

class SignUp extends Component{

	handleFormSubmit(formProps){
		this.props.signupUser(formProps);
	}

	renderAlert(){
		if(this.props.errorMessage){
			return(
				<div className="alert alert-danger">
					<strong>Oop! </strong>{this.props.errorMessage}
				</div>
			)
		}
	}

	render(){
		const {handleSubmit, 
			fields: {email, password, passwordConfirm}
		} = this.props;

		return(
			<form
				onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
			>
				<fieldset className="form-group">
					<label>Email:</label>	
					<input {...email} className="form-control" 
						type="textbox"
					/>
					{email.touched && email.error &&
						(
							<div className="error">
								{email.error}
							</div>
						)
					}
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} className="form-control" 
						type="password"
					/>
					{
						password.touched && password.error &&
						(
							<div className="error">
								{password.error}
							</div>
						)
					}
				</fieldset>
				<fieldset className="form-group">
					<label>Confirm password:</label>
					<input {...passwordConfirm} className="form-control" 
						type="password"
					/>
					{
						passwordConfirm.touched && passwordConfirm.error &&
						(
							<div className="error">
								{passwordConfirm.error}
							</div>
						)
					}
				</fieldset>
				{this.renderAlert()}
				<button className="btn btn-primary" action="submit">
					Sign up
				</button>
			</form>
		)
	}
}

const validate = formProps => {
	const errors = {};

	if(!formProps.email){
		errors.email = 'Please enter an email';
	}

	if(!formProps.password){
		errors.password = 'Please enter a password';
	}

	if(!formProps.passwordConfirm){
		errors.passwordConfirm = 'Please enter a passwordConfirm';
	}

	if(formProps.password !== formProps.passwordConfirm){
		errors.password = 'Password must match';
	}

	return errors;
}

const mapStateToProps = state => ({
	errorMessage: state.auth.error
})

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm'],
	validate
}, mapStateToProps, actions)(SignUp);
