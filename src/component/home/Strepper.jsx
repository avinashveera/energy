import React from 'react';
import { Box, Grid, Typography, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { Assignment, CompareArrows, HomeWork, DoneAll } from '@mui/icons-material';
import theme from '../../theme'; // Import the theme

const steps = [
    {
        label: 'Share Your Relocation Details',
        description: 'Submit your shifting needs with us via simple online form.',
        icon: <Assignment />,
    },
    {
        label: 'Get 3 References of Movers',
        description: 'Get free moving quotes from 3 top packers and movers in few minutes.',
        icon: <CompareArrows />,
    },
    {
        label: 'Plan a pre-move survey',
        description: 'Movers will provide accurate cost estimates based on pre-move survey.',
        icon: <HomeWork />,
    },
    {
        label: 'Compare & Hire',
        description: 'Compare charges of different movers to hire the best one for your move.',
        icon: <DoneAll />,
    },
];

const ModernStepper = () => {
    return (
        <Box sx={{ padding: { xs: '20px', md: '40px' } }}>
            <Grid
                container
                spacing={4}
                direction={{ xs: 'column', md: 'row' }}
                alignItems="center"
            >
                {/* Left Section - Heading and Text */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        mb: { xs: 4, md: 0 }, // Add bottom margin on mobile
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: theme.colors.primary,
                            fontWeight: 'bold',
                            mb: 3,
                            textTransform: 'uppercase',
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        How it Works
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.colors.textSecondary,
                            mb: 6,
                            fontSize: { xs: '14px', md: '16px' },
                            maxWidth: '600px',
                            margin: { xs: '0 auto', md: '0' },
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        The best relocation experience awaits you at Maa Geeta Packers & Movers You can
                        sit back and relax while our moving companies will complete your move
                        flawlessly.
                    </Typography>
                </Grid>

                {/* Right Section - Stepper */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        mt: { xs: 2, md: 0 }, // Add top margin on mobile
                    }}
                >
                    <Stepper
                        orientation="vertical"
                        sx={{
                            '& .MuiStep-root': {
                                marginBottom: '24px',
                            },
                            '& .MuiStepLabel-label': {
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: theme.colors.textPrimary,
                            },
                            '& .MuiStepContent-root': {
                                marginLeft: '32px',
                                paddingLeft: '24px',
                                borderLeft: `2px solid ${theme.colors.secondary}`,
                            },
                        }}
                    >
                        {steps.map((step, index) => (
                            <Step key={index} active={true}>
                                <StepLabel
                                    StepIconComponent={() => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '40px',
                                                height: '40px',
                                                backgroundColor: theme.colors.secondary,
                                                color: theme.colors.background,
                                                borderRadius: '50%',
                                                fontSize: '20px',
                                            }}
                                        >
                                            {step.icon}
                                        </Box>
                                    )}
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            color: theme.colors.textSecondary,
                                        }}
                                    >
                                        {step.description}
                                    </Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ModernStepper;
