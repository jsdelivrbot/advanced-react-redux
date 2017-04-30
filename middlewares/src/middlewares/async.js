export default ({dispatch}) => {
	return next => action => {
		if(!action.payload || !action.payload.then){
			next(action);
		}

		action.payload.then(
			response => {
				dispatch({
					...action,
					payload: response
				})
			}
		);
	}
}