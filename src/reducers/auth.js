
const updateAuth = (state, action) => {

	if (state === undefined) {
	    return {
	      user: null,
		  loading: false,
		  error: null,
		  isAuthenticated: false
	    };
  	}

  	switch(action.type) {
	  	case 'LOGIN_REQUEST': 
	  		return {
	  			...state,
	  			loading: true,
	  			error: null
	  		};
	  	
	  	case 'LOGIN_SUCCESS': 
	  		return {
	  			user: action.payload,
	  			isAuthenticated: true,
	  			loading: false,
	  			error: null
	  		};
	  	
	  	case 'LOGIN_FAILURE':
	  		return {
	  			...state,
	  			error: action.payload,
	  			loading: false
	  		};
	  
	  	case 'LOGOUT': 
	  		return {
		      user: null,
			  loading: false,
			  error: null,
			  isAuthenticated: false
		    };
	 
		default:
			return state.auth
		
  	}
};

export default updateAuth;