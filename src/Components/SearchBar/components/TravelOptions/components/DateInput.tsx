/** @format */

import React, {useContext} from 'react'

/**context*/
import {ToggleContext} from '../../../../../App'
import {BookOptionsContext} from '../../../SearchBar'

/**components */
import DatePicker from '../../DatePicker/DatePicker'

/**icons */
import {calendarIcon} from '../../../../icons'

const DepartureInput = () => {
  const {setToggle} = useContext(ToggleContext)
  const {bookOptions} = useContext(BookOptionsContext)

  const handleClick = (e) => {
    e.stopPropagation()
    setToggle(3)
  }

  return (
    <>
      <div
        className="relative shrink md:grow flex justify-start w-1/2 gap-3 rounded-l-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
        onClick={handleClick}
      >
        <div className="grid content-center pl-2 ">{calendarIcon}</div>
        <div>
          <input
            type="text"
            placeholder="departure date"
            className="bg-neutral-100 appearance-none bg-inherit m-[2px] w-[7rem] h-[3rem] md:w-[5rem] truncate lg:w-auto shrink focus:outline-none hover:cursor-pointer "
            value={bookOptions.departure}
          />
        </div>
      </div>
    </>
  )
}

const ReturnInput = () => {
  const {setToggle} = useContext(ToggleContext)
  const {bookOptions} = useContext(BookOptionsContext)

  const handleClick = (e) => {
    e.stopPropagation()
    setToggle(17)
  }

  return (
    <>
      <div
        className="relative rounded-r-md md:grow  w-1/2  bg-neutral-100 hover:cursor-pointer hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset "
        onClick={handleClick}
      >
        <input
          type="text"
          placeholder=" + Add return"
          className=" inline-block truncate bg-inherit w-[7rem] h-[3rem] md:w-[5rem] lg:w-auto m-[2px] focus:outline-none border-none text-right md:text-center hover:cursor-pointer rounded-r-md"
          value={bookOptions.return}
        />
      </div>
    </>
  )
}

export default function DateInput(props) {
  const {toggle, setToggle} = useContext(ToggleContext)

  return (
    <>
      <div className="relative flex flex-wrap justify-around md:grow bg-neutral-100 rounded-md divide-x divide-x-neutral-700 hover:divide-none">
        <DepartureInput />
        {(toggle === 3 || toggle === 17) && <DatePicker />}
        <ReturnInput />
      </div>
    </>
  )
}
