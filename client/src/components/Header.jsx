import React from "react";
import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        margin: "1rem 0 2rem 2.5rem",
        width: "94%",
        height: "3.5rem",
        background: "#c1ffff",
        border: "2px solid #019b98",
        borderRadius: "0.3rem",
        display: "flex",
        alignItems: "center",
        gap: 0,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          color: "#fbfbfb",
          margin: "1rem",
          padding: "0 1rem",
          background: "#019b98",
          borderRadius: "0.7rem",
        }}
      >
        New
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 500, color: "#019b98" }}>
        Access your activity and timeline right away in all new dashboard
      </Typography>
    </Box>
  );
};
