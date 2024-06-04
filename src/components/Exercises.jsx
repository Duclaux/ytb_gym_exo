import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { Box, Stack, Typography } from '@mui/material'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercices, setExercises, bodypart }) => {
  console.log(exercices)
  return (
    <Box 
      id='exercices'
      sx={{mt:{ lg:'110px' }}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>Showing Results</Typography>

      <Stack
        direction='row'
        sx={{ gap: {lg:'110px', sx:'50px'}}}
        flexWrap='wrap'
        justifyContent='center'
      >
        {exercices.map((exercice, index) => (
          <ExerciseCard key={index} exercise={exercice}/>
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises