/** @format */

import React, {useState} from 'react'
import {
  checkIcon,
  plusIcon,
  minusIcon,
  cardIcon,
  infoIcon,
  toggleIcon,
} from '../../icons'

export default function PassengerOptions(props) {
  const [oneWay, setOneWay] = useState(false)
  const [adult, setAdult] = useState(false)
  const oneWayChevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={`transition ${
        oneWay ? 'rotate-180' : 'rotate-0'
      } self-center inline fill-neutral-400 hover:cursor-pointer`}
      viewBox="0 0 16 16"
      onClick={() => {
        setAdult(false)
        setOneWay(!oneWay)
      }}
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  )
  const adultChevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={`transition ${
        adult ? 'rotate-180' : 'rotate-0'
      } self-center inline fill-neutral-400 hover:cursor-pointer`}
      viewBox="0 0 16 16"
      onClick={() => {
        setOneWay(false)
        setAdult(!adult)
      }}
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  )
  return (
    <>
      <div className="w-full  relative flex gap-2 select-none">
        <div
          className="relative flex gap-1"
          onClick={() => {
            setAdult(false)
            setOneWay(!oneWay)
          }}
        >
          <p className="inline hover:cursor-pointer text-sm text-[#132968] ">
            One-way
          </p>
          {oneWayChevron}
          {oneWay && (
            <div className="absolute select-none top-[1.5rem] w-[8rem] bg-white rounded text-black z-40 shadow-lg">
              <div className="flex hover:bg-neutral-200 w-full pl-[1rem] pr-[1rem] p-[0.5rem] rounded-t-md">
                {checkIcon}
                <p className="w-full text-end font-bold">One way</p>
              </div>
              <div className="flex hover:bg-neutral-200 w-full pl-[1rem] pr-[1rem] p-[0.5rem] rounded-b-md">
                <p className="w-full text-end">Round trip</p>
              </div>
            </div>
          )}
        </div>
        <div
          className="relative flex gap-1"
          onClick={() => {
            setOneWay(false)
            setAdult(!adult)
          }}
        >
          <span className="inline hover:cursor-pointer text-sm text-[#132968]">
            1 Adult, No discount card
          </span>
          {adultChevron}
          {adult && (
            <div
              id="personConfig"
              className="absolute select-none top-[1.5rem] p-[1rem] w-[22rem] bg-white rounded text-black z-40 shadow-lg"
            >
              <div className="flex flex-col gap-3 divide-y divide-y-neutral-300">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="text-lg ">Adults</p>
                    <p className="text-sm text-neutral-400">26+ years</p>
                  </div>
                  <div className="flex justify-between gap-5">
                    {plusIcon}
                    <span className="text-md w-[0.5rem] font-bold h-full self-center">
                      1
                    </span>
                    {minusIcon}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="text-lg ">Youth</p>
                    <p className="text-sm text-neutral-400">0-25 years</p>
                  </div>
                  <div className="flex justify-between gap-5">
                    {plusIcon}
                    <span className="text-md w-[0.5rem] font-bold h-full self-center">
                      0
                    </span>
                    {minusIcon}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="text-lg ">Senior</p>
                    <p className="text-sm text-neutral-400">58+ years</p>
                  </div>
                  <div className="flex justify-between gap-5">
                    {plusIcon}
                    <span className="text-md w-[0.5rem] font-bold h-full self-center">
                      0
                    </span>
                    {minusIcon}
                  </div>
                </div>
                <div className="flex justify-between items-center pt-[0.5rem]">
                  <div className="flex gap-1 items-center text-[#132968]">
                    {cardIcon}
                    <span>Add discount card</span>
                    {infoIcon}
                  </div>
                  {toggleIcon}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
