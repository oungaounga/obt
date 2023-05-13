/** @format */

import React from 'react'
import Passengers from './components/Passengers'
import OneWay from './components/OneWay'

export default function PassengerOptions(props) {
  return (
    <>
      <div className="w-full  relative flex gap-2 select-none">
        <OneWay />
        <Passengers />
      </div>
    </>
  )
}
