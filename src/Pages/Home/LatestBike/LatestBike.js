import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const LatestBike = ({ bike }) => {
    const { _id, name, description, img, price } = bike;
    const url = `/order/${_id}`;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={16} sx={{ padding: 4, border: '1px solid #bdbdbd', borderRadius: 0 }}>
                <img style={{ width: '100%' }} src={img} alt="" />
                <Typography sx={{ textAlign: 'left', mt: 2, color: '#5e5e5e', fontFamily: 'Montserrat' }} variant="h6">
                    {name}
                </Typography>
                <Typography sx={{ textAlign: 'left', my: 1, fontFamily: 'Montserrat' }} variant="body2">
                    {description.slice(0, 100)}...
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 5 }}>
                    <Typography sx={{ textAlign: 'left', fontWeight: 'medium' }} variant="h5">
                        Price: <span style={{ color: 'red' }}>${price}</span>
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to={url}><Button className="btn_regular">Buy Now</Button></NavLink>
                </Box>
            </Paper>
        </Grid>
    );
};

export default LatestBike;