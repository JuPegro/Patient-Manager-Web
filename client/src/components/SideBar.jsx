import "../app.css";
import React from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { Divider, List } from "@mui/material";
import { links, tools } from "./Navigation";

export const SideBar = () => {
  return (
    <div className="__container">
      <img className="__logo" src={Logo} alt="Logo" />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          margin: "1rem 0 0 2rem",
        }}
      >
        {links.map((info, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? "__active" : "__link")}
            to={info.path}
          >
            {({ isActive }) => (
              <>
                {isActive ? info.activeIcon : info.icon} {info.name}
              </>
            )}
          </NavLink>
        ))}
      </List>
      <Divider />
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          margin: "1rem 0 0 2rem",
          position: "absolute",
          bottom: "2rem",
        }}
      >
        {tools.map((info, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? "__active" : "__link")}
            to={info.path}
          >
            {({ isActive }) => (
              <>
                {isActive ? info.activeIcon : info.icon} {info.name}
              </>
            )}
          </NavLink>
        ))}
      </List>
    </div>
  );
};
