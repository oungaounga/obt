/** @format */

import {useContext} from 'react'
import {ToggleContext} from '../../../App'
import {
  closeIcon,
  rightchevronIcon,
  downChevronIcon,
  planeIcon,
  trainIcon,
  currenciesIcon,
  languagesIcon,
  busIcon,
  signalIcon,
} from '../../icons'

const trainsMenu = [
  'Night Trains',
  'Trains in Germany',
  'Trains in France',
  'Trains in Spain',
  'Trains in the UK',
  'Trains in Italy',
]
const busesMenu = [
  'Buses in Germany',
  'Buses in the UK',
  'Buses in France',
  'Buses in Spain',
  'Buses in the US',
]
const flightsMenu = [
  'Flights Cancellations',
  'Flights to Germany',
  'Flights to the UK',
  'Flights to France',
  'Flights to Spain',
  'Flights to the US',
  'Flights to Poland',
]
const ferriessMenu = [
  'Fred Olsen Express',
  'Toremar',
  'SNAV',
  'Moby Lines',
  'Trasmapi',
]

const panels = [
  {title: 'omio', icon: closeIcon, menu: ''},
  {title: 'Currency', icon: currenciesIcon, menu: ''},
  {title: 'Language', icon: languagesIcon, menu: ''},
  {title: 'Train', icon: trainIcon, menu: trainsMenu},
  {title: 'Buses', icon: busIcon, menu: busesMenu},
  {title: 'Flights', icon: planeIcon, menu: flightsMenu},
  {title: 'Ferries', icon: signalIcon, menu: ferriessMenu},
]

const createPopOver = (list) => {
  return (
    <div className="w-full text-[#132968] ">
      {list.map((item, index) => {
        return (
          <p key={index} className=" p-[0.3rem] pl-[2rem]">
            {item}
          </p>
        )
      })}
    </div>
  )
}

const UsefulLinks = () => {
  return (
    <div className="w-full bg-neutral-200">
      <p className="text-slate-400  text-sm p-[0.5rem] pl-[1rem]">
        USEFUL LINKS
      </p>
    </div>
  )
}

export default function ControlPanel({which}) {
  const {panel, setPanel} = which
  const {setToggle} = useContext(ToggleContext)
  return (
    <>
      {panels.map(({title, icon, menu}, index) => {
        return (
          <div className="flex flex-col">
            <div
              className="w-full flex bg-white justify-between items-center p-[0.5rem] pl-[1rem] pr-[1rem] "
              key={index}
            >
              <div className="w-fit flex gap-3 ">
                <div className={`grid ${index === 0 && 'hidden'}`}>{icon}</div>
                <p
                  className={`font-bold ${
                    index === 0 ? ' text-4xl' : 'text-normal'
                  }  text-[#132968]  `}
                >
                  {title}
                </p>
              </div>
              <div
                className="w-fit m-[0.5rem] grid"
                onClick={() => {
                  index === 0
                    ? setToggle(index)
                    : panel === index
                    ? setPanel(0)
                    : setPanel(index)

                  console.log('index of list', index)
                }}
              >
                {index === 0 && closeIcon}
                {index >= 1 && index <= 2 && rightchevronIcon}
                {index >= 3 && downChevronIcon}
              </div>
            </div>
            {index === 2 && <UsefulLinks />}

            {index >= 3 && panel === index && createPopOver(menu)}
          </div>
        )
      })}
    </>
  )
}
