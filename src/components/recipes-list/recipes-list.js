import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions';
import { withRecipesService } from '../hoc';
import RecipesListItem from '../recipes-list-item';
import Spinner from '../spinner';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const RecipesList = ({ recipes, loading, error, fetchRecipes }) => {

	const query = useQuery().get("q"); // Получаем параметр q из URL
	console.log(query);
	const modifiedQuery = query.replace("&", " ");
	
	useEffect(() => {
	    if (modifiedQuery) {
	    	fetchRecipes(modifiedQuery)
	    }
	}, [modifiedQuery, fetchRecipes]);
	
	if (loading) {
		return <Spinner />; // Показываем индикатор загрузки
	}

	if (error) {
		return <div>Error: {error}</div>; // Обработка ошибки
	}

	return (
		<div className="row">
			{recipes.map((recipe) => {
				return(
				<div className="col-3 d-flex justify-content-center"
					key={recipe.uri}>
					<RecipesListItem
						recipe={recipe} />
				</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = ({ recipesList: { recipes, loading, error} }) => {
	return {
		recipes, loading, error
	};
};

const mapDispatchToProps = (dispatch, {recipesService}) => {
	return {
		fetchRecipes: (query) => fetchRecipes(dispatch, recipesService, query)()
	};
};

export default withRecipesService()(
	connect(mapStateToProps, mapDispatchToProps)(RecipesList)
);