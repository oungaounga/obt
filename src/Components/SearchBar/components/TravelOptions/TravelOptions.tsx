/** @format */

import React, {useState, useContext} from 'react'
import DatePicker, {formatDateForInput} from '../DatePicker/DatePicker'
import {BookOptionsContext} from '../../SearchBar'
import CityChoice from './components/CityChoice'

import {ac} from '../../../../autoC'

import {
  circleIcon,
  updownarrowsIcon,
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
  const [pickDate, setPickDate] = useState(false)
  const [toggle, setToggle] = useState(0)
  const [input, setInput] = useState({
    from: '',
    to: '',
  })
  const [cities, setCities] = useState([
    'Paris, Île-de-France, France',
    'Londres, England, United Kingdom',
    'Saint-Jean-de-Luz, Nouvelle-Aquitaine, France',
    "Marseille, Provence-Alpes-Côte d'Azur, France",
    'Montpellier, Occitanie, France',
  ]) //useEffect pour load les villes
  return (
    <>
      <div
        id="secondline"
        className="w-full flex-wrap flex gap-3 space-between text-[#132968] "
      >
        <div
          id="from"
          className="relative shrink bg-neutral-100 flex p-[0.5rem] h-[3rem] rounded-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
        >
          {circleIcon}
          <input
            type="text"
            className="bg-inherit pl-1 pr-1 focus:outline-none"
            placeholder="from: City, Station or Airport"
            onChange={(e) => {
              setBookOptions({...bookOptions, travelfrom: e.target.value})
              setCities(ac(e.target.value, allCities))
              console.log(
                'from ',
                bookOptions.travelfrom,
                'to ',
                bookOptions.travelto
              )
              //on enter take the most popular city
              // use has to click anyways
            }}
            onClick={() => {
              setToggle(1)
            }}
            onFocus={(e) => {
              !toggle || toggle == 2 ? setToggle(1) : setToggle(0)
              e.target.select()
            }}
            onBlur={(e) => {
              setTimeout(() => {
                e.relatedTarget ? setToggle(2) : setToggle(0)
              }, 500)
            }}
            value={bookOptions.travelfrom}
          />
          {updownarrowsIcon}
          {toggle == 1 && (
            <CityChoice cities={cities} toggle={{toggle, setToggle}} />
          )}
        </div>

        <div
          className="relative shrink bg-neutral-100 flex h-[3rem]  p-[0.5rem] rounded-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
          id="to"
        >
          {positionIcon}
          <input
            type="text"
            placeholder="from: City, Station or Airport"
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
            onClick={() => {
              setToggle(2)
            }}
            onFocus={(e) => {
              !toggle || toggle == 1 ? setToggle(2) : setToggle(0)
              e.target.select()
            }}
            onBlur={(e) => {
              setTimeout(() => {
                e.relatedTarget ? setToggle(1) : setToggle(0)
              }, 500)
            }}
            value={bookOptions.travelto}
            className="bg-neutral-100  pl-1 pr-1 focus:outline-none"
          />
          {toggle === 2 && (
            <CityChoice cities={cities} toggle={{toggle, setToggle}} />
          )}
        </div>

        <div className="flex grow h-[3rem] bg-neutral-100 rounded-md gap-2 ">
          <div className=" flex grow divide-x divide-x-black hover:divide-none">
            <div className="relative flex gap-3 rounded-l-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset">
              <div className="grid content-center pl-2 ">{calendarIcon}</div>
              <input
                type="text"
                placeholder="departure date"
                className="bg-neutral-100 focus:outline-none hover:cursor-pointer hover:border-t-[1px] hover:border-r-[1px] hover:border-b-[1px] hover:border-t-neutral-300 hover:border-r-neutral-300 hover:border-b-neutral-300"
                onClick={() => {
                  setPickDate(true)
                }}
              />
              {pickDate && <DatePicker />}
            </div>

            <input
              type="text"
              placeholder="return date"
              className="grow pl-2 rounded-r-md focus:outline-none bg-neutral-100 hover:cursor-pointer hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
            />
          </div>
        </div>
        <button className="text-center bg-[#FA6B6B] text-white h-[3rem] rounded-md p-[0.5rem] grow transition hover:brightness-125">
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
