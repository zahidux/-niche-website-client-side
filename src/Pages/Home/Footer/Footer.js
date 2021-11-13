import { Container, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
    return (
        <Box sx={{ background: '#e0e0e0', color: "#212121", padding: '50px 0 0' }}>
            <Container>
                <Box sx={{ textAlign: 'left' }}>
                    <Grid container spacing={6}>
                        {/* {Yamaha Motorcycle} */}
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600' }} variant="h4">
                                Yamaha Motorcycle
                            </Typography>
                            <Typography sx={{ textAlign: 'left', mt: 3, px: 1, fontFamily: 'Montserrat', fontWeight: 'medium' }} variant="body2">
                                <Typography sx={{ display: 'inline' }} ></Typography> Yamaha Motor is a Japanese manufacturer of motorcycles, marine products such as boats and outboard motors, and other motorized products. The company was established in 1955 upon separation from Yamaha Corporation.
                            </Typography>
                        </Grid>
                        {/* Customer Services */}
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600' }} variant="h4">
                                Customer Services
                            </Typography>
                            <Box>
                                <ul style={{ padding: '0 10px' }}>
                                    <li style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }}>Services Page</li>
                                    <li style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }}>World Wide Delivery</li>
                                    <li style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }}>Payment Methods Easy</li>
                                    <li style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }}>24 Hour Order </li>
                                </ul>
                            </Box>
                        </Grid>
                        {/* contact area */}
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600' }} variant="h4">
                                Contact With Us
                            </Typography>
                            <Box sx={{ textAlign: 'left', mt: 3, px: 1 }}>
                                <Typography sx={{ my: 2 }} variant="body2">
                                    4 Number Sector Uttora,
                                    <br />
                                    Dhaka, Bangladesh
                                </Typography>
                                <Typography variant="body2">
                                    Phone: 01945470999
                                    <br />
                                    Email: Yamaha@gmail.com
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <FacebookRoundedIcon />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <GoogleIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
            <Box sx={{ borderTop: '1px solid #424242', mt: 4, py: 3 }}>
                <Typography variant="body2">
                    Copyright © 2021 Yamaha Motorcycle
                </Typography>
            </Box>
        </Box >
    );
};

export default Footer;