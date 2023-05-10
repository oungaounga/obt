/** @format */

const apione = 'https://api.comparatrip.eu/cities/autocomplete/?q=par'
const apitwo = 'https://api.comparatrip.eu/cities/popular/5'
const apithree = 'https://api.comparatrip.eu/cities/popular/from/paris/5'

export const fetchCities = () => {
  console.clear()
  console.log('exec fetch citites')
  fetch(apithree)
    .then((result) => result.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.log('error')
    })
}
