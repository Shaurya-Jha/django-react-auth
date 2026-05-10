import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router";
import AxiosInstance from "./axiosInstance";

const drawerWidth = 240;

const LINKS = [
  { text: "Home", icon: <HomeIcon />, path: "/home" },
  { text: "Login", icon: <LoginIcon />, path: "/" },
  { text: "Register", icon: <LoginIcon />, path: "/register" },
  { text: "About", icon: <InfoIcon />, path: "/about" },
  { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
];

export default function Navbar({ content }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    AxiosInstance.post("logout-all/")
      .then((res) => {
        localStorage.removeItem("Token");
        console.log("logged out successfully");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {LINKS.map((link, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}
