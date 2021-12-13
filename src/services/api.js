import axios from "axios";

const keyWeather = '3c71237f522756eada76c3f35255df70';

export async function getCityData(city) {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/find`, {
    params: {
      q: city,
      units:'metric',
      lang: 'pt_br',
      appid: keyWeather
    }
  })
  return response.data?.list[0] || 'error'
}

export async function getPlaylist(playlist) {
    const response = await axios.get(`https://shazam-core.p.rapidapi.com/v1/charts/genre-world`, {
      params: {genre_code: playlist, limit: '20'},
      headers: {
        'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
        'x-rapidapi-key': '7abb662075msh4ea11086b528ad8p10a1b8jsn83dc1d48996f'
      }
    })
    return response.data
    
}
