import React from "react";
import { Box, Typography } from "@mui/material";

export const Welcome = ({ username }) => {
  return (
    <Box sx={{ margin: "2rem 0 0 2.5rem", width: '100%'}}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 800, color: "#014e60" }}
        gutterBottom
      >
        Welcome back {username}
        <Typography variant="body1" sx={{color: '#3f7a8d', fontWeight: 400, marginTop: '0.3rem'}}>Here is a summary of your overall data</Typography>
      </Typography>
    </Box>
  );
};
