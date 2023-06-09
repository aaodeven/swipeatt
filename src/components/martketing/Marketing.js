import React, { useContext } from "react";
import BasicDateRangePicker from "./BasicDateRangePicker";
import { MARKET_TEXT } from "../../constants/text";
import DownloadData from "./DownloadData";
import "@fontsource/roboto/400.css";
import Typography from "@mui/material/Typography";
import "../styles/Market.css";

import { DashboardContext } from "../../context/DashboardProvider";
import SelectField from "./form/SelectField";

const Marketing = () => {
  const {
    recipe: { selectedRecipe, handleChangeRecipe, recipesList },
    category: { selectedCategory, handleChangeCategory, categoriesList },
  } = useContext(DashboardContext);

  return (
    <div className="marketingContainer">
      <Typography variant="h5" fontFamily="Roboto" marginTop={3}>
        {MARKET_TEXT.market}
      </Typography>

      <SelectField
        value={selectedCategory}
        handleChange={handleChangeCategory}
        label={MARKET_TEXT.categories}
        items={categoriesList}
      />

      <SelectField
        value={selectedRecipe}
        handleChange={handleChangeRecipe}
        label={MARKET_TEXT.recipes}
        items={recipesList}
      />
      
      <BasicDateRangePicker />
      <DownloadData />
    </div>
  );
};

export default Marketing;
