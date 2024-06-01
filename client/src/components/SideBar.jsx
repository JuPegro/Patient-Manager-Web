import "../app.css";
import React from "react";
import { List } from "@mui/material";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import TuneIcon from "@mui/icons-material/Tune";
import GroupIcon from "@mui/icons-material/Group";
import MasksIcon from "@mui/icons-material/Masks";
import PersonIcon from "@mui/icons-material/Person";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BiotechIcon from "@mui/icons-material/Biotech";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessibleIcon from "@mui/icons-material/Accessible";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import MasksOutlinedIcon from "@mui/icons-material/MasksOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardOutlinedIcon />,
    activeIcon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/ajakaks",
    icon: <GroupOutlinedIcon />,
    activeIcon: <GroupIcon />,
  },
  {
    name: "Doctors",
    path: "/sjsjsksks",
    icon: <MasksOutlinedIcon />,
    activeIcon: <MasksIcon />,
  },
  {
    name: "Patients",
    path: "/sjsjslaklaks",
    icon: <AccessibleOutlinedIcon />,
    activeIcon: <AccessibleIcon />,
  },
  {
    name: "Tests",
    path: "/qiuhiqhw",
    icon: <BiotechOutlinedIcon />,
    activeIcon: <BiotechIcon />,
  },
  {
    name: "Shedules",
    path: "/qibsj",
    icon: <CalendarTodayOutlinedIcon />,
    activeIcon: <EventNoteIcon />,
  },
  {
    name: "Results",
    path: "/sjkajnsk",
    icon: <TaskAltOutlinedIcon />,
    activeIcon: <TaskAltIcon />,
  },
];

const tools = [
  {
    name: "Manage account",
    path: "/f",
    icon: <PersonOutlineOutlinedIcon />,
    activeIcon: <PersonIcon />,
  },
  {
    name: "Settings",
    path: "/sjkajdnsk",
    icon: <TuneOutlinedIcon />,
    activeIcon: <TuneIcon />,
  },
  {
    name: "Log out",
    path: "/a",
    icon: <LogoutOutlinedIcon />,
  },
];

export const SideBar = () => {
  return (
    <div className="__container">
      <img className="__logo" src={Logo} alt="Logo" />
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
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
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          margin: "1rem 0 0 2rem",
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
