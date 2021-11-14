import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const url = `https://tranquil-earth-61736.herokuapp.com/userOrder/?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    console.log(myOrders)

    const handleOrderDelete = orderId => {
        const proceed = window.confirm('Are you sure, You want to Cancel this Order?')
        if (proceed) {
            const url = `https://tranquil-earth-61736.herokuapp.com/order/${orderId}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Cancel Successfully')
                        const remainingOrder = myOrders.filter(order => order._id != orderId)
                        setMyOrders(remainingOrder)
                    }
                })
        }

    }
    return (
        <div>
            <Container>
                <Box>
                    <Grid container spacing={2}>
                        {
                            myOrders.map(myOrder => (
                                <Box
                                    key={myOrder._id}
                                >
                                    <Grid item xs={12} md={9}>
                                        <Container>
                                            <Box sx={{ border: '1px solid red', mb: 2 }}>
                                                <Grid sx={{ alignItems: 'center' }} container spacing={2}>
                                                    <Grid item xs={12} md={4}>
                                                        <img style={{ width: '100%', padding: '8px' }} src={myOrder.img} />
                                                    </Grid>
                                                    <Grid item xs={12} md={8}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                                                <Typography sx={{ textAlign: 'left', color: '#5e5e5e', fontFamily: 'Montserrat', fontSize: '25px' }} variant="h6">
                                                                    {myOrder.name}
                                                                </Typography>
                                                                <Typography sx={{ textAlign: 'left', color: 'black', fontFamily: 'Montserrat', fontSize: '25px', fontWeight: 'bold' }} variant="h6">
                                                                    Price: <span style={{ color: 'red' }}>${myOrder.price}</span>
                                                                </Typography>
                                                            </Box>
                                                            <Box sx={{ mx: 1 }}>
                                                                <Button onClick={() => handleOrderDelete(myOrder._id)} className="btn_regular" sx={{ height: '100%', fontFamily: 'Montserrat', fontSize: '16px' }} variant="contained">cancel</Button>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Container>
                                    </Grid>
                                </Box>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default MyOrders;