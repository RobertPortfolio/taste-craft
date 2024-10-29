import updateRecipesList from './recipes-list';
import updateRecipeDetails from './recipe-details';
import updateAuth from './auth';

const reducer = (state, action) => {

	return{
		recipesList: updateRecipesList(state, action),
		recipeDetails: updateRecipeDetails(state, action),
		auth: updateAuth(state, action)
	};

};
export default reducer;