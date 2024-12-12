// src/components/TopAppBar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Fab
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { WhatsApp as WhatsAppIcon } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png'; // Custom logo
import theme from '../theme';

const TopAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();

  // Handle call actions
  const handleCall1 = () => {
    window.location.href = 'tel:+919123129847';
  };

  const handleCall2 = () => {
    window.location.href = 'tel:+919470679846';
  };

  // Navigation
  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const handleGetQuote = () => {
    navigate('/getquote');
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Service', path: '/service' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#fff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Section: Logo and Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '16px' }} />
            {!isMobile && (
              <Box sx={{ display: 'flex' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    onClick={() => handleNavigation(item.path)}
                    sx={{ color: theme.colors.secondary, marginLeft: 2 }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
          </Box>

          {/* Right Section: Call and Quote Buttons */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box onClick={handleCall1} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mr: 2 }}>
                <PhoneIcon sx={{ color: theme.colors.primary, mr: 1 }} />
                <Typography variant="body2" sx={{ color: theme.colors.secondary,fontFamily:'-moz-initial' }}>
                  9123129847
                </Typography>
              </Box>
              <Box onClick={handleCall2} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mr: 2 }}>
                <PhoneIcon sx={{ color: theme.colors.primary, mr: 1 }} />
                <Typography variant="body2" sx={{ color: theme.colors.secondary,fontFamily:'-moz-initial' }}>
                9470679846
                </Typography>
              </Box>
              <Button
                variant="contained"
                onClick={handleGetQuote}
                sx={{ backgroundColor: theme.colors.secondary, color: theme.colors.background, textTransform: 'uppercase' }}
              >
                Get Moving Quote
              </Button>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: theme.colors.secondary }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ '& .MuiDrawer-paper': { width: 250 } }}
      >
        <Box sx={{ padding: '16px', textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '50px' }} />
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => handleNavigation(item.path)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem button onClick={handleCall1}>
            <PhoneIcon sx={{ color: theme.colors.primary, mr: 1 }} />
            <ListItemText  primary="9123129847" />
          </ListItem>
          <ListItem sx={{fontFamily:'-moz-initial'}} button onClick={handleCall2}>
            <PhoneIcon sx={{ color: theme.colors.primary, mr: 1 }} />
            <ListItemText  primary="9470679846" />
          </ListItem>
          <ListItem button onClick={handleGetQuote}>
            <Button
              variant="contained"
              sx={{ backgroundColor: theme.colors.secondary, color: theme.colors.background, width: '100%' }}
            >
              Get Moving Quote
            </Button>
          </ListItem>
        </List>
      </Drawer>


       {/* Floating action buttons */}
      
       <Fab
       color="primary"
        sx={{
          position: "fixed",
          bottom: 80,
          right: 16,
          bgcolor: "#25D366",
        }}
        href="https://wa.me/9123129847"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon sx={{fontSize:"40px"}} />
      </Fab>
    </>
  );
};

export default TopAppBar;
