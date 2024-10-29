import React from 'react';

const {
	Provider: RecipesServiceProvider,
	Consumer: RecipesServiceConsumer
} = React.createContext();

export {
	RecipesServiceProvider,
	RecipesServiceConsumer
};