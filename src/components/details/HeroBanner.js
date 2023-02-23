import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import BannerImage from '../../assets/image/banner.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{mt:{ lg:"212px",xs:"70px"},ml:{sm:"50px"}}} position="static" px="20px" >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px" >
            Fitness club
        </Typography>
        <Typography 
          fontWeight="700" fontSize={{lg:"44px",xs:"40px"}}
          >Sweat smile <br/>and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="33px" mb={3} >
            Check out most effective exercises
        </Typography>
        <Button variant="contained" color="error">Explore Exercises</Button>
        <Card >
          <CardMedia image={BannerImage} title="Banner" 
          sx={{
            display:{
            xs: "none",sm:"block"
            },
            width: {md:"400px",lg:"800px"},
            position: "absolute",
            top: "20px",
            right: "0",
            height: {sm:"400px",lg:"580px"},
          }} />
        </Card>
    </Box>
  )
}

export default HeroBanner