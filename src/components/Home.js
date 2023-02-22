import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from './details/HeroBanner';
import SearchExercise from './details/SearchExercise';
import Exercises from './details/Exercises';
const Home = () => {
  return (
    <Box>
        <HeroBanner/>
        <SearchExercise/>
        <Exercises/>
    </Box>
  )
}

export default Home