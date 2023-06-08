
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { IconButton } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import categories from '../../categories.json';

export default function BasicDateRangePicker() {
  const [filteredRecipes, setFilteredRecipes] = React.useState([]);

  const handleDateRangeChange = (dateRange) => {
    const startDate = dateRange[0];
    const endDate = dateRange[1];

    // Filter recipes based on the selected date range

        const filteredRecipes = categories.categories.map((category) => {
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
        }).filter((category) => category.recipes.length > 0);
        

    setFilteredRecipes(filteredRecipes);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton sx={{ m: 0.5, p: 0, }}>
          <EventIcon sx={{ cursor: 'none' ,marginTop:'5px'}} />
        </IconButton>
        <DateRangePicker
          sx={{
            flexGrow: 1,
            maxWidth: 300,
            padding: 0,
          }}
          localeText={{ start: 'start', end: 'end' }}
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
