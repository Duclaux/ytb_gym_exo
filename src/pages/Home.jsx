import React, { useState } from 'react'
import { Box, } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercices, setExercices] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercices={setExercices} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercices={setExercices} bodyPart={bodyPart} exercices={exercices}/>
    </Box>
  )
}

export default Home