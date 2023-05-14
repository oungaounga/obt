/** @format */

import React, {useContext} from 'react'

import {batbat} from '../../../../../autoC'

/**Context */
import {ToggleContext} from '../../../../../App'
import {BookOptionsContext} from '../../../SearchBar'

/**Components */
import CityChoice from './CityChoice'

/**functions */
import {ac} from '../../../../../autoC'

/**Icons */
import {circleIcon} from '../../../../icons'

export default function ToCityInput({city, suggestions}) {
  const {toggle, setToggle} = useContext(ToggleContext)
  const {bookOptions, setBookOptions} = useContext(BookOptionsContext)
  const {cities, setCities} = city
  const [popular, alldestinations] = suggestions

  const handleClick = (e) => {
    e.stopPropagation()
    e.currentTarget.childNodes[1].focus()
    setCities(popular)
    setToggle(toggle !== 1 ? 1 : 0)
  }
  const handleChange = (e) => {
    setToggle(1)
    setBookOptions({...bookOptions, travelfrom: e.target.value})
    if (bookOptions.input == 'Gotham City, Île de France') {
      console.log('manoir wayne')
    }
    setCities(ac(e.target.value, alldestinations))
    batbat(e.target.value)
    console.log(typeof e.currentTarget.value)
  }

  return (
    <>
      <div
        id="from"
        className="relative md:shrink bg-neutral-100 flex sm:max-md:max-w-1/5 w-full md:w-fit p-[0.5rem] h-[3rem] rounded-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
        onClick={handleClick}
      >
        {circleIcon}
        <input
          type="text"
          className="bg-inherit pl-1 pr-1 md:max-lg:w-[7rem] truncate focus:outline-none"
          placeholder="from: City, Station or Airport"
          onChange={handleChange}
          value={bookOptions.travelfrom}
        />
        {toggle === 1 && (
          <CityChoice cities={cities} toggle={{toggle, setToggle}} />
        )}
      </div>
    </>
  )
}
