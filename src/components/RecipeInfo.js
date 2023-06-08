import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const RecipeInfo = () => {
  return (
    <div className="recipeInfoContainer">
        <p className="recipeInfo1">Recette</p>
      <div className="recipeInfo">
        <p> Editée par</p>
        <p>Date d'édition   
        <FontAwesomeIcon className='ArrowIcon' icon={faArrowUp} />
        </p>
        <p>Modérateur</p>
        <p>Date de modération</p>
        <p>Etat</p>
      <p>Publique</p>
      </div>
   
    </div>
  );
};

export default RecipeInfo;
