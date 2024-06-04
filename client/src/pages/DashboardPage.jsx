import React from "react";
import { Box } from "@mui/material";
import { Header } from "../components/Header";
import { Welcome } from "../components/Welcome";

export const DashboardPage = () => {
  return (
    <Box>
      <Welcome username='JuPegro'/>
      <Header />
    </Box>
  );
};
