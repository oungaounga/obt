/** @format */
import {BookOptionsContext} from '../../../SearchBar'

import React, {useContext} from 'react'

export default function CityChoice(props) {
  const {toggle, setToggle} = props.toggle
  const {cities} = props
  const {bookOptions, setBookOptions} = useContext(BookOptionsContext)
  return (
    <div className="absolute max-w-[110%] lg:w-[30rem] top-[3rem] left-[-0.7rem] bg-white drop-shadow-2xl rounded-md max-h-[20rem] overflow-scroll z-40">
      <ul className="list-none list-inside">
        {bookOptions.travelfrom && (
          <li className="p-[0.7rem] m-0 text-sm text-neutral-300 bg-neutral-100">
            POPULAR DESTINATIONS
          </li>
        )}
        {cities.map((item, key) => {
          // if (input.from === item || input.to === item) return
          if (bookOptions.travelfrom && item === bookOptions.travelfrom) {
            return
          }

          return (
            <li
              key={key}
              className="p-[0.7rem] m-0 text-lg hover:bg-neutral-100"
              onClick={async () => {
                // setInput(
                //   toggle === 1 ? {...input, from: item} : {...input, to: item}
                // )
                setBookOptions(
                  toggle === 1
                    ? {...bookOptions, travelfrom: item}
                    : {...bookOptions, travelto: item}
                )
                setToggle(null)
              }}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
