import React from "react";
import SelectCategories from "./Categories";
import BasicDateRangePicker from "./BasicDateRangePicker";
import { MARKET_TEXT } from "../../constants/text";
import DownloadData from "./Download";
import "@fontsource/roboto/400.css";
import Typography from "@mui/material/Typography";
import "../styles/Market.css";
import Recipe from "./Recipe";

const Marketing = () => {
  return (
    <div className="marketingContainer">
      <Typography variant="h5" fontFamily="Roboto" marginTop={3}>
        {MARKET_TEXT.market}
      </Typography>
      <SelectCategories />
      <Recipe />
      <BasicDateRangePicker />
      <DownloadData />
    </div>
  );
};

export default Marketing;
