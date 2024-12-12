import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    MenuItem,
    Button,
    FormControl,
    Select,
    InputLabel,
} from '@mui/material';
import theme from '../../theme'; // Import custom theme

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
        try {
            // Save data to localStorage
            localStorage.setItem('movingQuoteFormData', JSON.stringify(formData));
            alert('Form data saved to localStorage successfully!');
            // Clear form fields after submission
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
        } catch (error) {
            console.error('Error saving data to localStorage:', error);
            alert('An error occurred while saving data.');
        }
    };

    return (
        <Grid container sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:"f5f5f5"
        }}>
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: { xs: '20px', md: '20px' },
                    height: '100vh',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 500,
                        backgroundColor: '#ffffff',
                        borderRadius: 2,
                        p: 4,
                        boxShadow: '0 2px 10px #565758',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: theme.colors.background,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        Get a Free Moving Quote
                    </Typography>

                    {/* Form Fields */}
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'grid',
                            gap: 2,
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    variant="outlined"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                    InputLabelProps={{
                                        style: { fontSize: '16px', color: '#000' },
                                    }}
                                    InputProps={{
                                        style: {
                                            backgroundColor: '#f2f7fc',
                                            height: '50px',
                                            fontSize: '14px',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="E-Mail"
                                    name="email"
                                    variant="outlined"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                    InputLabelProps={{
                                        style: { fontSize: '16px', color: '#000' },
                                    }}
                                    InputProps={{
                                        style: {
                                            backgroundColor: '#f2f7fc',
                                            height: '50px',
                                            fontSize: '14px',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <TextField
                            label="Mobile No"
                            name="mobile"
                            variant="outlined"
                            placeholder="Enter your mobile number"
                            value={formData.mobile}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '16px', color: '#000' },
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: '#f2f7fc',
                                    height: '50px',
                                    fontSize: '14px',
                                },
                            }}
                        />

                        <TextField
                            label="Date of Relocation"
                            name="relocationDate"
                            type="date"
                            value={formData.relocationDate}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                                style: { fontSize: '16px', color: '#000' },
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: '#f2f7fc',
                                    height: '50px',
                                    fontSize: '14px',
                                },
                            }}
                        />

                        {/* Move Type and Move Size */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <InputLabel sx={{ fontSize: '16px', color: '#000' }}>
                                        Move Type
                                    </InputLabel>
                                    <Select
                                        name="moveType"
                                        value={formData.moveType}
                                        onChange={handleChange}
                                        sx={{ backgroundColor: '#f2f7fc', height: '50px', fontSize: '14px' }}
                                    >
                                        <MenuItem value="house">House</MenuItem>
                                        <MenuItem value="office">Office</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <InputLabel sx={{ fontSize: '16px', color: '#000' }}>
                                        Move Size
                                    </InputLabel>
                                    <Select
                                        name="moveSize"
                                        value={formData.moveSize}
                                        onChange={handleChange}
                                        sx={{ backgroundColor: '#f2f7fc', height: '50px', fontSize: '14px' }}
                                    >
                                        <MenuItem value="small">Small</MenuItem>
                                        <MenuItem value="medium">Medium</MenuItem>
                                        <MenuItem value="large">Large</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <TextField
                            label="Relocation From"
                            name="relocationFrom"
                            variant="outlined"
                            placeholder="Enter location"
                            value={formData.relocationFrom}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '16px', color: '#000' },
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: '#f2f7fc',
                                    height: '50px',
                                    fontSize: '14px',
                                },
                            }}
                        />

                        <TextField
                            label="Relocation To"
                            name="relocationTo"
                            variant="outlined"
                            placeholder="Enter destination"
                            value={formData.relocationTo}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '16px', color: '#000' },
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: '#f2f7fc',
                                    height: '50px',
                                    fontSize: '14px',
                                },
                            }}
                        />

                        <TextField
                            label="Please mention all items you would like to move"
                            name="description"
                            variant="outlined"
                            placeholder="Enter description"
                            multiline
                            rows={1}
                            value={formData.description}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '16px', color: '#000' },
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: '#f2f7fc',
                                    height: '50px',
                                    fontSize: '14px',
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: theme.colors.secondary,
                                color: theme.colors.background,
                                fontWeight: 'bold',
                                padding: '12px',
                                borderRadius: 2,
                                '&:hover': { backgroundColor: '#008cc6' },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default MovingQuoteForm;
