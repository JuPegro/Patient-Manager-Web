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

export const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardOutlinedIcon fontSize="small" />,
    activeIcon: <DashboardIcon fontSize="small" />,
  },
  {
    name: "Users",
    path: "/ajakaks",
    icon: <GroupOutlinedIcon fontSize="small" />,
    activeIcon: <GroupIcon fontSize="small" />,
  },
  {
    name: "Doctors",
    path: "/sjsjsksks",
    icon: <MasksOutlinedIcon fontSize="small" />,
    activeIcon: <MasksIcon fontSize="small" />,
  },
  {
    name: "Patients",
    path: "/sjsjslaklaks",
    icon: <AccessibleOutlinedIcon fontSize="small" />,
    activeIcon: <AccessibleIcon fontSize="small" />,
  },
  {
    name: "Tests",
    path: "/qiuhiqhw",
    icon: <BiotechOutlinedIcon fontSize="small" />,
    activeIcon: <BiotechIcon fontSize="small" />,
  },
  {
    name: "Shedules",
    path: "/qibsj",
    icon: <CalendarTodayOutlinedIcon fontSize="small" />,
    activeIcon: <EventNoteIcon fontSize="small" />,
  },
  {
    name: "Results",
    path: "/sjkajnsk",
    icon: <TaskAltOutlinedIcon fontSize="small" />,
    activeIcon: <TaskAltIcon fontSize="small" />,
  },
];

export const tools = [
  {
    name: "Manage account",
    path: "/f",
    icon: <PersonOutlineOutlinedIcon fontSize="small" />,
    activeIcon: <PersonIcon fontSize="small" />,
  },
  {
    name: "Settings",
    path: "/sjkajdnsk",
    icon: <TuneOutlinedIcon fontSize="small" />,
    activeIcon: <TuneIcon fontSize="small" />,
  },
  {
    name: "Log out",
    path: "/a",
    icon: <LogoutOutlinedIcon fontSize="small" />,
  },
];
