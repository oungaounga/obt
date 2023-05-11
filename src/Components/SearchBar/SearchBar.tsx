/** @format */
import React, {useState, createContext} from 'react'
import dayjs from 'dayjs'

import PassengerOptions from './components/PassengerOptions'
import TravelOptions from './components/TravelOptions'
import DatePicker from './components/DatePicker'

export interface TravelInfoType {
  oneWay: boolean
  passenger: {
    ageCategory: string
    discountCard: boolean
  }
  travelDate: dayjs.Dayjs
}

const today = dayjs()

export default function SearchBar(props) {
  const [travelInfo, setTravelnfo] = useState<TravelInfoType>({
    oneWay: false,
    passenger: {
      ageCategory: 'adult',
      discountCard: false,
    },
    travelDate: today,
  })
  const TravelInfoContext = createContext<TravelInfoType | null>(null)

  return (
    <>
      <div id="searchBar" className="relative z-10 flex justify-center">
        <div className="w-full h-full bg-white rounded-md shadow-md max-w-[75vw] flex flex-col gap-[1rem] p-[1rem]">
          <PassengerOptions />
          <TravelInfoContext.Provider value={travelInfo}>
            <TravelOptions />
          </TravelInfoContext.Provider>
        </div>
      </div>
    </>
  )
}
