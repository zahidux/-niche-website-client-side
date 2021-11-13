import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import React from 'react';
import axios from 'axios';

const AddNewMotorcycle = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Bike added successfully');
                    reset()
                }
            });
    };

    return (
        <Container>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)} className="order_form">
                    <Typography sx={{ textAlign: 'left', my: 2, color: '#5e5e5e', fontFamily: 'Montserrat', fontWeight: 'medium' }} variant="h5">
                        Add A New Bike
                    </Typography>
                    <input placeholder="Bike Title" {...register("name", { required: true })} />
                    <textarea placeholder="Deascription" {...register("description", { required: true })} />
                    <input placeholder="Price" {...register("price", { required: true })} />
                    <input placeholder="Image URL" {...register("img", { required: true })} />
                    <input style={{ background: '#1976d2 !importent' }} className="btn_regular" type="submit" value="Add New Bike" />
                </form>
            </Box>
        </Container>
    );
};

export default AddNewMotorcycle;