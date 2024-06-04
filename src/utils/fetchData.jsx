export const exercisesOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Key': 'd389c62056mshca31b25026bf49fp167e33jsna211bcaee87e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}