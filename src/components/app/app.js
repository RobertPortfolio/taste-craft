import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, RecipeDetailsPage, RecipesListPage, Login } from '../pages';
import Header from '../header';
import RecipesList from '../recipes-list';

import RecipeDetails from '../recipe-details';
import './app.css';

const App = () => {
	return(
		<div className="app container-lg">
			<Header />
			
			<Routes>
				<Route path="/" element={<HomePage />}/>	
				<Route path="/search" element={<RecipesList className="container"/>}/>
				<Route path="/recipe/:labelFromParams/:id" element={<RecipeDetails />}/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;