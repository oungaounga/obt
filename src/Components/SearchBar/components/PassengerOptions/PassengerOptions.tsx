/** @format */

import React from 'react'
import Passengers from './components/Passengers'
import OneWay from './components/OneWay'

export default function PassengerOptions(props) {
  // const [toggle, setToggle] = useState({
  //   oneWay: false,
  //   adult: false,
  // })

  // const {bookOptions, setBookOptions} = useContext(BookOptionsContext)
  return (
    <>
      <div className="w-full  relative flex gap-2 select-none">
        <OneWay />
        <Passengers />
      </div>
    </>
  )
}
// toggle={{toggle, setToggle}}
// toggle={{toggle, setToggle}}
