import React, { useState } from 'react';
import { Container, Grid, Typography, Box, TextField, Button, Paper } from '@mui/material';
import theme from '../../theme';
import emailjs from '@emailjs/browser'; // Use the correct import for browser

const ContactUs = () => {
  const [formData, setFormData] = useState({
    your_name: '',
    your_email: '',
    your_message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data to EmailJS
    emailjs.send('service_tsf3etk', 'template_9xkylgf', formData, '6rGbtSc5K0tcE0HFG')
      .then((response) => {
        console.log('Success:', response);
        // You can show a success message or clear the form here if needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // You can show an error message here if needed
      });
  };

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
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
                name="your_name"
                value={formData.your_name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                margin="normal"
                name="your_email"
                value={formData.your_email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                name="your_message"
                value={formData.your_message}
                onChange={handleChange}
              />
              <Button
                type="submit"
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
