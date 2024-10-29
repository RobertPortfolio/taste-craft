import React from 'react';
import { RecipesServiceConsumer } from '../recipes-service-context';

const withRecipeService = () => (Wrapped) => {
	return (props) => {
		return (
			<RecipesServiceConsumer>
				{
					(recipesService) => {
						return (<Wrapped {...props} 
								 recipesService={recipesService} />);
					}
				}
			</RecipesServiceConsumer>
		);
	}
};

export default withRecipeService;