/** @format */

import React, {useContext} from 'react'

/**Context */
import {ToggleContext} from '../../../../../App'
import {BookOptionsContext} from '../../../SearchBar'

/**functions */
import {ac} from '../../../../../autoC'

/**Components */
import CityChoice from './CityChoice'

/**Icons */
import {positionIcon} from '../../../../icons'

export default function ToCityInput({city, suggestions}) {
  const {toggle, setToggle} = useContext(ToggleContext)
  const {bookOptions, setBookOptions} = useContext(BookOptionsContext)
  const {cities, setCities} = city
  const [popular, popularFromParis, alldestinations] = suggestions

  const handleClick = (e) => {
    e.stopPropagation()
    e.currentTarget.childNodes[1].focus()
    setToggle(toggle !== 2 ? 2 : 0)
    bookOptions.departure = popular[0]
      ? setCities(popularFromParis)
      : setCities(alldestinations)
  }

  const handleChange = (e) => {
    console.log(alldestinations)
    setBookOptions({...bookOptions, travelto: e.target.value})
    bookOptions.travelfrom = popular[0]
      ? setCities(ac(e.target.value, popularFromParis))
      : setCities(ac(e.target.value, alldestinations))
  }

  return (
    <>
      <div
        className="relative md:shirnk flex full sm:max-md:max-w-1/5 md:w-fit bg-neutral-100  h-[3rem] p-[0.5rem] rounded-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
        onClick={handleClick}
      >
        {positionIcon}
        <input
          type="text"
          placeholder="to: City, Station or Airport"
          onChange={handleChange}
          value={bookOptions.travelto}
          className="bg-neutral-100 pl-1 pr-1 truncate focus:outline-none"
        />
        {toggle === 2 && (
          <CityChoice cities={cities} toggle={{toggle, setToggle}} />
        )}
      </div>
    </>
  )
}
