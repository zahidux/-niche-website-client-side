import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SingleNews = ({ singleNews }) => {
    const { name, date, img } = singleNews;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={{ border: '1px solid red', borderRadius: 0 }}>
                <img style={{ width: '100%' }} src={img} alt="" />
                <Box sx={{ p: 2 }}>
                    <Typography sx={{ textAlign: 'left', my: 1, fontFamily: 'Montserrat' }} variant="body2">
                        {date}
                    </Typography>
                    <Typography sx={{ textAlign: 'left', mt: 2, color: '#5e5e5e', fontFamily: 'Montserrat' }} variant="h6">
                        {name}
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default SingleNews;