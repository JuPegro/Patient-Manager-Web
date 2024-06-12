import "../app.css";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography, Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const Accions = () => {
  return (
    <Box
      sx={{
        margin: "2rem 2rem 1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: "#014e60",
        }}
        gutterBottom
      >
        Users (500)
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <FormControl
          sx={{ width: "25ch", display: "flex" }}
          variant="outlined"
          size="small"
        >
          <InputLabel>Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          sx={{ color: "#fbfbfb", background: "#014e60" }}
        >
          Add User
        </Button>
      </Box>
    </Box>
  );
};

export default Accions;
