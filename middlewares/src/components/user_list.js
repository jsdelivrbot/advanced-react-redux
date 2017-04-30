import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class UserList extends Component{

	componentWillMount() {
		this.props.fetchUser();
	}

	render(){
		return(
			<div className="user-list">
				{this.props.users.map((item, key) => (
					<div className="card card-block" key={key}>
						<h4 className="card-title">{item.name}</h4>
				        <p className="card-text">{item.company.name}</p>
				        <a className="btn btn-primary" href={item.website} target="_blank">Website</a>
					</div>
				))}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	users: state.users
});

export default connect(mapStateToProps, actions)(UserList);