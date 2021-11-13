import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [adminData, setAdminData] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Admin Make Success')
                reset()
            })
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <form style={{ width: '245px' }} onSubmit={handleSubmit(onSubmit)} className="order_form">
                <Typography sx={{ my: 2, color: '#5e5e5e', fontFamily: 'Montserrat', fontWeight: 'medium' }} variant="h5">
                    Make a Admin by Email
                </Typography>
                <input placeholder="Enter Your Admin Email" {...register("email")} />
                <input style={{ background: '#1976d2 !importent' }} className="btn_regular" type="submit" value="Make Admin" />
            </form>
        </Box>
    );
};

export default MakeAdmin;