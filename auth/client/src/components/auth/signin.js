import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/index';

class Signin extends Component{

	handleFormSubmit({email, password}){
		this.props.signinUser({email, password});
	}

	renderAlert(){
		if(this.props.errorMessage){
			return(
				<div className="alert alert-danger">
					<strong>Oops!</strong>
					{this.props.errorMessage}
				</div>
			)
		}
	}

	render(){
		const {handleSubmit, fields: {email, password}} = this.props;
		return(
			<form
				onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
			>
				<fieldset className="form-group">
					<label>Email:</label>	
					<input {...email} className="form-control" 
						type="textbox"
					/>
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} className="form-control" 
						type="password"
					/>
				</fieldset>
				{this.renderAlert()}
				<button className="btn btn-primary" action="submit">
					Sign in
				</button>
			</form>
		)
	}
}

const mapStateToProps = state => ({
	errorMessage: state.auth.error
})

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);