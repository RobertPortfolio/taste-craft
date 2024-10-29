import React from 'react';
import { Link } from 'react-scroll';

const InfoTable = ({recipe}) => {
	return(
		<div className="row g-3 p-3 my-3 rounded border border-secondary">
	        <div className="col-4 m-0">
	          <h5>Total Time:</h5>
	          <div>{recipe.totalTime} mins</div>
	        </div>
	        <div className="col-4 m-0">
	          <h5>Yield:</h5>
	          <div>{recipe.yield} servings</div>
	        </div>
	        <div className="col-4 m-0">
	          <h5>Total Weight:</h5>
	          {Math.round(recipe.totalWeight)} gr
	        </div>
	        <div className="col-12 pt-3 d-flex justify-content-center border-top border-2">
	            <Link 
	              to="nutrition-facts" 
	              smooth={true} 
	              duration={500}
	              className="custom-link text-dark">Jump to Nutrition Facts
	            </Link>
	        </div>
	      </div>
	);
};

export default InfoTable;