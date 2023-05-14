/** @format */

import React, {useContext} from 'react'

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

  return (
    <>
      <div
        id="from"
        className="relative md:shrink bg-neutral-100 flex sm:max-md:max-w-1/5 w-full md:w-fit p-[0.5rem] h-[3rem] rounded-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
        onClick={(e) => {
          e.stopPropagation()
          e.currentTarget.childNodes[1].focus()
          setCities(popular)
          setToggle(toggle !== 1 ? 1 : 0)
        }}
      >
        {circleIcon}
        <input
          type="text"
          className="bg-inherit pl-1 pr-1 md:max-lg:w-[7rem] truncate focus:outline-none"
          placeholder="from: City, Station or Airport"
          // this shows popular cities
          onChange={(e) => {
            setBookOptions({...bookOptions, travelfrom: e.target.value})
            setCities(ac(e.target.value, alldestinations))
          }}
          value={bookOptions.travelfrom}
        />
        {toggle === 1 && (
          <CityChoice cities={cities} toggle={{toggle, setToggle}} />
        )}
      </div>
    </>
  )
}
