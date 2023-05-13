/** @format */

import React, {useState, useContext, useEffect, useRef} from 'react'
import DatePicker from '../DatePicker/DatePicker'
import {BookOptionsContext} from '../../SearchBar'
import {ToggleContext} from '../../../../App'
import CityChoice from './components/CityChoice'

import {ac} from '../../../../autoC'

import {
  autocompleteCities,
  firstClickCities,
  secondClickCities,
  insideEffect,
  allDestinations,
} from './components/traveloptionfn'

import {
  circleIcon,
  toggleIcon,
  positionIcon,
  calendarIcon,
} from '../../../icons'

const allCities = [
  'Paris, Île-de-France, France',
  'Londres, England, United Kingdom',
  'Saint-Jean-de-Luz, Nouvelle-Aquitaine, France',
  "Marseille, Provence-Alpes-Côte d'Azur, France",
  'Montpellier, Occitanie, France',
  'Les Contamines-Montjoie, Auvergne-Rhône-Alpes, France',
  'Poreč, Istarska županija, Hrvatska',
  'Parma, Emilia-Romagna, Italia',
  'Parempuyre, Nouvelle-Aquitaine, France',
  'Paray-le-Monial, Bourgogne-Franche-Comté, France',
  'Pärnu, Pärnu, Eesti',
  'partaloa, Andalucía, España',
  'Parsac-Gouzon, Nouvelle-Aquitaine, France',
  'Parsac-Rimondeix, Nouvelle-Aquitaine, France',
  'Parent, Auvergne-Rhône-Alpes, France',
  'Aveiro, Centro, Portugal',
]

export default function TravelOptions() {
  const {bookOptions, setBookOptions} = useContext(BookOptionsContext)
  const {toggle, setToggle} = useContext(ToggleContext)

  useEffect(() => {
    insideEffect()
    console.log('all destinations', firstClickCities)
  }, [])
  const [cities, setCities] = useState(firstClickCities)

  //didn't add a form, but would have if I had to send data somewhere
  //since I only interact with state, didn't use a form, most data dont
  //come from inputs

  return (
    <>
      <div
        id="secondline"
        className="w-full flex flex-col md:flex-row md:flex-wrap  bg-inherit gap-3 space-between text-[#132968] "
      >
        <div
          id="from"
          className="relative md:shrink bg-neutral-100 flex sm:max-md:max-w-1/5 w-full md:w-fit p-[0.5rem] h-[3rem] rounded-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
        >
          {circleIcon}
          <input
            type="text"
            className="bg-inherit pl-1 pr-1 md:max-lg:w-[7rem] focus:outline-none"
            placeholder="from: City, Station or Airport"
            onChange={(e) => {
              setBookOptions({...bookOptions, travelfrom: e.target.value})
              setCities(ac(e.target.value, allDestinations))
              console.log(
                'from ',
                bookOptions.travelfrom,
                'to ',
                bookOptions.travelto
              )
              //on enter take the most popular city
              // use has to click anyways
            }}
            onClick={(e) => {
              e.stopPropagation()
              setToggle(toggle !== 1 ? 1 : 0)
            }}
            value={bookOptions.travelfrom}
          />
          {/* {updownarrowsIcon} */}
          {toggle == 1 && (
            <CityChoice cities={cities} toggle={{toggle, setToggle}} />
          )}
        </div>

        <div
          className="relative md:shirnk flex full sm:max-md:max-w-1/5 md:w-fit bg-neutral-100  h-[3rem] p-[0.5rem] rounded-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
          id="to"
        >
          {positionIcon}
          <input
            type="text"
            placeholder="to: City, Station or Airport"
            onChange={(e) => {
              setBookOptions({...bookOptions, travelto: e.target.value})
              setCities(ac(e.target.value, allCities)) //add optionnal to ac to get rid of from city
              console.log(
                'from ',
                bookOptions.travelfrom,
                'to ',
                bookOptions.travelto
              )
            }}
            onClick={(e) => {
              e.stopPropagation()
              setCities(secondClickCities)
              setToggle(toggle !== 2 ? 2 : 0)
            }}
            value={bookOptions.travelto}
            className="bg-neutral-100 pl-1 pr-1 focus:outline-none"
          />
          {toggle === 2 && (
            <CityChoice cities={cities} toggle={{toggle, setToggle}} />
          )}
        </div>

        <div className=" flex flex-wrap justify-around md:grow bg-neutral-100 rounded-md divide-x divide-x-neutral-700 hover:divide-none">
          <div className="relative shrink md:grow flex justify-start w-1/2 gap-3 rounded-l-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset">
            <div className="grid content-center pl-2 ">{calendarIcon}</div>
            <div>
              <input
                type="text"
                placeholder="departure date"
                className="bg-neutral-100 appearance-none bg-inherit m-[2px] w-[7rem] h-[3rem] md:w-[5rem] truncate lg:w-auto shrink focus:outline-none hover:cursor-pointer "
                value={bookOptions.departure}
                onClick={(e) => {
                  e.stopPropagation()
                  setToggle(3)
                }}
              />
            </div>

            {toggle === 3 && <DatePicker />}
          </div>
          <div className="rounded-r-md md:grow focus:outline-none w-1/2  bg-neutral-100 hover:cursor-pointer hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset ">
            <input
              type="text"
              placeholder=" + Add return"
              className=" inline-block truncate bg-inherit w-[7rem] h-[3rem] md:w-[5rem] lg:w-auto m-[2px] focus:outline-none border-none   text-right md:text-center hover:cursor-pointer rounded-r-md"
              onClick={(e) => {
                e.stopPropagation()
                bookOptions.return && setToggle(3)
              }}
              value={bookOptions.return}
            />
          </div>
        </div>

        <button className="text-center bg-[#FA6B6B] lg:grow text-white h-[3rem] rounded-md p-[0.5rem] transition hover:brightness-125">
          {' '}
          Search
        </button>
      </div>
      <div className="w-full flex text-[#132968]">
        <div
          className="flex gap-2"
          onClick={(e) => {
            let push = e.currentTarget.firstChild?.firstChild.checked
            // push seems dangerous...
            setBookOptions({...bookOptions, find: push})
          }}
        >
          {toggleIcon}
          <p className="text-sm">Find my accomodation</p>
        </div>
      </div>
    </>
  )
}

// className originale d'inpute date
// shrink rounded-r-md focus:outline-none bg-neutral-100 hover:cursor-pointer hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset
