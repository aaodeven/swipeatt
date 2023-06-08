import React from "react";
import Recipes from "../recettes.json";
import { useState } from "react";
// import Event from "../components/Event";
import RecipeInfo from "../components/RecipeInfo";
import Search from "../components/Search";
import RecipeCard from "../components/RecipeCard";

 
function HomeRecipes() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredRecipes = Recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      {/* <Event /> */}
      <RecipeInfo />
      <Search searchRecipes={handleSearch} />

      {filteredRecipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}


export default HomeRecipes;
