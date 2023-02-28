import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import { useEffect,useState } from 'react';
import { ExerciseOptions, FetchData } from '../../utils/FetchData';
import HorizontalScroll from './Horizontal';
const SearchExercise = () => {
  const [search,setSearch] = useState('');
  const [exercises,setExercises] = useState([]);
  const [bodyParts,setBodyParts] = useState([]);
  useEffect(() => {
    const FetchExercisesData = async () => {
        const bodyPartsData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',ExerciseOptions)
      setBodyParts(['all',...bodyPartsData])}
      FetchExercisesData();
  },[])
  const SearchHandler = async () =>{
    if (search) {
      const exerciseData = await FetchData(
      'https://exercisedb.p.rapidapi.com/exercises/',ExerciseOptions)
      const searchExercises = exerciseData.filter(
        (exercise) => exercise.name.toLocaleLowerCase().includes(search)
        || exercise.target.toLocaleLowerCase().includes(search)
        || exercise.equipment.toLocaleLowerCase().includes(search)
        || exercise.bodyPart.toLocaleLowerCase().includes(search) 
      );
      setSearch('');
      setExercises(searchExercises);
    }
  }
  return (
    <Stack alignItems="center" justifyContent="center" mt="60px">
      <Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"30px"}}}
      mb="50px" textAlign="center"
      >Awesome Exercises For You</Typography>
     <Box position="relative" mb="72px">
       <TextField
        sx={{
          input:{
          fontWeight:'700',
          border:'none',
          borderRadius:'4px'
        },
          width:{lg:'1170px',xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
        }}
        height="76px"
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}
        placeholder="Search your Exercise"
        type="text"/>
        <Button variant="outline"
          sx={{
            bgcolor:'#FF2625',
            color:'#fff',
            textTransform:'none',
            width:{lg:'176px',xs:'80px'},
            fontSize:{lg:'20px',xs:'14px'},
            height:'56px',
            position:'absolute',
            right:'0'
          }}
          onClick={SearchHandler()}
        >SEARCH</Button>
      </Box>
      <Box sx={{position:'relative',width:"100%",p:'20px'}}>
        <HorizontalScroll data={bodyParts} />
      </Box>
    </Stack>
  )
}

export default SearchExercise