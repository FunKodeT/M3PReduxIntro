const loggedReducer = (state = false, action) => {
	switch (action.type) {
		case 'SIGNIN':
			return !state;
		// case 'SIGNIN': return true
		default:
			return state;
		// return false
	}
};

export default loggedReducer;
