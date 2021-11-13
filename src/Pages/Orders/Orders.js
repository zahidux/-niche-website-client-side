import { CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';
import Order from '../Order/Order';

const Orders = () => {
    const { isLoading } = useAuth();
    const { bikeId } = useParams();
    const [bike, setBike] = useState({});


    const url = `http://localhost:5000/motorcycle/${bikeId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])
    console.log(bikeId);

    if (isLoading) {
        return (
            <Stack sx={{ color: 'grey.700', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
            </Stack>
        )
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Box sx={{ mt: 8 }}>
                    <Order
                        bike={bike}
                    ></Order>
                </Box>
            </Container>
            <h1>Orders comming</h1>
            <h1>Order ID: {bikeId}</h1>
            <Footer></Footer>
        </div >
    );
};

export default Orders;