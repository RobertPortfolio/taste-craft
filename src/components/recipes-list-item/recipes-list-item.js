import React from 'react';
import { useNavigate } from 'react-router-dom';
import './recipes-list-item.css';

const RecipesListItem = ({ recipe }) => {
	
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/recipe/${recipe.label}/${recipe.uri.split("recipe_")[1]}`);
	};

	const { label, dishType, image } = recipe;
	return (
		<div 
			onClick={handleClick}
			className="card mb-3 border border-2 card-custom" 
			style={{maxWidth: '19rem'}}>
			<div className="">
				<div className="">
					<img className="card-img-top" src={image} alt="cover"/>
				</div>
				<div className="">
					<div className="card-body">
						<h4 className="card-title text-dark montserrat">{label}</h4>
						<div className="fs-6 text-secondary"> {dishType}</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}; 

export default RecipesListItem;