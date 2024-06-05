import React from "react";
import { Box, Typography, Tab, Tabs, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const UserPage = () => {
  return (
    <Box sx={{}}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 800, color: "#014e60", margin: "2rem 0 1rem 2.5rem" }}
        gutterBottom
      >
        Users (500)
      </Typography>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" size="small">
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
        <Button size="small" variant="contained">
          Add User
        </Button>
        <Button variant="outlined">Outlined</Button>
      </FormControl>
      <ToggleButtonGroup exclusive aria-label="text alignment">
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "#019b98",
          margin: "1rem 0 0 2rem",
        }}
      >
        <Tabs aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
    </Box>
  );
};
