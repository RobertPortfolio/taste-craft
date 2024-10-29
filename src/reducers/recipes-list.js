
const updateRecipesList = (state, action) => {

  if (state === undefined) {

    return {
      recipes: [],
      loading: false,
      error: null,

    };
  }

  switch (action.type) {
    case 'FETCH_RECIPES_REQUEST':
      return {

        recipes: [],
        loading: true,
        error: null
      };
    case 'FETCH_RECIPES_SUCCESS':
      return {

        recipes: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_RECIPES_FAILURE':
      return {

        recipes: [],
        loading: false,
        error: action.payload
      };
    default:
      return state.recipesList
  }
};

export default updateRecipesList;