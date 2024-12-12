// src/components/Footer.js
import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email } from '@mui/icons-material';
import theme from '../theme'; // Import your custom theme
import logo from '../img/logo.png'

// Define footer sections and links
const menuLinks = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/about' },
  { label: 'Services', url: '/service' },
  { label: 'Gallery', url: '/gallery' },
  { label: 'Contact Us', url: '/contact' },

];

const servicesLinks = [
  { label: 'Packing Services', url: '/service' },
  { label: 'Moving Services', url: '/service' },
  { label: 'Storage Services', url: '/service' },
];

const Footer = () => {
 
  return (
    <Box sx={{ backgroundColor: theme.colors.secondary, color: theme.colors.background, padding: 4}}>
      <Grid container spacing={4}>
        {/* First Section - Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <img src={logo} alt="Maa Geeta Packers & Movers" style={{ width: '150px', marginBottom: '16px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Maa Geeta Packers & Movers</Typography>

            <Box component="footer" sx={{ py: 2, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Typography variant="body1">Service Hours - 24 Hours Available</Typography>
      </Box>

            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body2">Contact Us</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <IconButton color="inherit" onClick={() => window.location.href = 'tel:+919470679846'}>
                  <Phone />
                </IconButton>
                <Typography variant="body2" sx={{ ml: 1,fontFamily:'-moz-initial' }}>9470679846</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <IconButton color="inherit" onClick={() => window.location.href = 'tel:+919123129847'}>
                  <Phone />
                </IconButton>
                <Typography variant="body2" sx={{ ml: 1,fontFamily:'-moz-initial' }}>9123129847</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <IconButton color="inherit" onClick={() => window.location.href = 'maageetapackerandmovers@gmail.com'}>
                  <Email />
                </IconButton>
                <Typography variant="body2" sx={{ ml: 1 }}>maageetapackerandmovers@gmail.com</Typography>
              </Box>
              {/* <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
                <IconButton color="inherit" onClick={() => window.open('https://facebook.com', '_blank')}>
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" onClick={() => window.open('https://twitter.com', '_blank')}>
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" onClick={() => window.open('https://instagram.com', '_blank')}>
                  <Instagram />
                </IconButton>
                <IconButton color="inherit" onClick={() => window.open('https://linkedin.com', '_blank')}>
                  <LinkedIn />
                </IconButton>
              </Box> */}
            </Box>
          </Box>
        </Grid>

        {/* Second Section - Menu Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Menu</Typography>
          <Box sx={{ marginTop: 2 }}>
            {menuLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                color="inherit"
                sx={{ display: 'block', mb: 1, textDecoration: 'none' }} // Removed underline
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Third Section - Services Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Our Services</Typography>
          <Box sx={{ marginTop: 2 }}>
            {servicesLinks.map((service) => (
              <Link
                key={service.label}
                href={service.url}
                color="inherit"
                sx={{ display: 'block', mb: 1, textDecoration: 'none' }} // Removed underline
              >
                {service.label}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Fourth Section - Company Details and Location with Map */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Company Details</Typography>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
            Saristabad purvi tola bypass road 70feet Patna 800002
            </Typography>
            <Box sx={{ height: 200, width: '100%', position: 'relative' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.054863618164!2d85.11997351306545!3d25.58545286198456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59cf3d272b55%3A0x17d0be51d4a618b1!2sSaristabad%20purvi%20tola!5e0!3m2!1sen!2sin!4v1733974136666!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                key={0}
                title='location'
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Divider and Footer Bottom */}
      <Divider sx={{ my: 4, backgroundColor: theme.colors.textPrimary }} /> {/* Divider added */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="body2">© 2024 Maa Geeta Packers & Movers. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
