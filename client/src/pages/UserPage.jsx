import React, { useEffect, useState } from "react";
import Accions from "../components/Accions";
import MediaCard from "../components/MediaCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // FETCHING DATA USERS
        const response = await fetch("http://localhost:5000/users");

        // ERROR RESPONSE
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // CONVERT JSON DATA
        const data = await response.json();

        // ADD STATE IN USER
        setUsers(data.users);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Accions />
      <Box sx={{ width: "95%", margin: "0 2rem", height: '100%' }}>
        <Grid
          container
          // spacing={{ xs: 2, md: 3, sm: 3 }}
          spacing={2}
        >
          {users.map((user) => (
            <Grid item key={user.id} xs={12} sm={2.4} md={2.4} lg={2.4} xl={2.4}>
              <MediaCard user={user} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
