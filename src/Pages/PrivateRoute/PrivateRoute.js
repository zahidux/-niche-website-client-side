import { CircularProgress, Stack } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <Stack sx={{ color: 'grey.700', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
            </Stack>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;