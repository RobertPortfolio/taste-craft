import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Element } from 'react-scroll';
import { withRecipesService } from '../hoc';
import { fetchRecipe } from '../../actions';
import Spinner from '../spinner';
import NutritionFacts from './nutrition-facts';
import InfoTable from './info-table';
import Ingridients from './ingridients';
import './recipe-details.css';

const RecipeDetails = ({ recipe, loading, error, fetchRecipe }) => {

  const { labelFromParams, id } = useParams();
  const modifiedLabel = labelFromParams.replace("&", " ");

  useEffect(() => {
     if (modifiedLabel) {
        fetchRecipe(modifiedLabel, id)
      }
  }, [modifiedLabel, id, fetchRecipe]);


  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!recipe) {
    return <p>No recipe found</p>;
  }

  
  
  
  
  const { label, image } = recipe;
  return (
    <div className="offset-1 w-50">
      <div className="">
        <h1 className="montserrat">{label}</h1>
      </div>

      <div className="">
        <img 
          className="card-img-top w-50"
          src={image} 
          alt="cover"/>
      </div>

      <InfoTable recipe={recipe} />

      <Ingridients recipe={recipe} />

      

      <Element name="nutrition-facts">
        <NutritionFacts recipe={recipe} />
      </Element>


    </div>
  );
};

const mapStateToProps = ({ recipeDetails: { recipe, loading, error} }) => {
  return {
    recipe, loading, error
  };
};

const mapDispatchToProps = (dispatch, {recipesService}) => {
  return {
    fetchRecipe: (query, id) => fetchRecipe(dispatch, recipesService, query, id)()
  };
};

export default withRecipesService()(
  connect(mapStateToProps, mapDispatchToProps)(RecipeDetails)
);