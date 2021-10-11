import axios from "axios";

const key = '3c71237f522756eada76c3f35255df70';

export async function getCityData(city) {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/find`, {
    params: {
      q: city,
      units:'metric',
      lang: 'pt_br',
      appid: key
    }
  })
  return response.data?.list[0] || null
}

export async function getPlaylist(playlist) {
  console.log(`https://deezerdevs-deezer.p.rapidapi.com/playlist/${playlist}`)
    const response = await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/playlist/${playlist}`, {
      headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '7abb662075msh4ea11086b528ad8p10a1b8jsn83dc1d48996f'
      }
    })
    return response.data
    
}
