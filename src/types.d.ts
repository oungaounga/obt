/** @format */

import dayjs from 'dayjs'
import React from 'react'

// export type City = string[] // should be readonly
export type City = Readonly<string[]>

export type TravelStateType = {
  roundtrip: boolean
  passengers: {
    adults: {age: number; discount: string}[]
    seniors: {age: number; discount: string}[]
    youths: {age: number; discount: string}[]
  }
  travelfrom: string
  traveltwo: string //should be an elements from cities API !!!
  departureDate: dayjs.Dayjs | null
  findaccomodation: boolean
  // easy to implement optional but testing without first
}

export type TravelContextType = {
  bookInfo: TravelStateType | null
  setBookInfo: React.Dispatch<React.SetStateAction<TravelStateType>> | null
}
