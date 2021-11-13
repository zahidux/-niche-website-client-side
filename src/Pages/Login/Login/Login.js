import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const Login = () => {
    // const { loginUser, googleSignIn } = useAuth();
    const [loginData, setLoginData] = useState({});

    // const location = useLocation();
    // const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        // loginUser(loginData.email, loginData.password, location, history)
    }

    const handleGoogleSignIn = (location, history) => {
        // googleSignIn()
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Paper elevation={24} sx={{ width: '380px' }} >
                            <Box sx={{ p: 7 }}>
                                <Typography sx={{ mb: 4 }} variant="h5">Login</Typography>
                                <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <TextField
                                        label="User name"
                                        id="standard-size-small"
                                        variant="standard"
                                        name="email"
                                        type="email"
                                        onBlur={handleOnChange}
                                    />
                                    <TextField
                                        label="Password"
                                        id="standard-size-small"
                                        variant="standard"
                                        sx={{ mt: 2 }}
                                        name="password"
                                        onBlur={handleOnChange}
                                        type="password"
                                    />
                                    <Typography sx={{ textAlign: 'left', mt: 2, mb: 5 }} variant="body2">Forget your password?</Typography>
                                    <Button sx={{ background: 'cyan', borderRadius: 0 }} type="submit" variant="contained">Sign in</Button>
                                    <NavLink style={{ textDecoration: 'none' }} to="/register">
                                        <Button sx={{ mt: 2, textTransform: 'capitalize' }} variant="text">New user? Please Register</Button>
                                    </NavLink>
                                    <Button onClick={handleGoogleSignIn} sx={{ background: 'cyan', borderRadius: 0 }} type="submit" variant="contained">Sign in With Google</Button>
                                </form>
                            </Box>
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

export default Login;