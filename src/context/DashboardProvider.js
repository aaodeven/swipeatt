import React, { createContext, useMemo, useState } from "react";

import categories from "../categories.json";
import { MenuItem } from "@mui/material";

export const DashboardContext = createContext(null);

function DashboardProvider({ children }) {
  // Categories state
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Recipes state
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // filter state
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangeRecipe = (event) => {
    setSelectedRecipe(event.target.value);
  };

  const handleDateRangeChange = (dateRange) => {
    const startDate = dateRange[0];
    const endDate = dateRange[1];

    // Filter recipes based on the selected date range
    const filteredRecipes = categories.categories
      .map((category) => {
        const filteredCategory = {
          ...category,
          recipes: Array.isArray(category.recipes)
            ? category.recipes.filter((recipe) => {
                const recipeDate = new Date(recipe.date);
                return recipeDate >= startDate && recipeDate <= endDate;
              })
            : [],
        };
        return filteredCategory;
      })
      .filter((category) => category.recipes.length > 0);

    console.log("filteredRecipes", filteredRecipes);
    setFilteredRecipes(filteredRecipes);
  };

  const value = useMemo(
    () => ({
      category: {
        selectedCategory,
        handleChangeCategory,
        categoriesList: categories.categories.map((category) => (
          <MenuItem key={category.id} value={category}>
            {category.name}
          </MenuItem>
        )),
      },
      recipe: {
        selectedRecipe,
        handleChangeRecipe,
        recipesList: categories.categories.map((category) =>
          category.recipes.map((recipe) => (
            <MenuItem key={recipe.id} value={recipe}>
              {recipe.name}
            </MenuItem>
          ))
        ),
      },
      date: {
        handleDateRangeChange,
      },
      filter: {
        filteredRecipes,
      },
    }),
    [selectedCategory, selectedRecipe, categories.categories]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;
