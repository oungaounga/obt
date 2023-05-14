/** @format */

import {
  closeIcon,
  checkIcon,
  euroIcon,
  dollarIcon,
  poundIcon,
  yenIcon,
  signalIcon,
} from '../../icons'

export const currencies = [
  {title: 'Currency', icon: closeIcon},
  {title: 'EUR', icon: euroIcon},
  {title: 'USD', icon: dollarIcon},
  {title: 'GBP', icon: poundIcon},
  {title: 'CNY', icon: yenIcon},
  {title: 'CHF', icon: signalIcon},
  {title: 'PLN', icon: signalIcon},
  {title: 'CWK', icon: signalIcon},
  {title: 'SEK', icon: signalIcon},
]

export const languages = [
  {title: 'Language', icon: signalIcon},
  {title: 'English (US)', icon: signalIcon},
  {title: 'Dansk', icon: signalIcon},
  {title: 'Deutsch', icon: signalIcon},
  {title: 'English (UK)', icon: signalIcon},
  {title: 'Español', icon: signalIcon},
  {title: 'Suomi', icon: signalIcon},
  {title: 'Français', icon: signalIcon},
  {title: 'Italiano', icon: signalIcon},
]

export const ListPanel = ({ref, list, which}) => {
  const {setPanel} = which
  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full flex flex-col divide-y-[1px] divide-y-neutral-200"
    >
      {list.map(({title, icon}, index) => {
        return (
          <div className="w-full h-full flex justify-between bg-white items-center pr-[1rem] pl-[1rem] ">
            <div className="w-fit flex">
              <div className={`grid ${index !== 1 && 'invisible'}`}>
                {checkIcon}
              </div>
              <p
                className={` text-[#132968]  ${
                  index === 0 ? 'text-xl font-bold' : 'text-md'
                } ${index !== 0 && ' pl-[0.5rem]'}
                ${index === 1 ? 'font-bold' : ''}`}
              >
                {title}
              </p>
            </div>
            <div
              className="w-fit m-[1rem] hover:cursor-pointer"
              onClick={() => {
                index === 0 && setPanel(0)
              }}
            >
              {index === 0 ? closeIcon : icon}
            </div>
          </div>
        )
      })}
    </div>
  )
}
