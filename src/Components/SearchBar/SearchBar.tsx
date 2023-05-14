/** @format */
import React, {useState, createContext} from 'react'
import dayjs from 'dayjs'

// components
import PassengerOptions from './components/PassengerOptions/PassengerOptions'
import TravelOptions from './components/TravelOptions/TravelOptions'

import {formatDateForInput} from './components/DatePicker/DatePicker'
export const BookOptionsContext = createContext({})

export default function SearchBar() {
  const [bookOptions, setBookOptions] = useState({
    roundtrip: false,
    passengers: {
      adult: [{age: 1, discount: []}],
      youth: [],
      senior: [],
    },
    travelfrom: '',
    travelto: '',
    departureDate: dayjs(),
    departure: formatDateForInput(dayjs()),
    return: '',
    dDateObj: dayjs(),
    rDateObj: null,
    find: false,
  })
  return (
    <>
      <div
        id="searchBar"
        className="wrap relative z-10 flex w-screen justify-center"
      >
        <div
          id="searchbar child"
          className="h-full w-screen  bg-white rounded-xl shadow-2xl max-w-[95vw] xl:max-w-[75vw] flex flex-col gap-[1rem] p-[1rem]"
        >
          <BookOptionsContext.Provider value={{bookOptions, setBookOptions}}>
            <PassengerOptions />
            <TravelOptions />
          </BookOptionsContext.Provider>
        </div>
      </div>
    </>
  )
}
