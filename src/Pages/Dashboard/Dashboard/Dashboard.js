import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PaymentIcon from '@mui/icons-material/Payment';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
import Home from '../../Home/Home/Home';
import useAuth from '../../../hooks/useAuth';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import AddNewMotorcycle from '../AddNewMotorcycle/AddNewMotorcycle';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const drawerWidth = 240;


function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const { logOut, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Toolbar />
            <Divider />
            <NavLink className="dash_btn" to={`${url}`}><Button sx={{
                textAlign: 'left', display: 'block', color: 'blue',
            }} > Dashboard</Button></NavLink>

            <NavLink className="dash_btn" to="/Home"><Button sx={{ textAlign: 'left', display: 'block', color: 'blue' }}> Home</Button></NavLink>

            <NavLink className="dash_btn" to="/bike"><Button sx={{ textAlign: 'left', display: 'block', color: 'blue' }}>Bikes</Button></NavLink>

            <NavLink className="dash_btn" to={`${path}/pay`}><Button sx={{ textAlign: 'left', display: 'block', color: 'blue' }}>Pay</Button></NavLink>

            <NavLink className="dash_btn" to={`${path}/myorder`}><Button sx={{ textAlign: 'left', display: 'block', color: 'blue' }}>My Orders</Button></NavLink>


            <Button className="dash_btn" sx={{ color: '#ffffff', mt: 1, background: 'red', borderRadius: 0 }} variant="contained" onClick={logOut}>LogOut</Button>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <Home></Home>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addbike`}>
                        <AddNewMotorcycle></AddNewMotorcycle>
                    </Route>
                    <Route path={`${path}/manage-orders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    {/* <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute> */}
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
