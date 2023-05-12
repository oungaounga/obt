/** @format */

import React, {useState, useContext} from 'react'
import Passengers from './components/Passengers'
import OneWay from './components/OneWay'
import {BookOptionsContext} from '../../SearchBar'

export default function PassengerOptions(props) {
  const [toggle, setToggle] = useState({
    oneWay: false,
    adult: false,
  })

  // const {bookOptions, setBookOptions} = useContext(BookOptionsContext)
  return (
    <>
      <div className="w-full  relative flex gap-2 select-none">
        <OneWay toggle={{toggle, setToggle}} />
        <Passengers toggle={{toggle, setToggle}} />
      </div>
    </>
  )
}
