/** @format */
import React, {useState, createContext} from 'react'
import dayjs from 'dayjs'

// components
import PassengerOptions from './components/PassengerOptions/PassengerOptions'
import TravelOptions from './components/TravelOptions/TravelOptions'

const today = dayjs()
export const BookOptionsContext = createContext(null)

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
    departureDate: today,
    find: false,
  })
  return (
    <>
      <div id="searchBar" className="relative z-10 flex justify-center">
        <div className="w-full h-full bg-white rounded-md shadow-md max-w-[75vw] flex flex-col gap-[1rem] p-[1rem]">
          <BookOptionsContext.Provider value={{bookOptions, setBookOptions}}>
            <PassengerOptions />
            <TravelOptions />
          </BookOptionsContext.Provider>
          <div className="bg-neutral-200 gap-2 p-[2rem] mt-[1rem] rounded-md shadow-2xl flex">
            <button
              className="bg-green-500 rounded-md text-xl p-[0.5rem] pl-[1rem] pr-[1rem]"
              onClick={() => {
                console.log(bookOptions.find)
              }}
            >
              actualize
            </button>
            <div className="p-[1rem] bg-neutral-300 rounded-md shadow-md">
              <p className="text-black">
                {JSON.stringify(bookOptions, null, 5)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
