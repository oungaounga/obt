/** @format */
import React, {useState, useRef, useContext} from 'react'
import {CSSTransition} from 'react-transition-group'

import {ToggleContext} from '../App'

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

// vars for animations ---------------------------------------//

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
const createPopOver = (list, setS, S, whichFalse, ref, title?: string) => {
  return (
    <div
      className="absolute bg-white rounded-md shadow-md z-20 text-[#132968] text-lg font-bold min-w-[16rem]"
      ref={ref}
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
  const {toggle, setToggle} = useContext(ToggleContext)

  const trains = useRef(null)
  const buses = useRef(null)
  const flights = useRef(null)
  const ferries = useRef(null)

  //elements for popovers
  const popOverTrains = createPopOver(
    trainsPopOverList,
    setCommutesPopOver,
    commutesPopOver,
    'trains',
    trains,
    'Night trains'
  )
  const popOverBuses = createPopOver(
    busesPopOverList,
    setCommutesPopOver,
    commutesPopOver,
    'buses',
    buses
  )
  const popOverFlights = createPopOver(
    flightsPopOverList,
    setCommutesPopOver,
    commutesPopOver,
    'flights',
    flights,
    'Flight Cancellations'
  )
  const popOverFerries = createPopOver(
    ferriessPopOverList,
    setCommutesPopOver,
    commutesPopOver,
    'ferries',
    ferries
  )

  return (
    <div
      id="navbar"
      className="z-40 relative   text-white flex flex-col lg:items-center"
    >
      <div className="flex max-w-[75vw]  justify-between p-[1rem] xl:w-[75vw] ">
        <div className="flex gap-6 ">
          <span
            className="text-4xl font-bold "
            onClick={(e) => {
              e.stopPropagation()
              setToggle(7)
            }}
          >
            omio
          </span>
          <div className="flex justify-between hover:cursor-pointer hidden lg:flex items-center text-sm gap-4">
            <div
              className="relative h-fit w-fit"
              onMouseLeave={(e) => {
                e.stopPropagation()
                setCommutesPopOver({
                  ...commutesPopOver,
                  trains: false,
                  // buses: false,
                  // flights: false,
                  // ferries: false,
                })
              }}
            >
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

              <CSSTransition
                nodeRef={trains}
                in={commutesPopOver.trains}
                timeout={300}
                classNames="fallfade"
                unmountOnExit
              >
                {popOverTrains}
              </CSSTransition>
            </div>

            <div
              className="relative"
              onMouseLeave={(e) => {
                e.stopPropagation()
                setCommutesPopOver({
                  ...commutesPopOver,
                  buses: false,
                })
              }}
            >
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
              <CSSTransition
                nodeRef={buses}
                in={commutesPopOver.buses}
                timeout={300}
                classNames="fallfade"
                unmountOnExit
              >
                {popOverBuses}
              </CSSTransition>
            </div>
            <div
              className="relative"
              onMouseLeave={(e) => {
                e.stopPropagation()
                setCommutesPopOver({
                  ...commutesPopOver,
                  flights: false,
                })
              }}
            >
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

              <CSSTransition
                nodeRef={flights}
                in={commutesPopOver.flights}
                timeout={300}
                classNames="fallfade"
                unmountOnExit
              >
                {popOverFlights}
              </CSSTransition>
            </div>
            <div
              className="relative"
              onMouseLeave={(e) => {
                e.stopPropagation()
                setCommutesPopOver({
                  ...commutesPopOver,
                  ferries: false,
                })
              }}
            >
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
              <CSSTransition
                nodeRef={ferries}
                in={commutesPopOver.ferries}
                timeout={300}
                classNames="fallfade"
                unmountOnExit
              >
                {popOverFerries}
              </CSSTransition>{' '}
            </div>
          </div>
        </div>
        <div className="flex hidden lg:flex gap-6 items-center text-sm">
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
