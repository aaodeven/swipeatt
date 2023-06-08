import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import categories from "../../categories.json";
import { MARKET_TEXT } from "../../constants/text";
import { DashboardContext } from "../../context/DashboardProvider";

export default function Categories() {

  const { category : { categoryName , handleChangeCategory } }  = useContext(DashboardContext)

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">
          <small>{MARKET_TEXT.categories}</small>
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={categoryName}
          onChange={handleChangeCategory}
          label="Categories"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* {selectedCategory && (
        <div>
           <h2>{selectedCategory.name}</h2> 
          {selectedCategory.recipes.map((recipe) => (
            // <div key={recipe.id}>
            //   <h3>{recipe.name}</h3>
            //   <p>{recipe.description}</p>
            //   <ul>
            //     {recipe.ingredients.map((ingredient, index) => (
            //       <li key={index}>{ingredient}</li>
            //     ))}
            //   </ul>
            //   <p>{recipe.instructions}</p>
            // </div>
            console.log(recipe)
          ))}
        </div>
      )} */}
    </div>
  );
}
