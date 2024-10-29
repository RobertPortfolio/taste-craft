import React from 'react';

const Ingridients = ({ recipe }) => {

	return(

		<div className="my-5">
	        <h3 className="montserrat">Ingredients</h3>
	        <ul className="custom-list">
	          {
	            recipe.ingredientLines.map((ingredientLine, index)=>{
	              return(
	                <li key={index}
	                  className="fs-5">
	                  <p>{ingredientLine}</p>
	                </li>
	              );
	            })
	          }
	        </ul>
	    </div>
    );
};

export default Ingridients;