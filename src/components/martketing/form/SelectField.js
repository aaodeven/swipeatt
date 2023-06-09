import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectField({ value, handleChange, items, label }) {

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="select-field">
        <small>{label}</small>
      </InputLabel>
      <Select
        labelId="select-field"
        id="select-items"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items}
      </Select>
    </FormControl>
  );
}

export default SelectField;
