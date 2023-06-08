import React, { createContext, useMemo, useState } from "react";

import categories from "../categories.json";

export const DashboardContext = createContext(null);

function DashboardProvider({ children }) {
  // Categories state
  const [categoryName, setCategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Recipes state
  const [recipe, setRecipe] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // filter state
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // date state
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChangeCategory = (event) => {
    const categoryId = event.target.value;
    setCategoryName(categoryId);
    const category = categories.categories.find(
      (category) => category.id === categoryId
    );
    setSelectedCategory(category);
  };

  const handleChangeRecipe = (event) => {
    const selectedRecipeId = event.target.value;
    setRecipe(selectedRecipeId);

    const recipe = categories.categories
      .flatMap((category) => category.recipes)
      .find((recipe) => recipe.id === selectedRecipeId);

    setSelectedRecipe(recipe);
  };

  const handleDateRangeChange = (dateRange) => {
    setStartDate(dateRange[0]);
    setEndDate(dateRange[1]);

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

    setFilteredRecipes(filteredRecipes);
  };

  const value = useMemo(
    () => ({
      category: {
        categoryName,
        selectedCategory,
        handleChangeCategory,
      },
      recipe: {
        recipe,
        selectedRecipe,
        handleChangeRecipe,
      },
      date: {
        handleDateRangeChange,
      },
      filter: {
        filteredRecipes,
      },
    }),
    [categoryName, selectedCategory, recipe, selectedRecipe, startDate, endDate]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;
