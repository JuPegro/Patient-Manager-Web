import "../app.css";
import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        background: '#fbfbfb',
        margin: 0,
        padding: '0.5rem 1rem',
        borderBottom: '1px solid #c8c8c8'
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="__breadcrumbsPreview" href="/">
          Dashboard
        </Link>
        <Link
          className="__breadcrumbs"
          href="/material-ui/getting-started/installation/"
        >
          Info
        </Link>
      </Breadcrumbs>
      <Box sx={{display: 'flex', alignItems: 'center', marginRight: '2.5rem'}}>
        <FormControl
          sx={{ m: 1, width: "25ch" }}
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
        <IconButton sx={{color: '#019b98'}}>
          <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton sx={{color: '#019b98'}}>
          <InfoOutlinedIcon />
        </IconButton>
        <IconButton sx={{color: '#019b98'}}>
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
