import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import { useEffect,useState } from 'react';
const SearchExercise = () => {
  const [search,setSearch] = useState('');
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
        >SEARCH</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercise