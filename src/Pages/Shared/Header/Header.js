import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as NavLink } from "react-router-dom";
import { Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            <Button sx={{ color: '#ffffff', textTransform: 'capitalize', fontSize: '20px', background: '#1565c0' }} variant="contained" onClick={logOut}>Yamaha</Button>
                        </Typography>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/bike"><Button color="inherit">Bikes</Button></NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                        {
                            user?.email ? <Button sx={{ color: '#f5bb17eb' }} variant="contained" onClick={logOut}>LogOut</Button> : <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;