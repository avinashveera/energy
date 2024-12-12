import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, MenuItem, Button, FormControl, Select, InputLabel } from '@mui/material';
import emailjs from '@emailjs/browser'; // Import EmailJS

const MovingQuoteForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        relocationDate: '',
        moveType: '',
        moveSize: '',
        relocationFrom: '',
        relocationTo: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS Configuration
        const serviceID = 'service_tsf3etk'; // Replace with your EmailJS Service ID
        const templateID = 'template_6qf9wa7'; // Replace with your EmailJS Template ID
        const publicKey = '6rGbtSc5K0tcE0HFG'; // Replace with your EmailJS Public Key

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    relocationDate: '',
                    moveType: '',
                    moveSize: '',
                    relocationFrom: '',
                    relocationTo: '',
                    description: '',
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('An error occurred while submitting the form.');
            });
    };

    return (
        <Grid container sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#f5f5f5" ,mt:5,mb:5}}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: { xs: '20px', md: '20px' }, height: '100vh' }}>
                <Box sx={{ width: '100%', maxWidth: 500, backgroundColor: '#ffffff', borderRadius: 2, p: 4, boxShadow: '0 2px 10px #565758' }}>
                    <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
                        Get a Free Moving Quote
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
                        {/* Add your form fields here */}
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Mobile No"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Date of Relocation"
                            name="relocationDate"
                            type="date"
                            value={formData.relocationDate}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        {/* Move Type Dropdown */}
                        <FormControl fullWidth>
                            <InputLabel id="move-type-label">Move Type</InputLabel>
                            <Select
                                labelId="move-type-label"
                                label="Move Type"
                                name="moveType"
                                value={formData.moveType}
                                onChange={handleChange}
                            >
                                <MenuItem value="Residential">Residential</MenuItem>
                                <MenuItem value="Commercial">Commercial</MenuItem>
                                <MenuItem value="Commercial">office</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Move Size Dropdown */}
                        <FormControl fullWidth>
                            <InputLabel id="move-size-label">Move Size</InputLabel>
                            <Select
                                labelId="move-size-label"
                                label="Move Size"
                                name="moveSize"
                                value={formData.moveSize}
                                onChange={handleChange}
                            >
                                <MenuItem value="Small">Small</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="Large">Large</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            label="Relocation From"
                            name="relocationFrom"
                            value={formData.relocationFrom}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Relocation To"
                            name="relocationTo"
                            value={formData.relocationTo}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                        />

                        {/* Submit Button */}
                        <Button type="submit" variant="contained" fullWidth>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default MovingQuoteForm;
