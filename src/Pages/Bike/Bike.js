import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Bike = ({ bike }) => {
    const { _id, name, description, img, price } = bike;
    const url = `/order/${_id}`;
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} sx={{ padding: 2, border: '1px solid #bdbdbd', borderRadius: 0 }}>
                <img style={{ width: '100%' }} src={img} alt="" />
                <Typography sx={{ textAlign: 'left', mt: 2, color: '#5e5e5e', fontFamily: 'Montserrat', fontSize: '17px' }} variant="h6">
                    {name}
                </Typography>
                <Typography sx={{ textAlign: 'left', my: 1, fontFamily: 'Montserrat' }} variant="body2">
                    {description.slice(0, 100)}...
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                    <Typography sx={{ textAlign: 'left', fontWeight: 'medium' }} variant="h6">
                        Price: <span style={{ color: 'red' }}>${price}</span>
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to={url}><Button className="btn_regular">Buy Now</Button></NavLink>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Bike;