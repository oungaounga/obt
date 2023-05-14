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

const panels = [
  {title: 'omio', icon: closeIcon},
  {title: 'Currency', icon: currenciesIcon},
  {title: 'Language', icon: languagesIcon},
  {title: 'Train', icon: trainIcon},
  {title: 'Buses', icon: busIcon},
  {title: 'Flights', icon: planeIcon},
  {title: 'Ferries', icon: signalIcon},
]

export default function ControlPanel({which}) {
  const {setPanel} = which
  const {setToggle} = useContext(ToggleContext)
  return (
    <>
      {panels.map(({title, icon}, index) => {
        return (
          <div
            className="w-full  flex bg-white justify-between items-center p-[0.5rem] pl-[1rem] pr-[1rem] "
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
                index === 0 ? setToggle(index) : setPanel(index)

                console.log('index of list', index)
              }}
            >
              {index === 0 && closeIcon}
              {index >= 1 && index <= 2 && rightchevronIcon}
              {index >= 3 && downChevronIcon}
            </div>
          </div>
        )
      })}
    </>
  )
}
