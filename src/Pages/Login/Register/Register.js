import { Alert, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const Register = () => {
    // const { user, registerUser, authError } = useAuth();
    // const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not Match');
            return
        }
        // registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
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
                            </Box>
                            {/* {
                                user?.email && <Alert severity="success">Register Success</Alert>
                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            } */}
                        </Paper>
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <img style={{ width: '90%' }} src="https://i.ibb.co/9NVNhf4/login.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;