import React, { useEffect, useState } from 'react'
import { 
  Box,
  Stack,
  Button,
  TextField,
  Typography
} from '@mui/material'

import { exercisesOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({ setExercices, bodyPart, setBodyPart }) => {
  const [search, setsearch] = useState('')
  // const [exercices, setExercices] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData()
  }, [])
  

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)

      const searchedExercises = exercisesData.filter(
        (exercice) => exercice.name.toLowerCase().includes(search) 
        || exercice.target.toLowerCase().includes(search)
        || exercice.equipment.toLowerCase().includes(search)
        || exercice.bodyPart.toLowerCase().includes(search)
      )

      setsearch('')
      setExercices(searchedExercises)
    }
  }

  return (
    <Stack alignItems='center' justifyContent='center' p='20px' mt='37px'>
      <Typography
        fontWeight='700'
        sx={{
          fontSize:{ lg:'44px', xs:'30px'}
        }}
        mb='50px'
        textAlign='center'
      >
        Awesome Exercises You <br/> Should Know
      </Typography>

      <Box position='relative' mb='72px'>
        <TextField
          height='76px'
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
          sx={{
            input: { fontWeight:'700px', border:'none', borderRadius:'4px'},
            width: { lg:'800px', xs:'350px'},
            backgroundColor: '#fff',
            borderRadius:'4px'
          }}
        />

        <Button className='searc-btn'
          sx={{
            bgcolor:'#ff2625',
            color:'#fff',
            textTransform:'none',
            width: { lg:'175px', xs:'80px'},
            fontSize: { lg:'20px', xs:'14px' },
            height:'56px',
            position:'absolute',
            right:'0'
          }}

          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width:'100%',
          p:'20px'
        }}
      >
        <HorizontalScrollBar data = {bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises