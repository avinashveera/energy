import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,

  MenuItem,
  Menu,
  useMediaQuery,
  Fab,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Chat as ChatIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import logo from "../img/logo.png"; // Custom logo
import { useNavigate } from "react-router-dom";
import theme from "../theme";

const TopAppBar = () => {
  const [open, setOpen] = useState(false); // Drawer state
  const [servicesOpen, setServicesOpen] = useState(false); // Dropdown state
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  // Drawer toggle
  const toggleDrawer = () => setOpen(!open);

  // Navigation
  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false); // Close drawer after navigation
  };

  // Dropdown toggle
  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen);
  };

  // Menu items
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/" },
    { text: "Contact", path: "/" },
  ];

  // Services dropdown items
  const services = [
    { text: "Home Relocation", path: "/services/home-relocation" },
    { text: "Office Relocation", path: "/services/office-relocation" },
    { text: "Car Transport", path: "/services/car-transport" },
    { text: "Bike Transport", path: "/services/bike-transport" },
    { text: "Storage Services", path: "/services/storage" },
    { text: "International Relocation", path: "/services/international" },
  ];

  return (
    <>
      {/* AppBar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: "60px" }} />
          </Box>

          {/* Menu for desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  sx={{ color: theme.colors.secondary, marginLeft: 2 }}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.text}
                </Button>
              ))}

              {/* Services dropdown */}
              {/* <Button
                sx={{
                  color: theme.colors.secondary,
                  marginLeft: 2,
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleServicesToggle}
              >
                Services
                <ArrowDropDownIcon />
              </Button> */}
              {/* <Menu
                open={servicesOpen}
                onClose={() => setServicesOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              >
                {services.map((service) => (
                  <MenuItem
                    key={service.text}
                    onClick={() => handleNavigation(service.path)}
                  >
                    {service.text}
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>
          )}

          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              sx={{ color: theme.colors.secondary }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: 250,
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: theme.colors.background,
            boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Logo in drawer */}
        <Box sx={{ padding: "20px", textAlign: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "60px" }} />
        </Box>

        {/* Menu items */}
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => handleNavigation(item.path)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}

          {/* Divider */}
          {/* <Divider sx={{ margin: "10px 0" }} /> */}

          {/* // Divider,
          // Collapse, */}
          {/* Services dropdown in drawer */}
          {/* 
          <ListItem button onClick={handleServicesToggle}>
            <ListItemText primary="Services" />
            <ArrowDropDownIcon />
          </ListItem>
          <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {services.map((service) => (
                <ListItem
                  button
                  key={service.text}
                  sx={{ paddingLeft: "30px" }}
                  onClick={() => handleNavigation(service.path)}
                >
                  <ListItemText primary={service.text} />
                </ListItem>
              ))}
            </List>
          </Collapse> */}
        </List>
      </Drawer>

      {/* Floating action buttons */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 60,
          right: 16,
          bgcolor: "#00a2e7",
        }}
        href="https://t.me/jobscraping"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ChatIcon />
      </Fab>
      <Fab
        sx={{
          position: "fixed",
          bottom: 120,
          right: 16,
          bgcolor: "#25D366",
        }}
        href="https://whatsapp.com/channel/0029VaxAC8LDp2QHBv5MD53T"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </Fab>
    </>
  );
};

export default TopAppBar;
