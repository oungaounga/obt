/** @format */
import React, {useState, createContext} from 'react'
import dayjs from 'dayjs'

// components
import PassengerOptions from './components/PassengerOptions/PassengerOptions'
import TravelOptions from './components/TravelOptions/TravelOptions'

import {formatDateForInput} from './components/DatePicker/DatePicker'
// const today = dayjs()
export const BookOptionsContext = createContext({})

export default function SearchBar(props) {
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

          {/* <div className="bg-neutral-200 gap-2 p-[2rem] mt-[1rem] rounded-md shadow-2xl flex">
            <button
              className="bg-green-500 rounded-md text-xl w-fit font-bold shadow-md p-[0.5rem] pl-[1rem] pr-[1rem]"
              onClick={() => {
                console.clear()
                let d = dayjs('2023-05-29')
                console.log(bookOptions.dDateObj.isBefore(d))
              }}
            >
              Book Travel Object
            </button>
            <div className="p-[1rem] w-full bg-neutral-300 rounded-md shadow-md">
              <ul className="text-black leading-none">
                {Object.keys(bookOptions).map((item, index) => {
                  if (typeof item === 'object') {
                    Object.keys(item).map((itemm, indexx) => {
                      return <li>{`${item} : ${bookOptions[item]}`}</li>
                    })
                  } else {
                    return <li>{`${item} : ${bookOptions[item]}`}</li>
                  }
                })}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
