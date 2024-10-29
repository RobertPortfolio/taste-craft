import React, { useState } from 'react';

const NutritionFacts = ({recipe}) => {
	const [isOpen, setIsOpen] = useState(false);
	const nutrients = Object.values(recipe.totalNutrients);
	return(
		<>
			<h3 className="montserrat mb-3">
	          Nutrition Facts 
	          <span className="fs-6 fw-normal"> (per serving)</span>
	        </h3>
	        <div className="row">
	          <div className="col-3 m-0">
	            <h5>{Math.round(recipe.calories)}</h5>
	            <div>Calories</div>
	          </div>
	          <div className="col-3 m-0">
	            <h5>{Math.round(recipe.totalNutrients.FAT.quantity)}g</h5>
	            <div>Fat</div>
	          </div>
	          <div className="col-3 m-0">
	            <h5>{Math.round(recipe.totalNutrients.CHOCDF.quantity)}g</h5>
	            Carbs
	          </div>
	          <div className="col-3 m-0">
	            <h5>{Math.round(recipe.totalNutrients.PROCNT.quantity)}g</h5>
	            Protein
	          </div>
	        </div>
	        <div 
	          className="custom-link mt-3" 
	          onClick={() => setIsOpen(!isOpen)}>
	          {isOpen ? 'Hide Full Nutrition Label' : 'Show Full Nutrition Label'}
	        </div>
	        {isOpen && (
	          <div className="mt-3 p-3 border">
	            <h4 className="montserrat mb-3">Nutrition Facts:</h4>
	            <ul className="list-group list-group-flush">
	              {
	                nutrients.map((nutrient, index)=>{
	                  return(
	                    <li key={index}
	                      className="list-group-item">
	                      <span className="fw-bold">{nutrient.label}</span>: {nutrient.quantity.toFixed(2)} {nutrient.unit}
	                    </li>
	                  );
	                })
	              }
	            </ul>
	          </div>
	        )}
		</>
	);
};

export default NutritionFacts;