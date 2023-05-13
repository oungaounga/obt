/** @format */

import {secondApi} from '../../../../../actions'
import {autoComplete} from '../../../../../autoC'

/** @format */
export const autocompapi =
  'https://api.comparatrip.eu/cities/autocomplete/?q=par'
export const firstclickapi = 'https://api.comparatrip.eu/cities/popular/5'
export const secondclickapi =
  'https://api.comparatrip.eu/cities/popular/from/paris/5'

export const autocompleteCities: string[] = []
export const firstClickCities: string[] = []
export const secondClickCities: string[] = []
export const allDestinations: string[] = []

export type Popularcity = {
  local_name: string
  nb_search: number
}

export const fetcher = async (adress: string) => {
  const response = await fetch(adress)
  const result = await response.json()
  return result
}

export const filterPopular = (v: Popularcity[]) => {
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

//fonction to delete city suggested on second click according to first click
export const spliceFrom = (v: string[], from: string) => {
  v.splice(v.indexOf(from), 1)
}

export const fetchAndCreateArray = (array: any[], adresse: string) => {
  fetcher(adresse).then((result: any[]) => {
    result.forEach((item) => {
      array.push(item.local_name)
    })
  })
}

// function to fetch and create arrays for rendering
// will be called inside useEffect
export const insideEffect = async () => {
  fetchAndCreateArray(autocompleteCities, autocompapi)
  fetchAndCreateArray(firstClickCities, firstclickapi)
  fetchAndCreateArray(secondClickCities, secondclickapi)
}
