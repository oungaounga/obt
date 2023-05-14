/** @format */

import React, {useState, useEffect} from 'react'

/**components */
import ToCityInput from './components/ToCityInput'
import {FindAccomodation, SearchButton} from './components/SmallComponents'
import FromCityInput from './components/FromCityInput'
import DateInput from './components/DateInput'

/**
 * autocompleteData is from when use enters P
 *
 * popular is for first click
 *
 * popularFromParis is for second click supposing departure is
 * from 'Paris, Île-de-France, France'
 *
 */
export let autocompleteData = []
export let popular = []
export let popularFromParis = []
export let alldestinations = []

/**
 * fetches all apis, stores local_name in appropriate
 * array
 * only fetching and storing no need to arrange array from
 *  most to least popular it is already in that case
 */
const fetchAndStore = () => {
  Promise.all([fetch(acdata), fetch(popapi), fetch(popfromparisapi)])
    .then(([ac, pop, popfromP]) => {
      ac.json().then((res) => {
        res.forEach((item: any) => {
          autocompleteData.push(item.local_name)
        })
        console.log('1')
        alldestinations = [...alldestinations, ...autocompleteData]
      })
      pop.json().then((res) => {
        res.forEach((item: any) => {
          popular.push(item.local_name)
        })
        console.log('2')

        alldestinations = [...alldestinations, ...popular]
      })
      popfromP.json().then((res) => {
        res.forEach((item: any) => {
          popularFromParis.push(item.local_name)
        })
        console.log('3')

        alldestinations = [...alldestinations, ...popularFromParis]
      })
    })
    .catch((err) => {
      console.log(err)
    })
  console.log('4')
}

/**
 *
 * @returns I just discovered JSDoc by accident
 *
 */

export const acdata = 'https://api.comparatrip.eu/cities/autocomplete/?q=par'
export const popapi = 'https://api.comparatrip.eu/cities/popular/5'
export const popfromparisapi =
  'https://api.comparatrip.eu/cities/popular/from/paris/5'

export default function TravelOptions() {
  useEffect(() => {
    fetchAndStore()
  }, [])

  const [cities, setCities] = useState(popular)

  //didn't add a form, but would have if I had to send data somewhere
  //since I only interact with state, didn't use a form, most data dont
  //come from inputs

  return (
    <>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap  bg-inherit gap-3 space-between text-[#132968] ">
        <FromCityInput
          city={{cities, setCities}}
          suggestions={[popular, alldestinations]}
        />
        <ToCityInput
          city={{cities, setCities}}
          suggestions={[popular, popularFromParis, alldestinations]}
        />
        <DateInput />
        <SearchButton />
        <FindAccomodation />
      </div>
    </>
  )
}

// className originale d'inpute date
// shrink rounded-r-md focus:outline-none bg-neutral-100 hover:cursor-pointer hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset
