import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MenuItems = (range) => {
  const menuItems = [];
  for (let i = range[0]; i <= range[1]; i++) {
    menuItems.push(<MenuItem value={i}>{i}</MenuItem>);
  }
  return menuItems;
};
const YearSelection = ({ current, handleChange }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={current}
          label="Age"
          onChange={handleChange}
        >
          {MenuItems([2003, 2015])}
        </Select>
      </FormControl>
    </Box>
  );
};

export default YearSelection;
