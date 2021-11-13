import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    const handleOrderDelete = orderId => {
        const proceed = window.confirm('Are you sure, You want to Cancel this Order?')
        if (proceed) {
            const url = `http://localhost:5000/order/${orderId}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Cancel Successfully')
                        const remainingOrder = allOrders.filter(order => order._id != orderId)
                        setAllOrders(remainingOrder)
                    }
                })
        }

    }

    console.log(allOrders.length)

    return (
        <div>
            <Container>
                <Box>
                    <Grid container spacing={2}>
                        {
                            allOrders.map(order => (
                                <Box
                                    key={order._id}
                                >
                                    <Grid item xs={12} md={9}>
                                        <Container>
                                            <Box sx={{ border: '1px solid red', mb: 2 }}>
                                                <Grid sx={{ alignItems: 'center' }} container spacing={2}>
                                                    <Grid item xs={12} md={4}>
                                                        <img style={{ width: '100%', padding: '8px' }} src={order.img} />
                                                    </Grid>
                                                    <Grid item xs={12} md={8}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                                                <Typography sx={{ textAlign: 'left', color: '#5e5e5e', fontFamily: 'Montserrat', fontSize: '25px' }} variant="h6">
                                                                    {order.name}
                                                                </Typography>
                                                                <Typography sx={{ textAlign: 'left', color: 'black', fontFamily: 'Montserrat', fontSize: '25px', fontWeight: 'bold' }} variant="h6">
                                                                    Price: <span style={{ color: 'red' }}>${order.price}</span>
                                                                </Typography>
                                                            </Box>
                                                            <Box sx={{ mx: 1 }}>
                                                                <Button onClick={() => handleOrderDelete(order._id)} className="btn_regular" sx={{ height: '100%', fontFamily: 'Montserrat', fontSize: '16px' }} variant="contained">cancel</Button>
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

export default ManageAllOrders;