/** @format */

import React, {useState, useContext} from 'react'
import {
  circleIcon,
  updownarrowsIcon,
  toggleIcon,
  positionIcon,
  calendarIcon,
} from '../../icons'
import DatePicker from './DatePicker'

export default function TravelOptions() {
  const [pickDate, setPickDate] = useState(false)
  // const travelInfo = useContext(TravelInfoContext)
  // console.log('context works ?', travelInfo)
  return (
    <>
      <div
        id="secondline"
        className="w-full flex-wrap flex gap-3 space-between text-[#132968] "
      >
        <div
          id="from"
          className="shrink bg-neutral-100 flex p-[0.5rem] h-[3rem] rounded-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
        >
          {circleIcon}
          <input
            className="bg-inherit pl-1 pr-1 focus:outline-none"
            placeholder="from"
          />
          {updownarrowsIcon}
        </div>
        <div
          className="shrink bg-neutral-100 flex h-[3rem]  p-[0.5rem] rounded-md hover:ring-neutral-300 hover:ring-[1px] hover:ring-inset"
          id="to"
        >
          {positionIcon}
          <input
            type="text"
            className="bg-neutral-100  pl-1 pr-1 focus:outline-none"
            placeholder="to"
          />
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
        <div className="flex gap-2">
          {toggleIcon}
          <p className="text-sm">Find my accomodation</p>
        </div>
      </div>
    </>
  )
}
