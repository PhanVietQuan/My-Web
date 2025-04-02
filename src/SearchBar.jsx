// components/SearchBar.js
import React from "react";
import { TextField } from "@mui/material";

function SearchBar() {
  return (
    <TextField
      fullWidth
      label="Tìm kiếm sách..."
      variant="outlined"
      sx={{ marginBottom: 2 }}
    />
  );
}

export default SearchBar;