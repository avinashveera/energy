import React from 'react';
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
    return (
        <Grid container sx={{ 
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
   

            {/* Right Column - Form */}
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
                        backgroundColor: '#546f87',
                        borderRadius: 2,
                        p: 4,
                        boxShadow: '0 2px 10px #565758;',
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
                        sx={{
                            display: 'grid',
                            gap: 2,
                        }}
                    >
                        {/* Name and Email in the same row on larger screens */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    placeholder="Enter your name"
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            backgroundColor: '#ffffff',
                                            height: '50px', // Set height to 50px
                                            border: 'none', // Remove border
                                            fontSize: '12px', // Smaller font size
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { 
                                            color: theme.colors.textSecondary, 
                                            fontSize: '12px' // Smaller label font size
                                        },
                                    }}
                                   
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            fontSize: '12px', // Set font size to small
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="E-Mail"
                                    variant="outlined"
                                    placeholder="Enter your email"
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            backgroundColor: '#ffffff',
                                            height: '50px', // Set height to 50px
                                            border: 'none', // Remove border
                                            fontSize: '12px', // Smaller font size
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { 
                                            color: theme.colors.textSecondary, 
                                            fontSize: '12px' // Smaller label font size
                                        },
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            fontSize: '12px', // Set font size to small
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>

                        {/* Mobile No */}
                        <TextField
                            label="Mobile No"
                            variant="outlined"
                            placeholder="Enter your mobile number"
                            fullWidth
                            InputProps={{
                                style: {
                                    backgroundColor: '#ffffff',
                                    height: '50px', // Set height to 50px
                                    border: 'none', // Remove border
                                    fontSize: '12px', // Smaller font size
                                },
                            }}
                            InputLabelProps={{
                                style: { 
                                    color: theme.colors.textSecondary, 
                                    fontSize: '12px' // Smaller label font size
                                },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontSize: '12px', // Set font size to small
                                },
                            }}
                        />

                        {/* Date of Relocation */}
                        <TextField
                            label="Date of Relocation"
                            type="date"
                            fullWidth
                            InputProps={{
                                style: {
                                    backgroundColor: '#ffffff',
                                    height: '50px', // Set height to 50px
                                    border: 'none', // Remove border
                                    fontSize: '12px', // Smaller font size
                                },
                            }}
                            InputLabelProps={{
                                style: { 
                                    color: theme.colors.textSecondary, 
                                    fontSize: '12px' // Smaller label font size
                                },
                                
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontSize: '12px', // Set font size to small
                                },
                            }}
                        />

                        {/* Move Type and Move Size */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <InputLabel sx={{ color: theme.colors.textSecondary, fontSize: '12px' }}>
                                        Move Type
                                    </InputLabel>
                                    <Select
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            height: '50px', // Set height to 50px
                                            border: 'none', // Remove border
                                            fontSize: '12px', // Smaller font size
                                        }}
                                    >
                                        <MenuItem value="house">House</MenuItem>
                                        <MenuItem value="office">Office</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <InputLabel sx={{ color: theme.colors.textSecondary, fontSize: '12px' }}>
                                        Move Size
                                    </InputLabel>
                                    <Select
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            height: '50px', // Set height to 50px
                                            border: 'none', // Remove border
                                            fontSize: '12px', // Smaller font size
                                        }}
                                    >
                                        <MenuItem value="small">Small</MenuItem>
                                        <MenuItem value="medium">Medium</MenuItem>
                                        <MenuItem value="large">Large</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {/* Relocation From and To */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Relocation From"
                                    variant="outlined"
                                    placeholder="Enter location"
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            backgroundColor: '#ffffff',
                                            height: '50px', // Set height to 50px
                                            border: 'none', // Remove border
                                            fontSize: '12px', // Smaller font size
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { 
                                            color: theme.colors.textSecondary, 
                                            fontSize: '12px' // Smaller label font size
                                        },
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            fontSize: '12px', // Set font size to small
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Relocation To"
                                    variant="outlined"
                                    placeholder="Enter destination"
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            backgroundColor: '#ffffff',
                                            height: '50px', // Set height to 50px
                                            border: 'none', // Remove border
                                            fontSize: '12px', // Smaller font size
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { 
                                            color: theme.colors.textSecondary, 
                                            fontSize: '12px' // Smaller label font size
                                        },
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            fontSize: '12px', // Set font size to small
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>

                        {/* Description */}
                        <TextField
                            label="Please mention all items you would like to move"
                            variant="outlined"
                            placeholder="Enter description"
                            multiline
                            rows={1} // Minimized height by reducing rows
                            fullWidth
                            InputProps={{
                                style: {
                                    backgroundColor: '#ffffff',
                                    height: '50px', // Set height to 50px
                                    border: 'none', // Remove border
                                    fontSize: '12px', // Smaller font size
                                },
                            }}
                            InputLabelProps={{
                                style: { 
                                    color: theme.colors.textSecondary, 
                                    fontSize: '12px' // Smaller label font size
                                },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontSize: '12px', // Set font size to small
                                    color: 'grey', // Set placeholder color to grey
                                },
                            }}
                        />

                        {/* Submit Button */}
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: theme.colors.secondary,
                                color: theme.colors.background,
                                fontWeight: 'bold',
                                padding: '12px',
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: '#008cc6',
                                },
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
