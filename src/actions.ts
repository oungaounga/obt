/** @format */

export const firstApi = 'https://api.comparatrip.eu/cities/autocomplete/?q=par'
export const secondApi = 'https://api.comparatrip.eu/cities/popular/5'
export const thirdApi = 'https://api.comparatrip.eu/cities/popular/from/paris/5'

export interface popularCity {
  city_id: number
  gpuid: string
  id: number
  iscity: boolean
  latitude: number
  local_name: string
  longitude: number
  nb_search: string //string.toNumber()
  new_id: string
  popular: boolean
  unique_name: string
}
export interface autoCompleteCity {
  city_id: number
  emoji: null
  gpuid: string
  iscity: boolean
  latitude: number
  local_name: string
  longitude: number
  score: number
  serviced: true
  station_id: number
  station_unique_name: string
  unique_name: string
}
export interface City {
  unique_name: string
  local_name?: string
  nb_search?: number
}

export const twobat = 'Gotham City, Île de France'
export const bataucarre = 'Manoir Wayne'

export const popularCities: City[] = []
export const popularCitiesFromParis: City[] = []
export const autocompleteCities: City[] = []

function switcher(i: number, j: number) {
  let a = i
  i = j
  j = a
}
//TODO rename to arrangeMostPopular
function arrangeCities(v: popularCity[]) {
  for (let i = 0; i < v.length; i++) {
    for (let j = 0; j < v.length; j++) {
      if (v[i].nb_search < v[j].nb_search) {
        let a = v[i]
        v[i] = v[j]
        v[j] = a
      }
    }
  }
}

// export function filterPopular(v) {
//   for (let i = 0; i < v.length; i++) {
//     for (let j = 0; j < v.length; j++) {
//       if (v[i].nb_search < v[j].nb_search) {
//         let a = v[i]
//         v[i] = v[j]
//         v[j] = a
//       }
//     }
//   }
// }

// let citiesArr: {local_name: string; nb_search: number}[] = []

// export const fetchApi = (adress: string) => {
// fetch(adress)
//   .then((result) => result.json())
//   .then((res) => {
//     res.forEach((item: popularCity) => {
//       citiesArr.push({
//         local_name: item.local_name,
//         nb_search: Number(item.nb_search),
//       })
//     })
//     console.log('fetched')
//     return citiesArr
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }

export const extractScores = (array: popularCity[] | void) => {
  if (array) {
    let emptyArray: number[] = []
    array.forEach((item: any) => {
      emptyArray.push(Number(item.nb_search))
    })
    console.log('does it work ? ', emptyArray)
    return emptyArray
  } else {
    console.log('didnt get the data')
  }
}

export const fetcher = async (adress: string) => {
  const response = await fetch(adress)
  const result = await response.json()
  return result
}

export const makeCitiesArrayFromFetch = (v: popularCity[], target: City[]) => {
  v.forEach((item) => {
    const {local_name, unique_name, nb_search} = item
    target.push({
      local_name: local_name,
      unique_name: unique_name,
      nb_search: Number(nb_search),
    })
  })
}

// export const getLocalNameArray = (cityList: City[]) => {
//   const target: string[] = []
//   cityList.forEach((item) => {
//     target.push(item.local_name)
//   })
//   console.log('target', target)
//   console.log('cityList', cityList)
//   return target
// }
//use case :
//  cities = getLocalNameArray(popularCities)
// cities = getLocalNameArray(po)

export const fetchAllApis = () => {
  fetcher(secondApi).then((result) => {
    makeCitiesArrayFromFetch(result, popularCities)
    console.log('first api', result)
  })
  fetcher(thirdApi).then((result) => {
    makeCitiesArrayFromFetch(result, popularCitiesFromParis)
    console.log('second api', result)
  })
  fetcher(firstApi).then((result) => {
    makeCitiesArrayFromFetch(result, autocompleteCities)
    console.log('third api', result)
  })
}

//Important : séparer la fonction fetch doit servir qu'a récolter les donnée
// pour traîter les données, faire sur un autre scope
