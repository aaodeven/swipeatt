import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import categories from "../../categories.json";
import { MARKET_TEXT } from "../../constants/text";
import BottomNavigation from "@mui/material/BottomNavigation";
import { DashboardContext } from "../../context/DashboardProvider";

export default function Recipe() {
  const {
    recipe: { recipe, handleChangeRecipe , selectedRecipe},
  } = useContext(DashboardContext);
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">
          <small>{MARKET_TEXT.recipes}</small>
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={recipe}
          onChange={handleChangeRecipe}
          label="Categories"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.categories.flatMap((category) =>
            category.recipes.map((recipe) => (
              <MenuItem key={recipe.id} value={recipe.id}>
                {recipe.name}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
      {selectedRecipe && (
        <div>
          {console.log(selectedRecipe)}
          {/* <h3>{selectedRecipe.name}</h3> */}
          {/* {/* <p>{selectedRecipe.description}</p>
          <h4>Ingredients:</h4>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions:</h4>
          <p>{selectedRecipe.instructions}</p> */}
        </div>
      )}
    </div>
  );
}
