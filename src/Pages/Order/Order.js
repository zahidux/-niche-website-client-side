import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import axios from 'axios';
import React from 'react';
import './Order.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Order = ({ bike }) => {
    const { name, img, price, description } = bike;
    const { user } = useAuth();
    const newBikeData = { name, img, price };

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/dashboard/myorder';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newData = { ...newBikeData, ...data }
        console.log(newData);
        axios.post('http://localhost:5000/userOrder', newData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    history.push(redirect_uri)
                }
            });
    };
    console.log(bike);

    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
                <Paper elevation={10} sx={{ padding: 2, border: '1px solid #bdbdbd', borderRadius: 0 }}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                    <Box sx={{ px: 1 }}>
                        <Typography sx={{ textAlign: 'left', mt: 2, color: '#5e5e5e', fontFamily: 'Montserrat', fontSize: '25px' }} variant="h6">
                            {name}
                        </Typography>
                        <Typography sx={{ textAlign: 'left', my: 1, fontFamily: 'Montserrat', lineHeight: '1.6' }} variant="body2">
                            {description}
                        </Typography>
                        <Typography sx={{ textAlign: 'left', fontWeight: 'medium', mt: 2 }} variant="h5">
                            Price: <span style={{ color: 'red' }}>${price}</span>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={7}>
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)} className="order_form">
                        <Typography sx={{ textAlign: 'left', my: 2, color: '#5e5e5e', fontFamily: 'Montserrat', fontWeight: 'medium' }} variant="h5">
                            Shipping Information
                        </Typography>
                        <input defaultValue={user.displayName} {...register("userName")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input placeholder="Address" {...register("address")} />
                        <input placeholder="City" {...register("city")} />
                        <input placeholder="Phone Number" {...register("phone")} />
                        <input style={{ background: '#1976d2 !importent' }} className="btn_regular" type="submit" value="Prace An Order" />
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Order;