
const updateRecipeDetails = (state, action) => {

  if (state === undefined) {

    return {
      recipe: null,
      loading: false,
      error: null,

    };
  }

  switch (action.type) {
    case 'FETCH_RECIPE_REQUEST':
      return {

        recipe: null,
        loading: true,
        error: null
      };
    case 'FETCH_RECIPE_SUCCESS':
      return {

        recipe: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_RECIPE_FAILURE':
      return {

        recipe: null,
        loading: false,
        error: action.payload
      };
    default:
      return state.recipeDetails
  }
};

export default updateRecipeDetails;