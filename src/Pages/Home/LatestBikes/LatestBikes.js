import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LatestBike from '../LatestBike/LatestBike';

const LatestBikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-earth-61736.herokuapp.com/motorcycle')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <Container>
            <Box sx={{ padding: '70px 0' }}>
                <Typography variant="h2" sx={{ fontWeight: 'medium' }}>
                    Upcoming Motorcycle
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={6}>
                    {
                        bikes.slice(0, 6).map(bike => <LatestBike
                            key={bike.id}
                            bike={bike}
                        ></LatestBike>)
                    }
                </Grid>
                <NavLink style={{ textDecoration: 'none' }} to="/bike"><Button sx={{ mt: 8 }} variant="contained">More Motorcycle</Button></NavLink>
            </Box>
        </Container>
    );
};

export default LatestBikes;