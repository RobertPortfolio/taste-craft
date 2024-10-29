import { mockLogin } from '../services/auth-service';

const recipesLoaded = (newRecipes) => {
	return {
		type: 'FETCH_RECIPES_SUCCESS',
		payload: newRecipes
	}
};

const recipesRequested = () => {
	return {
		type: 'FETCH_RECIPES_REQUEST'
	}
};

const recipesError = (error) => {
	return {
		type: 'FETCH_RECIPES_FAILURE',
		payload: error
	}
};

const recipeLoaded = (newRecipe) => {
	return {
		type: 'FETCH_RECIPE_SUCCESS',
		payload: newRecipe
	};
};

const recipeRequested = () => {
	return {
		type: 'FETCH_RECIPE_REQUEST'
	}
};

const recipeError = (error) => {
	return {
		type: 'FETCH_RECIPE_FAILURE',
		payload: error
	}
};

const fetchRecipes = (dispatch, recipesService, query) => () => {
	dispatch(recipesRequested());
	recipesService.getRecipes(query)
		.then((data) => dispatch(recipesLoaded(data)))
		.catch((err) => dispatch(recipesError(err)));
}

const fetchRecipe = (dispatch, recipesService, query, id) => () => {
	dispatch(recipeRequested());
	recipesService.getRecipe(query, id)
		.then((data) => dispatch(recipeLoaded(data)))
		.catch((err) => dispatch(recipeError(err)));
}

const loginRequest = () => {
	return {
		type: 'LOGIN_REQUEST'
	}
};

const loginSuccess = (user) => {
	return {
		type: 'LOGIN_SUCCESS',
		payload: user
	}
};

const loginFailure = (error) => {
	return {
		type: 'LOGIN_FAILURE',
		payload: error
	}
};

const logout = () => {
	return {
		type: 'LOGOUT'
	}
};

const login = (dispatch, credentials) => () => {
	dispatch(loginRequest());
	const response = mockLogin(credentials)
		.then((data) => dispatch(loginSuccess(response.user)))
		.catch((err) => dispatch(loginFailure(err.message)));
};

export { 
	fetchRecipes,
	fetchRecipe,
	login
};