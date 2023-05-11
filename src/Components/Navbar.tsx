/** @format */
import React, {useState} from 'react'

//----------Icons--------------//
const downChevronIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-down inline self-center ml-[0.5rem] mr-[0.5rem] fill-white hover:cursor-pointer"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
)
const americanFlag = (
  <img
    width="30"
    className="inline"
    alt="Flag of the United States"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/512px-Flag_of_the_United_States.svg.png"
  />
)

//-----------UI static data for pop overs------------//
const trainsPopOverList = [
  <>
    {' '}
    <span className="font-normal">Trains</span> in Germany{' '}
  </>,
  <>
    <span className="font-normal">Trains</span> in France
  </>,
  <>
    <span className="font-normal">Trains</span> in Spain
  </>,
  <>
    <span className="font-normal">Trains</span> in the UK
  </>,
  <>
    <span className="font-normal">Trains</span> in Italy
  </>,
]
const busesPopOverList = [
  <>
    {' '}
    <span className="font-normal">Buses</span> in Germany{' '}
  </>,
  <>
    <span className="font-normal">Buses</span> in France
  </>,
  <>
    <span className="font-normal">Buses</span> in Spain
  </>,
  <>
    <span className="font-normal">Buses</span> in the UK
  </>,
  <>
    <span className="font-normal">Buses</span> in Italy
  </>,
]
const flightsPopOverList = [
  <>
    {' '}
    <span className="font-normal">Flights</span> to Germany{' '}
  </>,
  <>
    <span className="font-normal">Flights</span> to France
  </>,
  <>
    <span className="font-normal">Flights</span> to Spain
  </>,
  <>
    <span className="font-normal">Flights</span> to the UK
  </>,
  <>
    <span className="font-normal">Flights</span> to Italy
  </>,
]
const ferriessPopOverList = [
  'Fred Olsen Express',
  'Toremar',
  'SNAV',
  'Moby Lines',
  'Trasmapi',
]

//-- Function to render pop overs on hovers for this components ---//
const createPopOver = (list, setS, S, whichFalse, title?: string) => {
  return (
    <div
      className="absolute top-[1.5rem] bg-white rounded-md shadow-md z-20 text-[#132968] text-lg font-bold min-w-[16rem]"
      onMouseLeave={() => {
        let newS = {...S}
        newS[whichFalse] = false
        setS(newS)
      }}
    >
      {title && (
        <p className="pt-[0.7rem] pl-[0.8rem] hover:bg-neutral-200 rounded-t-md">
          {title}
        </p>
      )}
      {list.map((item, index) => {
        return (
          <p
            className={`
            ${index == 0 && !title ? 'rounded-t-md' : ''}
            ${index === 0 ? 'pt-[0.7rem] pl-[0.8rem]' : 'p-[0.1rem] pl-[1rem]'}
             hover:bg-neutral-200 ${
               index === list.length - 1 && 'rounded-b-md'
             }`}
          >
            {item}
          </p>
        )
      })}
    </div>
  )
}

export default function Navbar(props) {
  // State for toggeling pop overs
  const [commutesPopOver, setCommutesPopOver] = useState({
    trains: false,
    buses: false,
    flights: false,
    ferries: false,
  })

  //elements for popovers
  const popOverTrains = createPopOver(
    trainsPopOverList,
    setCommutesPopOver,
    commutesPopOver,
    'trains',
    'Night trains'
  )
  const popOverBuses = createPopOver(
    busesPopOverList,
    setCommutesPopOver,
    commutesPopOver,
    'buses'
  )
  const popOverFlights = createPopOver(
    flightsPopOverList,
    setCommutesPopOver,
    commutesPopOver,
    'flights',
    'Flight Cancellations'
  )
  const popOverFerries = createPopOver(
    ferriessPopOverList,
    setCommutesPopOver,
    commutesPopOver,
    'ferries'
  )

  return (
    <div
      id="navbar"
      className="z-40 relative text-white flex flex-col items-center"
    >
      <div className="flex max-w-[75vw] justify-between p-[1rem] xl:w-[75vw] ">
        <div className="flex gap-6">
          <span className="text-4xl font-bold ">omio</span>
          <div className="flex justify-between items-center text-sm gap-4">
            <div className="relative">
              <span
                className="hover:cursor-pointer"
                onMouseEnter={() => {
                  setCommutesPopOver({
                    ...commutesPopOver,
                    trains: true,
                    buses: false,
                    flights: false,
                    ferries: false,
                  })
                }}
              >
                Trains
              </span>
              {commutesPopOver.trains && popOverTrains}
            </div>
            <div className="relative">
              <span
                className="hover:cursor-pointer"
                onMouseEnter={() => {
                  setCommutesPopOver({
                    ...commutesPopOver,
                    trains: false,
                    buses: true,
                    flights: false,
                    ferries: false,
                  })
                }}
              >
                Buses
              </span>
              {commutesPopOver.buses && popOverBuses}
            </div>
            <div className="relative">
              <span
                className="hover:cursor-pointer"
                onMouseEnter={() => {
                  setCommutesPopOver({
                    ...commutesPopOver,
                    trains: false,
                    buses: false,
                    flights: true,
                    ferries: false,
                  })
                }}
              >
                Flights
              </span>
              {commutesPopOver.flights && popOverFlights}
            </div>
            <div className="relative">
              <span
                className="hover:cursor-pointer"
                onMouseEnter={() => {
                  setCommutesPopOver({
                    ...commutesPopOver,
                    trains: false,
                    buses: false,
                    flights: false,
                    ferries: true,
                  })
                }}
              >
                Ferries
              </span>
              {commutesPopOver.ferries && popOverFerries}
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center text-sm">
          <div>
            <span className="hover:cursor-pointer inline">€</span>
            {downChevronIcon}
          </div>
          <div>
            {americanFlag}
            {downChevronIcon}
          </div>
          <span className="hover:cursor-pointer">Your bookings</span>
          <span className="hover:cursor-pointer">Sign in</span>
          <span className="hover:cursor-pointer">Create an account</span>
        </div>
      </div>
    </div>
  )
}
