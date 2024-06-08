import React from "react";
import "../app.css";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DataTable from '../components/DataTable'
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from "@mui/icons-material/Add";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import ToggleButton from "@mui/material/ToggleButton";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

export const UserPage = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: "#014e60",
            margin: "2rem 0 0 2.5rem",
          }}
          gutterBottom
        >
          Users (500)
        </Typography>
        <Box sx={{ margin: "2rem 2rem 0 2.5rem", display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            endIcon={<IosShareOutlinedIcon />}
            sx={{ color: "#014e60", border: "solid 1px #014e60" }}
          >
            Export
          </Button>
          <Button
            startIcon={<PrintOutlinedIcon />}
            variant="outlined"
            sx={{ color: "#014e60", border: "solid 1px #014e60" }}
          >
            Print
          </Button>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            sx={{ color: "#fbfbfb", background: "#014e60" }}
          >
            Add User
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "1rem 0 0 2rem",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControl
          sx={{ m: 1, width: "25ch", display: "flex" }}
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
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              displayEmpty
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected === undefined || selected === "") {
                  return (
                    <MenuItem
                      value={10}
                      sx={{ margin: "-0.4rem -1rem", padding: -10 }}
                    >
                      <SellOutlinedIcon
                        fontSize="small"
                        sx={{ marginRight: "6px" }}
                      />{" "}
                      Status
                    </MenuItem>
                  );
                }
                return <em className="__select">{selected}</em>;
              }}
            >
              <MenuItem value="">
                <em>
                  <SellOutlinedIcon fontSize="small" />
                </em>
              </MenuItem>
              <MenuItem value={"Active"}>Active</MenuItem>
              <MenuItem value={"Inactive"}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              displayEmpty
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected === undefined || selected === "") {
                  return (
                    <MenuItem
                      value={10}
                      sx={{ margin: "-0.4rem -1rem", padding: -10 }}
                    >
                      <GppGoodOutlinedIcon
                        fontSize="small"
                        sx={{ marginRight: "6px" }}
                      />{" "}
                      Role
                    </MenuItem>
                  );
                }
                return <em className="__select">{selected}</em>;
              }}
            >
              <MenuItem value="">
                <em>
                  <GppGoodOutlinedIcon fontSize="small" />
                </em>
              </MenuItem>
              <MenuItem value={"Admin"}>Admin</MenuItem>
              <MenuItem value={"Assitant"}>Assitant</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ marginRight: "2rem" }}>
            <ToggleButtonGroup exclusive aria-label="text alignment">
              <ToggleButton value="left" aria-label="left aligned">
                <ViewListIcon fontSize="small" />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <ViewAgendaIcon fontSize="small" />
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <ViewModuleIcon fontSize="small" />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Box>
      <DataTable/>
    </Box>
  );
};
