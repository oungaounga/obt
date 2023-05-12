/** @format */

const api = 'https://api.comparatrip.eu/cities/autocomplete/?q=par'
const cities: string[] = [
  'Londres, England, United Kingdom',
  'Saint-Jean-de-Luz, Nouvelle-Aquitaine, France',
  "Marseille, Provence-Alpes-Côte d'Azur, France",
  'Montpellier, Occitanie, France',
  'Capbreton - Hossegor, Nouvelle-Aquitaine, France',
]

type popularCity = {
  local_name: string
  nb_search: number
}
const popularCities: popularCity[] = []

export const testCities: string[] = [
  'londres',
  'lourdes',
  'saint-jean-de-luz',
  'saint-jean-de-vedas',
  'marseille',
  'malaga',
  'montpellier',
  'montmartre',
  'capberton',
  'capdagde',
]

//by should be only on first click
// so baso next todo is extract array from object and arrang it according to popularity

function patternMatch(item: string, input: string) {
  const regex = new RegExp(input, 'gi')
  return item.includes(input) ? item.includes(input) : regex.test(item)
}

export const matchCities = (input: string): string[] => {
  let result: string[] = []
  cities.forEach((item) => {
    patternMatch(item, input) ? result.push(item) : console.log('')
  })
  console.log('matching results :', result)
  return result
}

export const ac = (input: string, list: string[], from?: string): string[] => {
  let result: string[] = []
  list.forEach((item) => {
    patternMatch(item, input) ? result.push(item) : console.log('')
  })
  if (typeof from !== 'undefined') {
    result.splice(result.indexOf(from), 1)
  }
  return result
}

// /(?<londres>)\w+/gi
//this one works well for autocomplete

// const re: RegExp = /[lde]\w/gi

interface city {
  id: number
  unique_name: string
  local_name: string
  latitude: number
  longitude: number
  new_id: string
  city_id: 542
  gpuid: string
  nb_search: number
  popular: boolean
  iscity: boolean
}

export const makeCitiesArray = (array: city[]) => {
  array.forEach((item: city, index: number) => {
    let {local_name, nb_search} = item
    popularCities.push({local_name, nb_search})
  })
  console.log(popularCities)
}

//todo : export const getCities = (api : string) => {
export const fetchCities = () => {
  console.log('exec fetch citites')
  fetch(api)
    .then((result) => result.json())
    .then((res) => {
      makeCitiesArray(res)
      //   console.log('result : ', res)
      console.log('type of res is :', typeof res)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const autoComplete = (input: string, output: string) => {
  let regex: RegExp = new RegExp(`${input}`, 'gi')
  cities.forEach((item) => {
    console.log(' for ', item, ' we got : ', item.match(regex))
  })
}

export const handleSubmit = (e: Event) => {
  e.preventDefault()
  console.log('submited')
}
