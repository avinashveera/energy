import React from 'react';
import { Container, Grid, Typography, Box, TextField, Button, Paper } from '@mui/material';
import theme from '../../theme';

const ContactUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: theme.colors.primary }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Information Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 'bold', color: theme.colors.secondary }}
            >
              Maa Geeta Packers & Movers
            </Typography>
            <Typography variant="body1" gutterBottom>
              Address: Saristabad Purvi Tola Bypass Road, 70 Feet, Patna 800002
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: 9470679846, 9123129847
            </Typography>
          </Paper>
        </Grid>

        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 'bold', color: theme.colors.secondary }}
            >
              Get in Touch
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: '100%' }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
