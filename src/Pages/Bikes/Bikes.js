import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    console.log(bikes);

    useEffect(() => {
        fetch('https://tranquil-earth-61736.herokuapp.com/motorcycle')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <>
            <Header></Header>
            <Container sx={{ pb: 6 }}>
                <Box sx={{ padding: '70px 0' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'medium' }}>
                        Our Motorcycle
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        {
                            bikes.map(bike => <Bike
                                key={bike.id}
                                bike={bike}
                            ></Bike>)
                        }
                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>

        </>
    );
};

export default Bikes;