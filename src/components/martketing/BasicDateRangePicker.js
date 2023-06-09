import React, { useContext } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { IconButton } from "@mui/material";
import { DashboardContext } from "../../context/DashboardProvider";
import EventIcon from "@mui/icons-material/Event";

export default function BasicDateRangePicker() {
  const {
    date: { handleDateRangeChange },
    filter: { filteredRecipes },
  } = useContext(DashboardContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton sx={{ m: 0.5, p: 0 }}>
          <EventIcon sx={{ cursor: "none", marginTop: "5px" }} />
        </IconButton>
        <DateRangePicker
          sx={{
            flexGrow: 1,
            maxWidth: 300,
            padding: 0,
          }}
          localeText={{ start: "start", end: "end" }}
          onChange={handleDateRangeChange}
        />
      </div>
       {/* Render the filtered recipes */}
       {filteredRecipes.length > 0 ? (
        <div>
          {filteredRecipes.map((category) => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {category.recipes.map((recipe) => (
                  <li key={recipe.id}>
                    <h4>{recipe.name}</h4>
                    <p>{recipe.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </LocalizationProvider>
  );
}
