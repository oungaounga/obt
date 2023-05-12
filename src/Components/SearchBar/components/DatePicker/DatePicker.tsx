/** @format */
import React, {useState, useContext} from 'react'

import dayjs from 'dayjs'
import {rightchevronIcon, leftchevronIcon} from '../../../icons'

const today = dayjs()
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const returnDayOfWeek = (input) => {
  return week[input]
}
export const formatDateForInput = (date) => {
  return `${date.format('ddd')}, ${date.format('MMM')} ${date.format('DD')}`
}
const formatDateForDatePickerHeader = (date) => {
  return `${date.format('MMM')} ${date.format('YYYY')}`
}
const isPast = (date) => today.diff(date, 'd') >= 0
// const isToday = (date) => today.diff(date, 'd') == 0
const isToday = (date) =>
  today.format('DD/MM/YYYY') == date.format('DD/MM/YYYY')
const isWeekend = (date) => {
  let compare = date.format('ddd').toUpperCase()
  return compare === week[0] || compare === week[6]
}

const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  let refferedMonth = dayjs().year(year).month(month)
  // let refferedDay = refferedMonth.date()
  let firstDayOfMonth = refferedMonth.startOf('month')
  let lastDayOfMonth = refferedMonth.endOf('month')
  let realToday = dayjs()
  let dataMonth = []
  for (let i = firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i++) {
    dataMonth.push(refferedMonth.date(i))
  }
  const calendarTitle = formatDateForDatePickerHeader(refferedMonth)

  return [firstDayOfMonth.day(), dataMonth, realToday, calendarTitle]
}

function MakeCalendar({month}) {
  const [travelDate, setTravelDate] = useState(today)

  const date = generateDate(month)
  const v = date[1]
  const calendarTitle = date[3]
  const colStart = `col-start-${v[0].$W + 1}`
  const date2 = generateDate(month + 1)
  const v2 = date2[1]
  const calendarTitle2 = date2[3]
  const colStart2 = `col-start-${v2[0].$W + 1}`
  return (
    <>
      <div
        className={`relative w-fit min-h-[18rem] flex gap-[2rem] text-[#132968] `}
      >
        <div className={`flex flex-col bg-white `}>
          <div className="w-full flex justify-between">
            <div>{leftchevronIcon}</div>
            <p className="ml-0 pl-0 text-center font-bold text-lg">
              {' '}
              {calendarTitle}{' '}
            </p>
            <div className="cursor-pointer md:invisible">
              {rightchevronIcon}
            </div>
          </div>
          <div className="flex flex-col mt-[1rem] divide-y divide-[#F1F2F6]">
            <div className="w-[21rem] h-[3rem] grid grid-cols-7">
              {week.map((item, index) => (
                <p
                  key={index}
                  className={`grid justify-center content-center ${
                    index == 0 || index == 6 ? 'font-bold' : ''
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className=" w-[21rem] h-[15rem] grid grid-cols-7 gap-px">
              {v.map((item, index) => (
                <p
                  key={index}
                  className={`grid justify-center content-center  hover:cursor-pointer 
            ${index === 0 ? `${colStart}` : ' '} ${
                    travelDate.isSame(item, 'day') &&
                    'bg-slate-700 rounded-full text-white'
                  } ${isWeekend(item) && 'font-bold'} ${
                    isPast(item)
                      ? 'text-neutral-500'
                      : 'hover:rounded-full hover:ring-2 hover:ring-black hover:ring-inset active:bg-blue-900'
                  }`}
                  onClick={() => {
                    setTravelDate(item)
                  }}
                >
                  {item.$D}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={`hidden md:block flex flex-col bg-white`}>
          <div className="w-full flex justify-between">
            <div className="cursor-pointer md:invisible ">
              {leftchevronIcon}
            </div>
            <p className="ml-0 pl-0 text-center  font-bold text-lg">
              {' '}
              {calendarTitle2}{' '}
            </p>
            <div>{rightchevronIcon}</div>
          </div>
          <div className="flex flex-col mt-[1rem] divide-y divide-[#F1F2F6]">
            <div className="w-[21rem] h-[3rem] grid grid-cols-7">
              {week.map((item, index) => (
                <p
                  key={index}
                  className={`grid justify-center content-center ${
                    index == 0 || index == 6 ? 'font-bold' : ''
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className=" w-[21rem] h-[15rem] grid grid-cols-7 gap-px">
              {v2.map((item, index) => (
                <p
                  key={index}
                  className={`grid justify-center content-center  hover:cursor-pointer 
            ${index === 0 ? `${colStart2}` : ' '} ${
                    travelDate.isSame(item, 'day') &&
                    'bg-slate-700 rounded-full text-white'
                  } ${isWeekend(item) && 'font-bold'} ${
                    isPast(item)
                      ? 'text-neutral-500'
                      : 'hover:rounded-full hover:ring-2 hover:ring-black hover:ring-inset active:bg-blue-900'
                  }`}
                  onClick={() => {
                    setTravelDate(item)
                  }}
                >
                  {item.$D}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function DatePicker() {
  return (
    <>
      <div className="absolute w-fit bg-white z-40 top-[3rem] md:left-[-8rem] lg:left-[-4rem] xl:left-[-14rem] grid justify-center content-center p-[1.5rem] rounded-xl shadow-2xl">
        <div className={`relative w-fit min-h-[18rem] flex text-[#132968] `}>
          <MakeCalendar month={4} />
        </div>
      </div>
    </>
  )
}
