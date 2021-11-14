import { Alert, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const { user, error, registerUser } = useAuth();
    const history = useHistory();
    const [registerData, setRegisterData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)
    }
    const handleLoginSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Password did not Match');
            return
        }
        registerUser(registerData.name, registerData.email, registerData.password, history)
        e.preventDefault();
    }

    return (
        <div style={{ background: 'url(https://i.ibb.co/XpwNh7N/1.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <Header></Header>
            <Container>
                <Grid sx={{ py: 8 }} container spacing={2}>
                    <Grid item sx={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Paper elevation={24} sx={{ width: '380px' }} >
                            <Box sx={{ p: 7 }}>
                                <Typography sx={{ mb: 4 }} variant="h5">Please Register</Typography>
                                <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <TextField
                                        label="Your Name"
                                        id="standard-size-small"
                                        variant="standard"
                                        name="name"
                                        type="text"
                                        onBlur={handleOnBlur}
                                    />
                                    <TextField
                                        label="Your Email"
                                        id="standard-size-small"
                                        variant="standard"
                                        name="email"
                                        type="email"
                                        onBlur={handleOnBlur}
                                    />
                                    <TextField
                                        label="Password"
                                        id="standard-size-small"
                                        variant="standard"
                                        sx={{ mt: 2 }}
                                        name="password"
                                        onBlur={handleOnBlur}
                                        type="password"
                                    />
                                    <Typography sx={{ textAlign: 'left', mt: 1 }} variant="body2">Password should be 6 cherecter</Typography>
                                    <TextField
                                        label="Re-enter Your Password"
                                        id="standard-size-small"
                                        variant="standard"
                                        sx={{ mt: 2, mb: 5 }}
                                        name="password2"
                                        onBlur={handleOnBlur}
                                        type="password"
                                    />
                                    <Button sx={{ background: 'cyan', borderRadius: 0 }} type="submit" variant="contained">Sign in</Button>
                                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                                        <Button sx={{ mt: 2, textTransform: 'capitalize' }} variant="text">Already Register? Please Login</Button>
                                    </NavLink>
                                </form>
                                <Box>
                                    {
                                        user?.email && <Alert sx={{ justifyContent: 'center' }} severity="success">Register Success</Alert>
                                    }

                                    {
                                        error && <Alert sx={{ justifyContent: 'center' }} severity="error">{error}</Alert>
                                    }
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item sx={12} md={6}>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;