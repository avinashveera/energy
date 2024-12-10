// src/components/TopAppBar.js
import React from 'react';
import { AppBar, Toolbar,  Typography, Box, Button, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import theme from '../theme'; // Import your custom theme

const TopAppBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen is mobile size


  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle call action
  const handleCall = () => {
    window.location.href = 'tel:+919123129847'; // Replace with actual phone number
  };

  // Handle cost calculator button action
  const handlegetQuote = () => {
    navigate('/getquote'); // Redirect to '/getOrder'
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.colors.primary, py: 1 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: isMobile ? 'row' : 'row', // Always in a row on all screen sizes
        }}
      >
        {/* Left Section: Phone Call */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: isMobile ? 0 : 0,
            cursor: 'pointer',
          }}
          onClick={handleCall}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              backgroundColor: theme.colors.secondary,
              color: theme.colors.background,
              borderRadius: '50%',
              animation: 'pulse 1.5s infinite',
              fontSize: '18px',
              mr: 2,
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.1)' },
                '100%': { transform: 'scale(1)' },
              },
            }}
          >
            <PhoneIcon sx={{ fontSize: 20 }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: theme.colors.background,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            9123129847
          </Typography>
        </Box>

        {/* Right Section: Cost Calculator Button */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="contained"
            onClick={handlegetQuote}
            sx={{
              backgroundColor: theme.colors.secondary,
              color: theme.colors.background,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              borderRadius: '20px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: theme.colors.secondary,
                transform: 'translateY(-2px)',
                boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.3)',
              },
              padding: '6px 16px',
              fontSize: '10px', // Reduce button size
            }}
          >
            Get Moving Quote
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
