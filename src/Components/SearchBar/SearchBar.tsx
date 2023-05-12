/** @format */
import React, {useState, createContext, useContext} from 'react'
import dayjs from 'dayjs'

import PassengerOptions from './components/PassengerOptions'
import TravelOptions from './components/TravelOptions'
import DatePicker from './components/DatePicker'

export interface TestContextType {
  one: string
  setOne: (oneWay: string) => void
}

export const TContext = createContext<TestContextType>({
  one: 'hello context',
  setOne: () => {},
})

const today = dayjs()

export default function SearchBar(props) {
  // const [travelInfo, setTravelnfo] = useState<TravelInfoType>({
  //   oneWay: false,
  //   passenger: {
  //     ageCategory: 'adult',
  //     discountCard: false,
  //   },
  //   travelDate: '12/05/2023',
  // })
  const [one, setOne] = useState('hello context')

  return (
    <>
      <div id="searchBar" className="relative z-10 flex justify-center">
        <div className="w-full h-full bg-white rounded-md shadow-md max-w-[75vw] flex flex-col gap-[1rem] p-[1rem]">
          <TContext.Provider value={{one, setOne}}>
            <PassengerOptions />
          </TContext.Provider>
          <TravelOptions />
        </div>
      </div>
    </>
  )
}

function TestComponent(props) {
  const {one, setOne} = useContext(TContext)

  return (
    <>
      <div>
        <p
          className="text-black"
          onClick={() => {
            setOne(!one)
            console.log('context works', one)
          }}
        >
          hello world
        </p>
        <input
          className="bg-black"
          type="text"
          value={one}
          onChange={(e) => {
            setOne(e.target.value)
            console.log(one)
          }}
        />
      </div>
    </>
  )
}
